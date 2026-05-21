# --- ETAPA 1: Dependencias ---
FROM node:23-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Aprovechamos el caché de capas de Docker
COPY package.json package-lock.json* ./
RUN npm ci

# --- ETAPA 2: Construcción ---
FROM node:23-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Desactivar telemetría de Next.js durante el build
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# --- ETAPA 3: Ejecución (Producción) ---
FROM node:23-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Crear un usuario de sistema para no correr como root (Seguridad)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# IMPORTANTE: Next.js copia los archivos necesarios a .next/standalone
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000

# El servidor standalone se lanza con server.js
CMD ["node", "server.js"]