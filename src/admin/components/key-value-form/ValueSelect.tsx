/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'admin/components/key-value-form/ValueSelect.tsx'
 *
 * This file is provided by @keycloakify/keycloak-admin-ui version 260007.0.4.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import { KeycloakSelect } from "../../../shared/keycloak-ui-shared";
import { SelectOption, TextInput } from "../../../shared/@patternfly/react-core";
import { useMemo, useState } from "react";
import { UseControllerProps, useController } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { DefaultValue } from "./KeyValueInput";

type ValueSelectProps = UseControllerProps & {
  selectItems: DefaultValue[];
  keyValue: string;
};

export const ValueSelect = ({ selectItems, keyValue, ...rest }: ValueSelectProps) => {
  const { t } = useTranslation();
  const { field } = useController(rest);
  const [open, setOpen] = useState(false);

  const defaultItem = useMemo(
    () => selectItems.find(v => v.key === keyValue),
    [selectItems, keyValue]
  );

  return defaultItem?.values ? (
    <KeycloakSelect
      onToggle={isOpen => setOpen(isOpen)}
      isOpen={open}
      onSelect={value => {
        field.onChange(value);
        setOpen(false);
      }}
      selections={field.value ? [field.value] : t("choose")}
      placeholderText={t("valuePlaceholder")}
    >
      {defaultItem.values.map(item => (
        <SelectOption key={item} value={item}>
          {item}
        </SelectOption>
      ))}
    </KeycloakSelect>
  ) : (
    <TextInput aria-label={t("customValue")} data-testid={rest.name} {...field} />
  );
};
