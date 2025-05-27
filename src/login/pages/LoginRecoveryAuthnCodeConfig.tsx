import { clsx } from "keycloakify/tools/clsx";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import { useScript } from "keycloakify/login/pages/LoginRecoveryAuthnCodeConfig.useScript";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { LogoutOtherSessions } from "@/login/components/LogoutOtherSessions";
import { Button } from "@/components/ui/button";
import { CheckboxWithLabel } from "@/components/ui/checkbox";

export default function LoginRecoveryAuthnCodeConfig(props: PageProps<Extract<KcContext, { pageId: "login-recovery-authn-code-config.ftl" }>, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

  const { kcClsx } = getKcClsx({
    doUseDefaultCss,
    classes
  });

  const { recoveryAuthnCodesConfigBean, isAppInitiatedAction } = kcContext;

  const { msg, msgStr } = i18n;

  const olRecoveryCodesListId = "kc-recovery-codes-list";

  useScript({ olRecoveryCodesListId, i18n });

  return (
    <Template kcContext={kcContext} i18n={i18n} doUseDefaultCss={doUseDefaultCss} classes={classes} headerNode={msg("recovery-code-config-header")}>
      <div className={clsx("pf-c-alert", "pf-m-warning", "pf-m-inline", kcClsx("kcRecoveryCodesWarning"))} aria-label="Warning alert">
        <div className="pf-c-alert__icon">
          <i className="pficon-warning-triangle-o" aria-hidden="true" />
        </div>
        <h4 className="pf-c-alert__title">
          <span className="pf-screen-reader">Warning alert:</span>
          {msg("recovery-code-config-warning-title")}
        </h4>
        <div className="pf-c-alert__description">
          <p>{msg("recovery-code-config-warning-message")}</p>
        </div>
      </div>

      <ol id={olRecoveryCodesListId} className={kcClsx("kcRecoveryCodesList")}>
        {recoveryAuthnCodesConfigBean.generatedRecoveryAuthnCodesList.map((code, index) => (
          <li key={index}>
            <span>{index + 1}:</span> {code.slice(0, 4)}-{code.slice(4, 8)}-{code.slice(8)}
          </li>
        ))}
      </ol>

      {/* actions */}
      <div className={kcClsx("kcRecoveryCodesActions")}>
        <button id="printRecoveryCodes" className={clsx("pf-c-button", "pf-m-link")} type="button">
          <i className="pficon-print" aria-hidden="true" /> {msg("recovery-codes-print")}
        </button>
        <button id="downloadRecoveryCodes" className={clsx("pf-c-button", "pf-m-link")} type="button">
          <i className="pficon-save" aria-hidden="true" /> {msg("recovery-codes-download")}
        </button>
        <button id="copyRecoveryCodes" className={clsx("pf-c-button", "pf-m-link")} type="button">
          <i className="pficon-blueprint" aria-hidden="true" /> {msg("recovery-codes-copy")}
        </button>
      </div>

      {/* confirmation checkbox */}
      <div className={kcClsx("kcFormOptionsClass")}>
        <CheckboxWithLabel
          className={kcClsx("kcCheckInputClass")}
          id="kcRecoveryCodesConfirmationCheck"
          name="kcRecoveryCodesConfirmationCheck"
          onChange={event => {
            //@ts-expect-error: This is inherited from the original code
            document.getElementById("saveRecoveryAuthnCodesBtn").disabled = !event.target.checked;
          }}
          label={msg("recovery-codes-confirmation-message")}
        />
      </div>

      <form action={kcContext.url.loginAction} className={kcClsx("kcFormGroupClass")} id="kc-recovery-codes-settings-form" method="post">
        <input type="hidden" name="generatedRecoveryAuthnCodes" value={recoveryAuthnCodesConfigBean.generatedRecoveryAuthnCodesAsString} />
        <input type="hidden" name="generatedAt" value={recoveryAuthnCodesConfigBean.generatedAt} />
        <input type="hidden" id="userLabel" name="userLabel" value={msgStr("recovery-codes-label-default")} />

        <LogoutOtherSessions kcClsx={kcClsx} i18n={i18n} />

        {isAppInitiatedAction ? (
          <div className="flex justify-between w-full space-x-2">
            <input
              type="submit"
              // className={kcClsx("kcButtonClass", "kcButtonPrimaryClass", "kcButtonLargeClass")}
              className="w-full"
              id="saveRecoveryAuthnCodesBtn"
              value={msgStr("recovery-codes-action-complete")}
              disabled
            />
            <Button
              type="submit"
              className="w-full"
              variant={"outline"}
              // className={kcClsx("kcButtonClass", "kcButtonDefaultClass", "kcButtonLargeClass")}
              id="cancelRecoveryAuthnCodesBtn"
              name="cancel-aia"
              value="true"
            >
              {msg("recovery-codes-action-cancel")}
            </Button>
          </div>
        ) : (
          <input
            type="submit"
            // className={kcClsx("kcButtonClass", "kcButtonPrimaryClass", "kcButtonBlockClass", "kcButtonLargeClass")}
            className="w-full"
            id="saveRecoveryAuthnCodesBtn"
            value={msgStr("recovery-codes-action-complete")}
            disabled
          />
        )}
      </form>
    </Template>
  );
}
