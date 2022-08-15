# syntax=docker/dockerfile:1
FROM node:18.4.0
LABEL Goncermor "goncermor@gmail.com"
RUN apt-get update -y
RUN apt-get install -y npm
RUN npm i
RUN node .