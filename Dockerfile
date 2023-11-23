FROM node:18.16.1-alpine

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

EXPOSE 8083

ENV PORT=8083

CMD [ "npm", "start" ]