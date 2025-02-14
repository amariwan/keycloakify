/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'admin/components/dynamic/UserProfileAttributeListComponent.tsx'
 *
 * This file is provided by @keycloakify/keycloak-admin-ui version 260007.0.4.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import type { UserProfileConfig } from "@keycloak/keycloak-admin-client/lib/defs/userProfileMetadata";
import { FormErrorText, HelpItem, useFetch } from "../../../shared/keycloak-ui-shared";
import { FormGroup } from "../../../shared/@patternfly/react-core";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useAdminClient } from "../../admin-client";
import { KeySelect } from "../key-value-form/KeySelect";
import { convertToName } from "./DynamicComponents";
import type { ComponentProps } from "./components";

export const UserProfileAttributeListComponent = ({
  name,
  label,
  helpText,
  required = false
}: ComponentProps) => {
  const { adminClient } = useAdminClient();

  const { t } = useTranslation();
  const {
    formState: { errors }
  } = useFormContext();

  const [config, setConfig] = useState<UserProfileConfig>();
  const convertedName = convertToName(name!);

  useFetch(
    () => adminClient.users.getProfile(),
    cfg => setConfig(cfg),
    []
  );

  const convert = (config?: UserProfileConfig) => {
    if (!config?.attributes) return [];

    return config.attributes.map(option => ({
      key: option.name!,
      label: option.name!
    }));
  };

  if (!config) return null;

  return (
    <FormGroup
      label={t(label!)}
      isRequired={required}
      labelIcon={<HelpItem helpText={t(helpText!)} fieldLabelId={label!} />}
      fieldId={convertedName!}
    >
      <KeySelect
        name={convertedName}
        rules={required ? { required: true } : {}}
        selectItems={convert(config)}
      />
      {errors[convertedName!] && <FormErrorText message={t("required")} />}
    </FormGroup>
  );
};
