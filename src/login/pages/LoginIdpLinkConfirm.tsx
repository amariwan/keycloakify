import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { ConfirmationActions } from "@/login/components/FormButtons";

export default function LoginIdpLinkConfirm(props: PageProps<Extract<KcContext, { pageId: "login-idp-link-confirm.ftl" }>, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

  getKcClsx({
    doUseDefaultCss,
    classes
  });

  const { url, idpAlias } = kcContext;

  const { msg, msgStr } = i18n;

  return (
    <Template kcContext={kcContext} i18n={i18n} doUseDefaultCss={doUseDefaultCss} classes={classes} headerNode={msg("confirmLinkIdpTitle")}>
      <ConfirmationActions
        actionUrl={url.loginAction}
        method="post"
        confirmProps={{
          id: "updateProfile",
          name: "submitAction",
          label: msgStr("confirmLinkIdpReviewProfile"),
          isVisible: true,
          value: "updateProfile"
        }}
        cancelProps={{
          id: "linkAccount",
          name: "submitAction",
          label: msgStr("confirmLinkIdpContinue", idpAlias),
          value: "linkAccount",
          isVisible: true
        }}
      />
    </Template>
  );
}
