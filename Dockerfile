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
COPY nginx.conf /etc/nginx/nginx.conf

# Corrección de permisos para evitar el error 403
RUN chmod -R 755 /usr/share/nginx/html && chown -R nginx:nginx /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]