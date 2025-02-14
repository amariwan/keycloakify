/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'admin/clients/authorization/policy/NameDescription.tsx'
 *
 * This file is provided by @keycloakify/keycloak-admin-ui version 260007.0.4.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import { useTranslation } from "react-i18next";
import { TextAreaControl, TextControl } from "../../../../shared/keycloak-ui-shared";

type NameDescriptionProps = {
  isDisabled: boolean;
};

export const NameDescription = ({ isDisabled }: NameDescriptionProps) => {
  const { t } = useTranslation();

  return (
    <>
      <TextControl
        name="name"
        label={t("name")}
        rules={{ required: t("required") }}
        isDisabled={isDisabled}
      />
      <TextAreaControl
        name="description"
        label={t("description")}
        rules={{
          maxLength: { message: t("maxLength", { length: 255 }), value: 255 }
        }}
        isDisabled={isDisabled}
      />
    </>
  );
};
