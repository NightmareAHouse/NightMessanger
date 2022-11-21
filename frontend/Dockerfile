## ==== CONFIGURE =====
## Use a Node 16 base image
#FROM node:alpine
## Set the working directory to /app inside the container
#WORKDIR /app/frontend
#RUN npm i -g npm@9.1.2
## Copy app files
#COPY ./frontend .
## ==== BUILD =====
## Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
#RUN npm i --legacy-peer-deps
#
#RUN npm run build
## Set the env to "production"
#ENV NODE_ENV production
## Expose the port on which the app will be running (3000 is the default that `serve` uses)
#EXPOSE 3000
## Start the app
#CMD [ "npx", "serve", "build" ]

# build environment
FROM node:alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY frontend .

RUN npm install --legacy-peer-deps

RUN npm run build

# production environment
FROM node:alpine
COPY --from=build /app/build /usr/share/nginx/html

ENV NODE_ENV production

COPY ../frontend .
EXPOSE 3000
CMD [ "npx", "serve", "build" ]