#第一行必须指令基于的基础镜像
#FROM node:10.16.3-alpine
FROM node:12.13.1-alpine3.10
#维护者信息 dr
#镜像的操作指令
# RUN apt-get update
RUN echo "http://mirrors.aliyun.com/alpine/latest-stable/main/" > /etc/apk/repositories
RUN apk update && apk upgrade 
RUN apk add --no-cache bash 
#nodeJS降级
RUN npm install -g n && \
    # n 12.13.0 && \
    npm install npm@4 -g
# eggjs 脚本执行
RUN npm install gulp -g

#初始化
RUN cd /home/node && \
    npm install 

VOLUME ["/home/node"]
EXPOSE 8080 443
WORKDIR /home/node

COPY startapp.sh /startapp.sh
RUN chmod +x /startapp.sh 




#ENTRYPOINT ["/startapp.sh"]
#容器启动时执行指令
# CMD /bin/bash

