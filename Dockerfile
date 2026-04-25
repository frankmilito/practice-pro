# 1. Build Stage
FROM node:20-alpine as builder

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

# 2. Production stage
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

CMD ["nginx","-g", "daemon off;"]