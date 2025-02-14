/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'admin/components/error/ErrorRenderer.tsx'
 *
 * This file is provided by @keycloakify/keycloak-admin-ui version 260007.0.4.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import { useErrorBoundary, type FallbackProps } from "../../../shared/keycloak-ui-shared";
import {
  Alert,
  AlertActionCloseButton,
  AlertActionLink,
  AlertVariant,
  PageSection
} from "../../../shared/@patternfly/react-core";
import { useTranslation } from "react-i18next";

export const ErrorRenderer = ({ error }: FallbackProps) => {
  const { t } = useTranslation();
  const { showBoundary } = useErrorBoundary();

  const reset = () => {
    window.location.href = window.location.origin + window.location.pathname;
  };

  return (
    <PageSection>
      <Alert
        isInline
        variant={AlertVariant.danger}
        title={error.message}
        actionClose={<AlertActionCloseButton title={error.message} onClose={reset} />}
        actionLinks={
          <AlertActionLink onClick={() => showBoundary()}>{t("retry")}</AlertActionLink>
        }
      ></Alert>
    </PageSection>
  );
};
