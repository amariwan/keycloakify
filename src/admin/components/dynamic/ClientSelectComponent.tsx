/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'admin/components/dynamic/ClientSelectComponent.tsx'
 *
 * This file is provided by @keycloakify/keycloak-admin-ui version 260007.0.4.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import type { ComponentProps } from "./components";
import { ClientSelect } from "../client/ClientSelect";
import { convertToName } from "./DynamicComponents";

export const ClientSelectComponent = (props: ComponentProps) => (
  <ClientSelect {...props} name={convertToName(props.name!)} />
);
