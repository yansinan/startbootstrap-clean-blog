#!/bin/sh
docker run --name frpLWSWeb -v /home/dr/workspace/startbootstrap-clean-blog/frpDocker:/home/frp -w /home/frp -it --restart=always alpine ./frpc -c frpc.ini 