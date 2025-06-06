import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Button } from "@/components/ui/button";

export default function Terms(props: PageProps<Extract<KcContext, { pageId: "terms.ftl" }>, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

  const { kcClsx } = getKcClsx({
    doUseDefaultCss,
    classes
  });

  const { msg, msgStr } = i18n;

  const { url } = kcContext;

  return (
    <Template
      kcContext={kcContext}
      i18n={i18n}
      doUseDefaultCss={doUseDefaultCss}
      classes={classes}
      displayMessage={false}
      headerNode={msg("termsTitle")}
    >
      <div id="kc-terms-text">{msg("termsText")}</div>
      <form className="form-actions responsive-container" action={url.loginAction} method="POST">
        <Button
          className={kcClsx("kcButtonClass", "kcButtonClass", "kcButtonClass", "kcButtonLargeClass") + " w-full"}
          name="accept"
          id="kc-accept"
          type="submit"
          value={msgStr("doAccept")}
        >
          {msgStr("doAccept")}
        </Button>
        <Button className={"w-full"} name="cancel" id="kc-decline" type="submit" variant="secondary" value={msgStr("doDecline")}>
          {msgStr("doDecline")}
        </Button>
      </form>
      <div className="clearfix" />
    </Template>
  );
}
