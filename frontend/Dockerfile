# build environment
FROM node:alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY ./frontend .

RUN npm install --legacy-peer-deps

RUN npm run build

CMD ["npx", "serve", "-s", "build"]