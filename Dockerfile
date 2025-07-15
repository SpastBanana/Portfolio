FROM node:current-alpine3.22 AS build
WORKDIR /app
RUN chown -R app /app
COPY package*.json ./
RUN NODE_ENV=development npm i
COPY . .
RUN npm run build

FROM nginx:alpine AS runtime
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 3000