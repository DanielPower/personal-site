FROM node:16.7-alpine as build

WORKDIR /app
COPY . .
RUN npm install --production
RUN npm build

FROM nginx:1.18-alpine AS deploy-static

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
