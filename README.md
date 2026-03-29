# Inspector de Webhooks

Un proyecto que funciona como inspector de webhooks, configurado como monorepo con `pnpm workspaces`. Incluye una API en el backend para recibir o gestionar los webhooks y una aplicación web en el frontend para visualizarlos.

## 🚀 Tecnologías Usadas

### Backend (`/api`)
- **[Fastify](https://fastify.dev/)**: Framework web rápido y de bajo costo.
- **[Drizzle ORM](https://orm.drizzle.team/)**: ORM para interactuar con la base de datos.
- **PostgreSQL**: Base de datos relacional (configurada vía Docker).
- **Zod**: Validación de esquemas y tipado de datos.
- **Biome**: Herramienta rápida para formateo y linting de código.
- **TypeScript**: Superconjunto de JavaScript con tipado estático.

### Frontend (`/web`)
- **[React 19](https://react.dev/)**: Biblioteca para construir interfaces de usuario.
- **[Vite](https://vitejs.dev/)**: Herramienta de construcción y entorno de desarrollo ultra rápido.
- **TypeScript**: Tipado estático integrado.

## ⚙️ Requisitos Previos

Asegúrate de tener instalado en tu sistema:
- [Node.js](https://nodejs.org/) (versión 20 o superior recomendada)
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`)
- [Docker](https://www.docker.com/) (para ejecutar la base de datos)

## 🛠️ Instalación

1. Clona el repositorio y posiciónate en la raíz del proyecto.
2. Instala las dependencias del monorepo:
   ```bash
   pnpm install
   ```
3. Configura las variables de entorno en el backend. Copia el archivo `.env.example` o crea un `.env` en la carpeta `api/` con tus credenciales de base de datos.

## 📦 Configuración de la Base de Datos

1. Levanta el contenedor de PostgreSQL usando Docker desde la carpeta `api/`:
   ```bash
   cd api
   docker-compose up -d
   ```
2. Ejecuta las migraciones de la base de datos usando Drizzle:
   ```bash
   pnpm db:generate
   pnpm db:migrate
   ```

## 🏃‍♂️ Uso

Dado que es un monorepo, puedes ejecutar el backend o el frontend de manera independiente.

### Iniciar la API (Backend)
Desde el directorio raíz o en una terminal separada, ingresa a la carpeta `api` y ejecuta el entorno de desarrollo:
```bash
cd api
pnpm dev
```
*El servidor debería estar corriendo localmente e incluirá recarga automática usando `tsx`.*

### Iniciar la App Web (Frontend)
En otra instancia de tu terminal, ve a la carpeta `web` e inicia Vite:
```bash
cd web
pnpm dev
```
*Esto abrirá un servidor de desarrollo para el frontend. Verás en la terminal el puerto local (usualmente `http://localhost:5173`).*

---
✨ ¡Listo para codear!
