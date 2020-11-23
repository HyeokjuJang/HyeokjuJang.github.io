#!bin/bash
apt install git wget libbz2-dev libffi-dev zlib1g-dev libssl-dev vim ssh zip libgl1-mesa-glx libglib2.0-0 cmake build-essential -y
git clone https://github.com/aai4r/aai4r-RL-for-Service-Personalize-and-Specialize.git && cd aai4r-RL-for-Service-Personalize-and-Specialize
git checkout flow-hj
mkdir -p results/space_invaders results/alien results/hero results/seaquest
pip install psutil pytz scikit-build cmake cython torch==1.6.0 opencv-python atari-py plotly tqdm torchvision==0.7.0
wget -O results/space_invaders/model.pth http://entaline.com:9506/index.php/s/bsMERoDrkpPk5rb/download 
wget -O results/seaquest/model.pth http://entaline.com:9506/index.php/s/GqCn6W6xFas3Xcs/download 
wget -O results/hero/model.pth http://entaline.com:9506/index.php/s/zpA7kHG8bkDtqjm/download 
wget -O results/alien/model.pth http://entaline.com:9506/index.php/s/4FcdwzpHgzktHs6/download
