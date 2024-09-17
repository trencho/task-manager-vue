FROM node:18-alpine AS build-stage

WORKDIR /app

COPY package.json ./
RUN yarn install
RUN yarn cache clean

COPY . .

RUN yarn build

FROM nginx:alpine AS production-stage
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
