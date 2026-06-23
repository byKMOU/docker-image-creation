####### STAGE 1 : node  #####
FROM node:20-alpine AS stage_1

WORKDIR /opt/catalog-web/

COPY package*.json .
RUN npm install

COPY . .

RUN npm run build


####### STAGE 2 : web server #####
FROM nginx:alpine

COPY --from=stage_1 /opt/catalog-web/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

