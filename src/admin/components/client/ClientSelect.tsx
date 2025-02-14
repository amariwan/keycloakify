/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'admin/components/client/ClientSelect.tsx'
 *
 * This file is provided by @keycloakify/keycloak-admin-ui version 260007.0.4.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import type ClientRepresentation from "@keycloak/keycloak-admin-client/lib/defs/clientRepresentation";
import type { ClientQuery } from "@keycloak/keycloak-admin-client/lib/resources/clients";
import {
  SelectControl,
  SelectVariant,
  useFetch
} from "../../../shared/keycloak-ui-shared";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAdminClient } from "../../admin-client";
import type { ComponentProps } from "../dynamic/components";

type ClientSelectProps = ComponentProps & { variant?: `${SelectVariant}` };

export const ClientSelect = ({
  name,
  label,
  helpText,
  defaultValue,
  isDisabled = false,
  required = false,
  variant = "typeahead"
}: ClientSelectProps) => {
  const { adminClient } = useAdminClient();

  const { t } = useTranslation();

  const [clients, setClients] = useState<ClientRepresentation[]>([]);
  const [search, setSearch] = useState("");

  useFetch(
    () => {
      const params: ClientQuery = {
        max: 20
      };
      if (search) {
        params.clientId = search;
        params.search = true;
      }
      return adminClient.clients.find(params);
    },
    clients => setClients(clients),
    [search]
  );

  return (
    <SelectControl
      name={name!}
      label={t(label!)}
      labelIcon={t(helpText!)}
      controller={{
        defaultValue: defaultValue || "",
        rules: {
          required: {
            value: required,
            message: t("required")
          }
        }
      }}
      onFilter={value => setSearch(value)}
      variant={variant}
      isDisabled={isDisabled}
      options={clients.map(({ clientId }) => clientId!)}
    />
  );
};
