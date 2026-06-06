# Dynamic Data - Official Website

Este es el repositorio oficial de la plataforma web de **Dynamic Data**, una consultoría especializada en ingeniería de software, arquitectura de datos y soluciones escalables.

## 🚀 Tecnologías Utilizadas

El proyecto está construido con un stack moderno enfocado en rendimiento y experiencia de usuario:

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **TypeScript**
- **next-themes** para modo oscuro / claro

## 🧰 Requisitos

- Node.js `>= 20`
- npm `>= 10`

## 🚀 Ejecución local

Sigue estos pasos para ejecutar el proyecto en tu máquina:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/dynamic-data-web.git
   cd dynamic-data-web
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre el sitio en tu navegador:
   ```bash
   http://localhost:3000
   ```

## ✅ Comandos útiles

- Iniciar el servidor de desarrollo:
  ```bash
  npm run dev
  ```
- Generar el build de producción:
  ```bash
  npm run build
  ```
- Iniciar el servidor en modo producción:
  ```bash
  npm run start
  ```
- Ejecutar el linter:
  ```bash
  npm run lint
  ```

## ℹ️ Nota sobre configuración

- El proyecto puede ejecutarse localmente sin variables de entorno.
- El envío de correo se maneja desde la API interna de Next.js en `src/app/api/contact/route.ts`.
- Puedes usar SendGrid o SMTP con las siguientes variables:
  - SendGrid: `SENDGRID_API_KEY`, `SENDGRID_TO_EMAIL`, `SENDGRID_FROM_EMAIL`
  - SMTP: `HOST_EMAIL`, `PORT_EMAIL`, `USER_EMAIL`, `PASS_EMAIL`, `SECURE_EMAIL`, `REQUIRE_TLS_EMAIL`, `EMAIL_REJECT_UNAUTHORIZED`, `EMAIL_FROM`, `EMAIL_TO`
- Si configuras SMTP, el sistema usará esas variables aunque no tengas `SENDGRID_API_KEY`.
- La carpeta `backend/` ya no es necesaria para el funcionamiento del sitio.
- Si deseas usar otro gestor de paquetes, `npm` es el recomendado porque el repositorio incluye `package-lock.json`.

## 📁 Estructura principal del proyecto

- `src/app/` - Rutas y páginas de la aplicación.
- `src/components/` - Componentes reutilizables por secciones.
- `src/styles/` - Estilos globales del proyecto.
- `package.json` - Scripts y dependencias.

## 💡 Consejos

- Usa Node 20 o superior para evitar incompatibilidades con Next.js 16.
- Si cambias dependencias, recuerda ejecutar `npm install` de nuevo.
- Para desplegar en producción, primero corre `npm run build` y luego `npm run start`.
