FROM node:16-alpine

WORKDIR /app/frontend

COPY ./frontend .

RUN npm install --legacy-peer-deps
EXPOSE 3000
CMD ["npm", "run", "start"]