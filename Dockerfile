# Etapa 1: Construcción
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Etapa 2: Servidor Estático (Producción)
FROM nginx:stable-alpine
RUN rm /etc/nginx/conf.d/default.conf

# Copia los archivos compilados desde la etapa de build
COPY --from=build /app/out /usr/share/nginx/html
#COPY keys/* /etc/nginx/
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]