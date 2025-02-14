/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'admin/context/RecentRealms.tsx'
 *
 * This file is provided by @keycloakify/keycloak-admin-ui version 260007.0.4.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import { PropsWithChildren, useEffect } from "react";

import {
  createNamedContext,
  useRequiredContext,
  useStoredState
} from "../../shared/keycloak-ui-shared";
import { useRealm } from "./realm-context/RealmContext";

const MAX_REALMS = 4;

export const RecentRealmsContext = createNamedContext<string[] | undefined>(
  "RecentRealmsContext",
  undefined
);

export const RecentRealmsProvider = ({ children }: PropsWithChildren) => {
  const { realm } = useRealm();
  const [storedRealms, setStoredRealms] = useStoredState(localStorage, "recentRealms", [
    realm
  ]);

  useEffect(() => {
    const newRealms = [...new Set([realm, ...storedRealms])];
    setStoredRealms(newRealms.slice(0, MAX_REALMS));
  }, [realm]);

  return (
    <RecentRealmsContext.Provider value={storedRealms}>
      {children}
    </RecentRealmsContext.Provider>
  );
};

export const useRecentRealms = () => useRequiredContext(RecentRealmsContext);
