/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'admin/utils/useIsFeatureEnabled.ts'
 *
 * This file is provided by @keycloakify/keycloak-admin-ui version 260007.0.4.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import { useServerInfo } from "../context/server-info/ServerInfoProvider";

export enum Feature {
  AdminFineGrainedAuthz = "ADMIN_FINE_GRAINED_AUTHZ",
  ClientPolicies = "CLIENT_POLICIES",
  Kerberos = "KERBEROS",
  DynamicScopes = "DYNAMIC_SCOPES",
  DPoP = "DPOP",
  DeviceFlow = "DEVICE_FLOW",
  TransientUsers = "TRANSIENT_USERS",
  ClientTypes = "CLIENT_TYPES",
  DeclarativeUI = "DECLARATIVE_UI",
  Organizations = "ORGANIZATION",
  OpenId4VCI = "OID4VC_VCI"
}

export default function useIsFeatureEnabled() {
  const { features } = useServerInfo();

  return function isFeatureEnabled(feature: Feature) {
    if (!features) {
      return false;
    }
    return features
      .filter(f => f.enabled)
      .map(f => f.name)
      .includes(feature);
  };
}
