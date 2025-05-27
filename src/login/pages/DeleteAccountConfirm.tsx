import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { ConfirmationActions } from "@/login/components/FormButtons";
import { Alert } from "@/components/ui/alert";

export default function DeleteAccountConfirm(props: PageProps<Extract<KcContext, { pageId: "delete-account-confirm.ftl" }>, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

  getKcClsx({
    doUseDefaultCss,
    classes
  });

  const { url, triggered_from_aia } = kcContext;

  const { msg, msgStr } = i18n;

  return (
    <Template kcContext={kcContext} i18n={i18n} doUseDefaultCss={doUseDefaultCss} classes={classes} headerNode={msg("deleteAccountConfirm")}>
      <form action={url.loginAction} className="form-vertical" method="post">
        <Alert className="alert alert-warning" style={{ marginTop: "0", marginBottom: "30px" }}>
          <span className="pficon pficon-warning-triangle-o"></span>
          {msg("irreversibleAction")}
        </Alert>
        <p>{msg("deletingImplies")}</p>
        <ul>
          <li>{msg("loggingOutImmediately")}</li>
          <li>{msg("errasingData")}</li>
        </ul>
        <p className="delete-account-text">{msg("finalDeletionConfirmation")}</p>

        <ConfirmationActions
          actionUrl={url.loginAction}
          method="post"
          confirmProps={{ id: "confirm-delete", label: msgStr("doConfirmDelete"), isVisible: true, className: "", value: "" }}
          cancelProps={{ id: "cancel-aia", label: msgStr("doCancel"), isVisible: triggered_from_aia }}
        />
      </form>
    </Template>
  );
}
