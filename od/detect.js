class App extends React.Component {
  // reference to both the video and canvas
  videoRef = React.createRef();
  canvasRef = React.createRef();
  videoWidth = window.innerWidth;
  videoHeight = window.innerHeight; //parseInt(parseFloat(this.videoWidth / 16.0) * 9.0);

  // we are gonna use inline style
  styles = {
    position: "fixed",
    top: 30,
    left: 0,
  };
  canvasStyles = {
    position: "fixed",
    top: 0,
    left: 0,
  };

  detectFromVideoFrame = (model, video) => {
    model.detect(video).then(
      (predictions) => {
        this.showDetections(predictions);

        requestAnimationFrame(() => {
          this.detectFromVideoFrame(model, video);
        });
      },
      (error) => {
        console.log("Couldn't start the webcam");
        console.error(error);
      }
    );
  };

  showDetections = (predictions) => {
    const ctx = this.canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const font = "24px helvetica";
    ctx.font = font;
    ctx.textBaseline = "top";

    predictions.forEach((prediction) => {
      const randColor = ["#02a1ff", "#fe7c06", "#ff43a1", "#39ff0c", "#00fef8", "#feff08"];
      const randBorderColor = ["#cbe8ff", "#ffebdb", "#feacd4", "#bbfeb2", "#bbffff", "#ffff9f"];
      const randNumber = prediction.class.charCodeAt() % randColor.length;
      const offsetY = 24;
      const x = prediction.bbox[0];
      const y = prediction.bbox[1] + offsetY;
      const width = prediction.bbox[2];
      const height = prediction.bbox[3];

      const textHeight = parseInt(font, 10);
      const textWidth = ctx.measureText(prediction.class).width + 10;

      // Draw the bounding box.
      ctx.strokeStyle = randColor[randNumber];
      ctx.lineWidth = 8;
      ctx.strokeRect(x, y, width, height + textHeight);
      // Draw the label background.
      ctx.fillStyle = randColor[randNumber];

      // draw top left rectangle
      ctx.fillRect(x, y - (textHeight + 10), textWidth + 10, textHeight + 10);
      ctx.strokeRect(x, y - (textHeight + 10), textWidth + 10, textHeight + 10);
      // draw bottom left rectangle
      //ctx.fillRect(x, y + height - textHeight, textWidth + 15, textHeight + 10);

      // Draw the text last to ensure it's on top.
      ctx.fillStyle = "#000000";
      ctx.fillText(prediction.class, x + 10, y + 3 - (+textHeight + 10));
      //ctx.fillText(prediction.score.toFixed(2), x, y + height - textHeight);
    });
  };

  componentDidMount() {
    if (navigator.mediaDevices.getUserMedia || navigator.mediaDevices.webkitGetUserMedia) {
      // define a Promise that'll be used to load the webcam and read its frames
      const webcamPromise = navigator.mediaDevices
        .getUserMedia({
          video: true,
          audio: false,
        })
        .then(
          (stream) => {
            // pass the current frame to the window.stream
            window.stream = stream;
            // pass the stream to the videoRef
            this.videoRef.current.srcObject = stream;
            if ((parseFloat(window.innerWidth) / parseFloat(this.videoRef.current.clientWidth)) * parseFloat(this.videoRef.current.clientHeight) > window.innerHeight) {
              this.videoWidth = (window.innerHeight / parseFloat(this.videoRef.current.clientHeight)) * parseFloat(this.videoRef.current.clientWidth);
              this.videoHeight = window.innerHeight;
            } else {
              this.videoWidth = window.innerWidth;
              this.videoHeight = (window.innerWidth / parseFloat(this.videoRef.current.clientWidth)) * parseFloat(this.videoRef.current.clientHeight);
            }

            return new Promise((resolve) => {
              this.videoRef.current.onloadedmetadata = () => {
                resolve();
              };
            });
          },
          (error) => {
            console.log("Couldn't start the webcam");
            console.error(error);
          }
        );

      // define a Promise that'll be used to load the model
      const loadlModelPromise = mobilenet.load();

      // resolve all the Promises
      Promise.all([loadlModelPromise, webcamPromise])
        .then((values) => {
          this.detectFromVideoFrame(values[0], this.videoRef.current);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  // here we are returning the video frame and canvas to draw,
  // so we are in someway drawing our video "on the go"
  render() {
    return (
      <div>
        <video style={this.styles} autoPlay muted playsInline ref={this.videoRef} width={window.innerWidth} height={parseInt((window.innerWidth * 3.0) / 4.0)} />
        <canvas style={this.canvasStyles} ref={this.canvasRef} width={window.innerWidth} height={parseInt((window.innerWidth * 3.0) / 4.0) + 100} />
      </div>
    );
  }
}

const domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(App), domContainer);
