/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'admin/identity-providers/routes.ts'
 *
 * This file is provided by @keycloakify/keycloak-admin-ui version 260007.0.4.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import type { AppRouteObject } from "../routes";
import { IdentityProviderRoute } from "./routes/IdentityProvider";
import { IdentityProviderKeycloakOidcRoute } from "./routes/IdentityProviderKeycloakOidc";
import { IdentityProviderOidcRoute } from "./routes/IdentityProviderOidc";
import { IdentityProviderSamlRoute } from "./routes/IdentityProviderSaml";
import { IdentityProvidersRoute } from "./routes/IdentityProviders";
import { IdentityProviderAddMapperRoute } from "./routes/AddMapper";
import { IdentityProviderEditMapperRoute } from "./routes/EditMapper";
import { IdentityProviderCreateRoute } from "./routes/IdentityProviderCreate";

const routes: AppRouteObject[] = [
  IdentityProviderAddMapperRoute,
  IdentityProviderEditMapperRoute,
  IdentityProvidersRoute,
  IdentityProviderOidcRoute,
  IdentityProviderSamlRoute,
  IdentityProviderKeycloakOidcRoute,
  IdentityProviderCreateRoute,
  IdentityProviderRoute
];

export default routes;
