# Stage 1: Theme bauen mit Node.js
FROM node:24-slim AS builder


RUN apt-get update && \
    apt-get install -y openjdk-17-jdk maven git && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . .

RUN npm install -g pnpm && \
    pnpm install && \
    pnpm build-keycloak-theme
