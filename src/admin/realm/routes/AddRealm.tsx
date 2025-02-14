/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'admin/realm/routes/AddRealm.tsx'
 *
 * This file is provided by @keycloakify/keycloak-admin-ui version 260007.0.4.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import { lazy } from "react";
import type { Path } from "react-router-dom";
import { generateEncodedPath } from "../../utils/generateEncodedPath";
import type { AppRouteObject } from "../../routes";

export type AddRealmParams = { realm: string };

const NewRealmForm = lazy(() => import("../add/NewRealmForm"));

export const AddRealmRoute: AppRouteObject = {
  path: "/:realm/add-realm",
  element: <NewRealmForm />,
  breadcrumb: t => t("createRealm"),
  handle: {
    access: "view-realm"
  }
};

export const toAddRealm = (params: AddRealmParams): Partial<Path> => ({
  pathname: generateEncodedPath(AddRealmRoute.path, params)
});
