import { assert } from "keycloakify/tools/assert";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import { useScript } from "keycloakify/login/pages/WebauthnRegister.useScript";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogoutOtherSessions } from "@/login/components/LogoutOtherSessions";
import { cn } from "@/lib/utils";

export default function WebauthnRegister(props: PageProps<Extract<KcContext, { pageId: "webauthn-register.ftl" }>, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

  const { kcClsx } = getKcClsx({ doUseDefaultCss, classes });

  const { url, isSetRetry, isAppInitiatedAction } = kcContext;

  const { msg, msgStr } = i18n;

  const authButtonId = "authenticateWebAuthnButton";

  useScript({
    authButtonId,
    kcContext,
    i18n
  });

  return (
    <Template
      kcContext={kcContext}
      i18n={i18n}
      doUseDefaultCss={doUseDefaultCss}
      classes={classes}
      headerNode={
        <>
          <span className={kcClsx("kcWebAuthnKeyIcon") + " px-5"} />
          {msg("webauthn-registration-title")}
        </>
      }
    >
      <form id="register" className={kcClsx("kcFormClass")} action={url.loginAction} method="post">
        <div className={kcClsx("kcFormGroupClass")}>
          <Input type="hidden" id="clientDataJSON" name="clientDataJSON" />
          <Input type="hidden" id="attestationObject" name="attestationObject" />
          <Input type="hidden" id="publicKeyCredentialId" name="publicKeyCredentialId" />
          <Input type="hidden" id="authenticatorLabel" name="authenticatorLabel" />
          <Input type="hidden" id="transports" name="transports" />
          <Input type="hidden" id="error" name="error" />
          <LogoutOtherSessions kcClsx={kcClsx} i18n={i18n} />
        </div>
      </form>
      <div className="responsive-container">
        <Button
          type="submit"
          className={cn(buttonVariants({}), "w-full")}
          id="registerWebAuthn"
          value={msgStr("doRegisterSecurityKey")}
          onClick={() => {
            assert("registerSecurityKey" in window);
            assert(typeof window.registerSecurityKey === "function");
            window.registerSecurityKey();
          }}
        >
          {msgStr("doRegisterSecurityKey")}
        </Button>

        {!isSetRetry && isAppInitiatedAction && (
          <form action={url.loginAction} className="all-unset w-full !p-0 " id="kc-webauthn-settings-form" method="post">
            <Button
              type="submit"
              variant="secondary"
              className={kcClsx("kcButtonClass", "kcButtonDefaultClass", "kcButtonBlockClass", "kcButtonLargeClass") + " w-full"}
              id="cancelWebAuthnAIA"
              name="cancel-aia"
              value="true"
            >
              {msg("doCancel")}
            </Button>
          </form>
        )}
      </div>
    </Template>
  );
}
