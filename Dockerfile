# Dockerfile
FROM node:21

# create destination directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# update and install dependency
RUN apt update
# RUN apt install git

# copy the app, note .dockerignore
COPY ./ /usr/src/app/
RUN npm install

COPY entrypoint.sh .

EXPOSE $port

CMD [ "bash", "entrypoint.sh" ]