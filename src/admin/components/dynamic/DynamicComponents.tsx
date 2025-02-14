/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'admin/components/dynamic/DynamicComponents.tsx'
 *
 * This file is provided by @keycloakify/keycloak-admin-ui version 260007.0.4.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import type { ConfigPropertyRepresentation } from "@keycloak/keycloak-admin-client/lib/defs/authenticatorConfigInfoRepresentation";

import { COMPONENTS, isValidComponentType } from "./components";
import { convertAttributeNameToForm } from "../../util";

type DynamicComponentProps = {
  properties: ConfigPropertyRepresentation[];
  stringify?: boolean;
  isNew?: boolean;
};

export const DynamicComponents = ({ properties, ...rest }: DynamicComponentProps) => (
  <>
    {properties.map(property => {
      const componentType = property.type!;
      if (isValidComponentType(componentType)) {
        const Component = COMPONENTS[componentType];
        return <Component key={property.name} {...property} {...rest} />;
      } else {
        console.warn(`There is no editor registered for ${componentType}`);
      }
    })}
  </>
);

export const convertToName = (name: string): string =>
  convertAttributeNameToForm(`config.${name}`);
