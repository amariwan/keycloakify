import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { ConfirmationActions } from "@/login/components/FormButtons";

export default function DeleteCredential(props: PageProps<Extract<KcContext, { pageId: "delete-credential.ftl" }>, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

  const { msgStr, msg } = i18n;

  getKcClsx({
    doUseDefaultCss,
    classes
  });

  const { url, credentialLabel } = kcContext;

  return (
    <Template
      kcContext={kcContext}
      i18n={i18n}
      doUseDefaultCss={doUseDefaultCss}
      classes={classes}
      displayMessage={false}
      headerNode={msg("deleteCredentialTitle", credentialLabel)}
    >
      <div id="kc-delete-text">{msg("deleteCredentialMessage", credentialLabel)}</div>

      <ConfirmationActions
        actionUrl={url.loginAction}
        method="post"
        confirmProps={{ id: "kc-accept", name: "accept", label: msgStr("doConfirmDelete"), isVisible: true, className: "", value: "" }}
        cancelProps={{ id: "kc-decline", name: "cancel-aia", label: msgStr("doCancel"), isVisible: true }}
      />
      <div className="clearfix" />
    </Template>
  );
}
