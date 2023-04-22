FROM node:19 AS build

WORKDIR /app

COPY package.json ./
RUN yarn install
COPY . ./
RUN yarn run build
RUN mkdir -p /app/build
COPY --chown=node:node . /app/build

FROM nginx:1.21-alpine
COPY --from=build /app/build /usr/share/nginx/html
