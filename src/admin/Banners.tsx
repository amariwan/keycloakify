/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'admin/Banners.tsx'
 *
 * This file is provided by @keycloakify/keycloak-admin-ui version 260007.0.4.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import { Banner, Flex, FlexItem } from "../shared/@patternfly/react-core";
import { ExclamationTriangleIcon } from "../shared/@patternfly/react-icons";
import { useWhoAmI } from "./context/whoami/WhoAmI";
import { useTranslation } from "react-i18next";

type WarnBannerProps = {
  msg: string;
};

const WarnBanner = ({ msg }: WarnBannerProps) => {
  const { t } = useTranslation();

  return (
    <Banner screenReaderText={t(msg)} variant="gold" isSticky>
      <Flex spaceItems={{ default: "spaceItemsSm" }} flexWrap={{ default: "wrap" }}>
        <FlexItem style={{ whiteSpace: "normal" }}>
          <ExclamationTriangleIcon style={{ marginRight: "0.3rem" }} />
          {t(msg)}
        </FlexItem>
      </Flex>
    </Banner>
  );
};

export const Banners = () => {
  const { whoAmI } = useWhoAmI();

  if (whoAmI.isTemporary()) return <WarnBanner msg="loggedInAsTempAdminUser" />;
};
