FROM node:18.12-alpine

WORKDIR /

COPY package* .

RUN apk update && apk add bash

RUN npm install

COPY . .

COPY start.sh .

EXPOSE 3001

ENV POSTGRES_DATABASE=christmas-gifts

CMD ["/bin/bash", "-c", "/start.sh"]