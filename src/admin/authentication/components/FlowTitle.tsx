/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'admin/authentication/components/FlowTitle.tsx'
 *
 * This file is provided by @keycloakify/keycloak-admin-ui version 260007.0.4.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import {
  Card,
  CardBody,
  Text,
  TextVariants
} from "../../../shared/@patternfly/react-core";

import "./flow-title.css";

type FlowTitleProps = {
  id?: string;
  title: string;
  alias: string;
};

export const FlowTitle = ({ id, title, alias }: FlowTitleProps) => {
  return (
    <Card data-testid={title} className="keycloak__authentication__title" isFlat>
      <CardBody data-id={id} id={`title-id-${id}`}>
        {title} <br />
        <Text component={TextVariants.small}>{alias}</Text>
      </CardBody>
    </Card>
  );
};
