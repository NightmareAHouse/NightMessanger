FROM node:alpine

WORKDIR /app/server
COPY ./server .

RUN npm install

EXPOSE 5000
CMD ["npm", "start"]