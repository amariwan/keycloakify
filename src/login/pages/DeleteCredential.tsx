import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Button } from "@/components/ui/button";

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
      <form className="form-actions responsive-container" action={url.loginAction} method="POST">
        <Button className={" w-full"} name="accept" id="kc-accept" type="submit" value={msgStr("doConfirmDelete")}>
          {msgStr("doConfirmDelete")}
        </Button>
        <Button className={" w-full"} name="cancel-aia" variant="outline" value={msgStr("doCancel")} id="kc-decline" type="submit">
          {msgStr("doCancel")}
        </Button>
      </form>
      <div className="clearfix" />
    </Template>
  );
}
