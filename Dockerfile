FROM node:18.18.2

WORKDIR /src

COPY package*.json .

RUN npm install

COPY . . 

EXPOSE 3000

CMD ["node", "index.js"]