/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'admin/KcPage.tsx'
 *
 * This file is provided by @keycloakify/keycloak-admin-ui version 260007.0.4.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

import { lazy } from "react";
import { KcAdminUiLoader } from "@keycloakify/keycloak-admin-ui";
import { KcContext } from "./KcContext";

const KcAdminUi = lazy(() => import("./KcAdminUi"));

export default function KcPage(props: { kcContext: KcContext }) {
  const { kcContext } = props;

  return <KcAdminUiLoader kcContext={kcContext} KcAdminUi={KcAdminUi} />;
}
