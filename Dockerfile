FROM node:16.16.0 as build
WORKDIR /app
RUN npm install -g @angular/cli
COPY ./ .
RUN npm install
RUN npm run build

FROM nginx:1.17-alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/angular-frontend /usr/share/nginx/html
EXPOSE 80
