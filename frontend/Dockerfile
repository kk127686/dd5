FROM node:14.20.1 AS build
WORKDIR /build
COPY . .
RUN npm i --registry=https://registry.npmmirror.com && npm run build

FROM nginx:latest
EXPOSE 80
COPY --from=build /build/dist /usr/share/nginx/html
RUN envsubst '${BACKEND_HOST}' < /default.conf.template > ./conf.d/default.conf
COPY ./conf.d/default.conf /etc/nginx/conf.d/default.conf
RUN cat /etc/nginx/conf.d/default.conf