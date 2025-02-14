/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'admin/authentication/components/FlowHeader.tsx'
 *
 * This file is provided by @keycloakify/keycloak-admin-ui version 260007.0.4.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import { useTranslation } from "react-i18next";
import {
  DataListItem,
  DataListItemRow,
  DataListDragButton,
  DataListItemCells,
  DataListCell
} from "../../../shared/@patternfly/react-core";

import "./flow-header.css";

export const FlowHeader = () => {
  const { t } = useTranslation();
  return (
    <DataListItem aria-labelledby="headerName" id="header">
      <DataListItemRow>
        <DataListDragButton
          className="keycloak__authentication__header-drag-button"
          aria-label={t("disabled")}
        />
        <DataListItemCells
          className="keycloak__authentication__header"
          dataListCells={[
            <DataListCell key="step" id="headerName">
              {t("steps")}
            </DataListCell>,
            <DataListCell key="requirement">{t("requirement")}</DataListCell>,
            <DataListCell key="config"></DataListCell>
          ]}
        />
      </DataListItemRow>
    </DataListItem>
  );
};
