FROM node:16-alpine
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm ci
COPY . /app
CMD node server.js
EXPOSE 3000