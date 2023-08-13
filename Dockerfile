FROM node:20-alpine3.17

WORKDIR /demo

COPY . .

ENV PORT 3000
RUN npm install

CMD npm start