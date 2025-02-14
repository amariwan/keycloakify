/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'admin/clients/credentials/SignedJWT.tsx'
 *
 * This file is provided by @keycloakify/keycloak-admin-ui version 260007.0.4.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import { useTranslation } from "react-i18next";
import { SelectControl } from "../../../shared/keycloak-ui-shared";
import { useServerInfo } from "../../context/server-info/ServerInfoProvider";
import { convertAttributeNameToForm } from "../../util";
import { FormFields } from "../ClientDetails";

type SignedJWTProps = {
  clientAuthenticatorType: string;
};

export const SignedJWT = ({ clientAuthenticatorType }: SignedJWTProps) => {
  const { cryptoInfo } = useServerInfo();
  const providers =
    clientAuthenticatorType === "client-jwt"
      ? (cryptoInfo?.clientSignatureAsymmetricAlgorithms ?? [])
      : (cryptoInfo?.clientSignatureSymmetricAlgorithms ?? []);

  const { t } = useTranslation();

  return (
    <SelectControl
      name={convertAttributeNameToForm<FormFields>(
        "attributes.token.endpoint.auth.signing.alg"
      )}
      label={t("signatureAlgorithm")}
      labelIcon={t("signatureAlgorithmHelp")}
      controller={{
        defaultValue: ""
      }}
      isScrollable
      maxMenuHeight="200px"
      options={[
        { key: "", value: t("anyAlgorithm") },
        ...providers.map(option => ({ key: option, value: option }))
      ]}
    />
  );
};
