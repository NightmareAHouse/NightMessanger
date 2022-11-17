FROM node:16-alpine

WORKDIR /app/frontend

COPY ../frontend .

RUN npm install --legacy-peer-deps
CMD ["npm", "run", "start"]