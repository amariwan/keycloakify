/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'admin/realm-settings/event-config/EventListenersForm.tsx'
 *
 * This file is provided by @keycloakify/keycloak-admin-ui version 260007.0.4.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import { ActionGroup, Button } from "../../../shared/@patternfly/react-core";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { SelectControl, SelectVariant } from "../../../shared/keycloak-ui-shared";
import { useServerInfo } from "../../context/server-info/ServerInfoProvider";

type EventListenersFormProps = {
  form: UseFormReturn;
  reset: () => void;
};

export const EventListenersForm = ({ form, reset }: EventListenersFormProps) => {
  const { t } = useTranslation();

  const serverInfo = useServerInfo();
  const eventListeners = serverInfo.providers?.eventsListener.providers;

  return (
    <FormProvider {...form}>
      <SelectControl
        name="eventsListeners"
        label={t("eventListeners")}
        labelIcon={t("eventListenersHelpTextHelp")}
        controller={{
          defaultValue: ""
        }}
        className="kc_eventListeners_select"
        chipGroupProps={{
          numChips: 3,
          expandedText: t("hide"),
          collapsedText: t("showRemaining")
        }}
        variant={SelectVariant.typeaheadMulti}
        options={Object.keys(eventListeners!)}
      />
      <ActionGroup>
        <Button variant="primary" type="submit" data-testid={"saveEventListenerBtn"}>
          {t("save")}
        </Button>
        <Button variant="link" data-testid={"revertEventListenerBtn"} onClick={reset}>
          {t("revert")}
        </Button>
      </ActionGroup>
    </FormProvider>
  );
};
