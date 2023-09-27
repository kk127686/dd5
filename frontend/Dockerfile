FROM node:14.20.1 AS build
WORKDIR /build
COPY . .
RUN npm i --registry=https://registry.npmmirror.com
RUN npm run build

FROM nginx:latest
COPY --from=build /build/dist /usr/share/nginx/html