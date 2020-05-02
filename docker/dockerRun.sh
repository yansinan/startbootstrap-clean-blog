#!/bin/sh
docker run --name playback -v /home/dr/workspace/startbootstrap-clean-blog:/home/node -w /home/node -it -p 16000:80 --rm docker_lws-playback /bin/bash