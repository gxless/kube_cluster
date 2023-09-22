FROM node:18

WORKDIR /usr/src/app
COPY package*.json ./
COPY src ./src
RUN npm install

CMD ["node", "./src/index.js"]
