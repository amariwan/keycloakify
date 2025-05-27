# Stage 1: Theme bauen mit Node.js
FROM node:24-slim AS theme-builder

WORKDIR /app

RUN apt-get update && \
    apt-get install -y openjdk-17-jdk maven git && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN npm install -g pnpm@latest

COPY . .

RUN pnpm install && \
    pnpm build-keycloak-theme

# Stage 2: Keycloak Image mit Theme
FROM quay.io/keycloak/keycloak:latest

ARG KC_BOOTSTRAP_ADMIN_USERNAME=admin
ARG KC_BOOTSTRAP_ADMIN_PASSWORD=password
ARG THEME_NAME=reha-inside-theme

ENV KC_BOOTSTRAP_ADMIN_USERNAME=${KC_BOOTSTRAP_ADMIN_USERNAME}
ENV KC_BOOTSTRAP_ADMIN_PASSWORD=${KC_BOOTSTRAP_ADMIN_PASSWORD}

USER root

RUN mkdir -p /opt/keycloak/themes

COPY --from=theme-builder /app/dist_keycloak/${THEME_NAME}.jar /opt/keycloak/themes/${THEME_NAME}.jar

RUN chown -R keycloak:keycloak /opt/keycloak/themes

USER keycloak

EXPOSE 8087

ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start-dev"]
