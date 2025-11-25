# Builder stage: install deps and build static assets
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY tsconfig*.json vite.config.ts tailwind.config.cjs postcss.config.cjs index.html ./
COPY src ./src
COPY public ./public

RUN npm run build

# Runtime stage with Node to serve static files and media API
FROM node:20-alpine AS runner
WORKDIR /app

COPY --from=builder /app/package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist
COPY server.cjs .

# media directory will be mounted by docker-compose
RUN mkdir -p /app/media

ENV PORT=3000
EXPOSE 3000

CMD ["node", "server.cjs"]
