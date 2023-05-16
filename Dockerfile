#Dockerfile para Heroku que descargará la imagen con docker, descargara el proyecto y ejecutará el docker-compose de la aplicación

FROM heroku/heroku:18

RUN apt-get update && apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    software-properties-common \
    git \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -

RUN add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   bionic \
   stable"

RUN apt-get update && apt-get install -y docker-ce

RUN curl -L

RUN docker --version

RUN git clone "https://github.com/borjeta/nuevodespliegue.git"

RUN cd nuevodespliegue

RUN docker-compose up -d

RUN docker ps -a

RUN docker-compose logs -f


