import { Fragment } from "react";
import { clsx } from "keycloakify/tools/clsx";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import { useScript } from "keycloakify/login/pages/WebauthnAuthenticate.useScript";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function WebauthnAuthenticate(props: PageProps<Extract<KcContext, { pageId: "webauthn-authenticate.ftl" }>, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

  const { kcClsx } = getKcClsx({ doUseDefaultCss, classes });

  const { url, realm, registrationDisabled, authenticators, shouldDisplayAuthenticators } = kcContext;

  const { msg, msgStr, advancedMsg } = i18n;

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
      displayInfo={realm.registrationAllowed && !registrationDisabled}
      infoNode={
        <div id="kc-registration">
          <span>
            {msg("noAccount")}{" "}
            <a tabIndex={6} href={url.registrationUrl}>
              {msg("doRegister")}
            </a>
          </span>
        </div>
      }
      headerNode={msg("webauthn-login-title")}
    >
      <div id="kc-form-webauthn" className={kcClsx("kcFormClass")}>
        <form id="webauth" action={url.loginAction} method="post">
          <Input type="hidden" id="clientDataJSON" name="clientDataJSON" />
          <Input type="hidden" id="authenticatorData" name="authenticatorData" />
          <Input type="hidden" id="signature" name="signature" />
          <Input type="hidden" id="credentialId" name="credentialId" />
          <Input type="hidden" id="userHandle" name="userHandle" />
          <Input type="hidden" id="error" name="error" />
        </form>
        <div className={clsx(kcClsx("kcFormGroupClass"), "no-bottom-margin")}>
          {authenticators && (
            <>
              <form id="authn_select" className={kcClsx("kcFormClass")}>
                {authenticators.authenticators.map(authenticator => (
                  <input key={authenticator.credentialId} type="hidden" name="authn_use_chk" value={authenticator.credentialId} />
                ))}
              </form>

              {shouldDisplayAuthenticators && (
                <>
                  {authenticators.authenticators.length > 1 && (
                    <p className={kcClsx("kcSelectAuthListItemTitle")}>{msg("webauthn-available-authenticators")}</p>
                  )}
                  <div className={kcClsx("kcFormOptionsClass")}>
                    {authenticators.authenticators.map((authenticator, i) => (
                      <div key={i} id="kc-webauthn-authenticator" className={kcClsx("kcSelectAuthListItemClass")}>
                        <div className={kcClsx("kcSelectAuthListItemIconClass")}>
                          <i
                            className={clsx(
                              (() => {
                                const className = kcClsx(authenticator.transports.iconClass as any);
                                if (className === authenticator.transports.iconClass) {
                                  return kcClsx("kcWebAuthnDefaultIcon");
                                }
                                return className;
                              })(),
                              kcClsx("kcSelectAuthListItemIconPropertyClass")
                            )}
                          />
                        </div>
                        <div>
                          <div id="kc-webauthn-authenticator-label" className={kcClsx("kcSelectAuthListItemHeadingClass")}>
                            {advancedMsg(authenticator.label)}
                          </div>
                          {authenticator.transports.displayNameProperties?.length && (
                            <div id="kc-webauthn-authenticator-transport" className={kcClsx("kcSelectAuthListItemDescriptionClass")}>
                              {authenticator.transports.displayNameProperties
                                .map((displayNameProperty, i, arr) => ({
                                  displayNameProperty,
                                  hasNext: i !== arr.length - 1
                                }))
                                .map(({ displayNameProperty, hasNext }) => (
                                  <Fragment key={displayNameProperty}>
                                    {advancedMsg(displayNameProperty)}
                                    {hasNext && <span>, </span>}
                                  </Fragment>
                                ))}
                            </div>
                          )}
                          <div className={kcClsx("kcSelectAuthListItemDescriptionClass")}>
                            <span id="kc-webauthn-authenticator-created-label">{msg("webauthn-createdAt-label")}</span>
                            <span id="kc-webauthn-authenticator-created">{authenticator.createdAt}</span>
                          </div>
                          <div className={kcClsx("kcSelectAuthListItemFillClass")} />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
          <div id="kc-form-buttons" className={kcClsx("kcFormButtonsClass")}>
            <Button
              id={authButtonId}
              value={msgStr("webauthn-doAuthenticate")}
              className={kcClsx("kcButtonClass", "kcButtonDefaultClass", "kcButtonBlockClass", "kcButtonLargeClass") + " w-full"}
            >
              {msgStr("webauthn-doAuthenticate")}
            </Button>
          </div>
        </div>
      </div>
    </Template>
  );
}
