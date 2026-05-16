# ... (Etapa 1 de construcción) ...

# Etapa 2: Servidor Estático
FROM nginx:stable-alpine
RUN rm /etc/nginx/conf.d/default.conf

# Copia los archivos compilados
COPY --from=build /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# 🔥 AÑADE ESTAS LÍNEAS PARA REPARAR LOS PERMISOS DEL 403:
RUN chmod -R 755 /usr/share/nginx/html && \
    chown -R nginx:nginx /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]