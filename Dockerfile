# Builder stage: run on the build machine's architecture.
FROM --platform=$BUILDPLATFORM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY tsconfig*.json vite.config.ts tailwind.config.cjs postcss.config.cjs index.html ./
COPY src ./src
COPY public ./public

RUN npm run build

# Runtime stage: built for the target platform (cluster nodes)
FROM --platform=$TARGETPLATFORM node:20-alpine AS runner
WORKDIR /app

COPY --from=builder /app/package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist
COPY server.cjs .

# media directory will be mounted by docker-compose / k8s volume
RUN mkdir -p /app/media

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["node", "server.cjs"]
