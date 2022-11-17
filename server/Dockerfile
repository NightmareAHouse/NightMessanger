FROM node:16-alpine

WORKDIR /app/server

COPY ./server .

RUN npm install --legacy-peer-deps
EXPOSE 5000
CMD ["npm", "start"]