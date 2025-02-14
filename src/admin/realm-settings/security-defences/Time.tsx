/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'admin/realm-settings/security-defences/Time.tsx'
 *
 * This file is provided by @keycloakify/keycloak-admin-ui version 260007.0.4.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import { CSSProperties } from "react";
import { useTranslation } from "react-i18next";

import { TimeSelectorControl } from "../../components/time-selector/TimeSelectorControl";

export const Time = ({ name, style }: { name: string; style?: CSSProperties }) => {
  const { t } = useTranslation();
  return (
    <TimeSelectorControl
      name={name}
      style={style}
      label={t(name)}
      labelIcon={t(`${name}Help`)}
      controller={{
        defaultValue: "",
        rules: { required: t("required") }
      }}
    />
  );
};
