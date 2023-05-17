# Imagen base
FROM docker

# Instala Docker dentro del contenedor
RUN apk add --update docker openrc

# Inicia el servicio de Docker
RUN rc-update add docker boot

# Instala Docker Compose dentro del contenedor
RUN apk add --update py-pip
RUN pip install docker-compose

#instala git 
RUN apk add git
#clona el repositorio
RUN git clone https://github.com/borjeta/nuevodespliegue.git

# Copia el archivo docker-compose.yml a la ubicación correcta dentro del contenedor
COPY docker-compose.yml /docker-compose.yml

# Configura el punto de entrada del contenedor para ejecutar el docker-compose
CMD ["docker-compose", "-f", "/docker-compose.yml", "up", "-d"]

# Expone el puerto 80 del contenedor
EXPOSE 3000

RUN cd nuevodespliegue

# Configuramos ip del servidor
RUN sed -i 's/localhost/'172.16.238.1'/g' /nuevodespliegue/docker-compose.yml



CMD ["docker-compose", "-f", "/nuevodespliegue/docker-compose.yml", "up", "-d"]