FROM node:current-alpine AS build
WORKDIR /app
COPY package-lock.json package.json ./
RUN npm install
COPY . .
RUN npm run build:docker

FROM nginx:alpine AS runtime
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 3000