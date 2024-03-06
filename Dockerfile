# syntax=docker/dockerfile:1
FROM node:18.4.0
RUN apt-get update -y
RUN apt-get install -y npm
RUN npm i
RUN node .
