(this["webpackJsonpplaylist-maker"]=this["webpackJsonpplaylist-maker"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(6),i=n.n(o),l=(n(12),n(4)),r=n(3);n(13),n(14);var u=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)([]),u=Object(r.a)(i,2),s=u[0],f=u[1],d=Object(a.useState)([]),h=Object(r.a)(d,2),m=h[0],v=h[1];return Object(a.useEffect)((function(){var e=n.split("\n");f([]),v([]);for(var t=function(t){"\ub178\ub798"===e[t]&&e.length-4>t&&"\uc544\ud2f0\uc2a4\ud2b8"===e[t+2]&&(f((function(n){return[].concat(Object(l.a)(n),[e[t+1]])})),v((function(n){return[].concat(Object(l.a)(n),[e[t+3]])})))},a=0;a<e.length;a++)t(a)}),[n]),Object(a.useEffect)((function(){var e=document.getElementById("canvas");0===m.length?function(){var t=document.getElementById("canvas").getContext("2d");e.height=150,t.fillStyle="white",t.fillRect(0,0,e.width,e.height),t.fillStyle="black",t.font="32px arial",t.fillText("Input text up there!",250,50)}():function(){var t=document.getElementById("canvas").getContext("2d");e.height=150*m.length,t.fillStyle="white",t.fillRect(0,0,e.width,e.height),t.fillStyle="black",t.font="32px arial",s.map((function(e,n){t.fillText(e,20,40+150*n)})),t.font="26px arial",m.map((function(n,a){t.fillText(n,40,100+150*a),t.beginPath(),t.moveTo(0,150*a),t.lineTo(e.width,150*a),t.stroke()}))}()}),[m]),c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value,n={};t.replace(/[?&]+([^=&]+)=([^&]*)/gi,(function(e,t,a){n[t]=a}));var a=fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&id="+n.v+"&key=AIzaSyByqe-EizLZQ0Fj-aZR6sI2ILbjS7xj6iI").then((function(e){return e}));console.log(a)}}),c.a.createElement("textarea",{width:"80%",onChange:function(e){o(e.target.value)}}),c.a.createElement("div",null,s.map((function(e,t){return c.a.createElement("div",{key:t},e)}))),c.a.createElement("div",null,c.a.createElement("canvas",{width:750,height:150,id:"canvas"})),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(e){var t=document.createElement("a");t.download="filename.png",t.href=document.getElementById("canvas").toDataURL(),t.click()}},"download"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.a417640f.chunk.js.map