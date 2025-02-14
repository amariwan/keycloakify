/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'account/KcAccountUi.tsx'
 *
 * This file is provided by @keycloakify/keycloak-account-ui version 260007.0.3.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

import "@patternfly/react-core/dist/styles/base.css";
import "@patternfly/patternfly/patternfly-addons.css";

import { useEffect, useReducer } from "react";
import { initializeDarkMode } from "../shared/keycloak-ui-shared";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";

initializeDarkMode();


const router = createBrowserRouter(routes);

export default function KcAccountUi() {
  const [isI18nInitialized, setI18nInitialized] = useReducer(() => true, false);

  useEffect(() => {
    setI18nInitialized();
  }, []);

  if (!isI18nInitialized) {
    return null;
  }

  return <RouterProvider router={router} />;
}
