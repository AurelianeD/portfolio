FROM node:19 AS build

WORKDIR /app

COPY . ./
RUN yarn install
RUN yarn build

CMD node build/index.js
