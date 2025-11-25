# Builder stage: install deps and build static assets
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source
COPY tsconfig*.json vite.config.ts tailwind.config.cjs postcss.config.cjs index.html ./
COPY src ./src

# Build
RUN npm run build

# Serve with nginx
FROM nginx:alpine AS runner
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
