import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import { PageProps } from "keycloakify/login/pages/PageProps";
import { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { ConfirmationActions } from "@/login/components/FormButtons";

export default function LoginOauthGrant(props: PageProps<Extract<KcContext, { pageId: "login-oauth-grant.ftl" }>, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, classes, Template } = props;
  const { url, oauth, client } = kcContext;

  const { msg, msgStr, advancedMsg, advancedMsgStr } = i18n;

  const { kcClsx } = getKcClsx({
    doUseDefaultCss,
    classes
  });

  return (
    <Template
      kcContext={kcContext}
      i18n={i18n}
      doUseDefaultCss={doUseDefaultCss}
      classes={classes}
      bodyClassName="oauth"
      headerNode={
        <>
          {client.attributes.logoUri && (
            <img src={client.attributes.logoUri} alt={client.name || "Client logo"} title={client.name || "Client logo"} />
          )}
          <p>{client.name ? msg("oauthGrantTitle", advancedMsgStr(client.name)) : msg("oauthGrantTitle", client.clientId)}</p>
        </>
      }
    >
      <div id="kc-oauth" className="content-area">
        <h3>{msg("oauthGrantRequest")}</h3>
        <ul>
          {oauth.clientScopesRequested.map(clientScope => (
            <li key={clientScope.consentScreenText}>
              <span>
                {advancedMsg(clientScope.consentScreenText)}
                {clientScope.dynamicScopeParameter && (
                  <>
                    : <b>{clientScope.dynamicScopeParameter}</b>
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>

        {client.attributes.policyUri ||
          (client.attributes.tosUri && (
            <h3>
              {client.name ? msg("oauthGrantInformation", advancedMsgStr(client.name)) : msg("oauthGrantInformation", client.clientId)}
              {client.attributes.tosUri && (
                <>
                  {msg("oauthGrantReview")}
                  <a href={client.attributes.tosUri} target="_blank" rel="noreferrer">
                    {msg("oauthGrantTos")}
                  </a>
                </>
              )}
              {client.attributes.policyUri && (
                <>
                  {msg("oauthGrantReview")}
                  <a href={client.attributes.policyUri} target="_blank" rel="noreferrer">
                    {msg("oauthGrantPolicy")}
                  </a>
                </>
              )}
            </h3>
          ))}

        <form className="form-actions" action={url.oauthAction} method="POST">
          <input type="hidden" name="code" value={oauth.code} />
          <div className={kcClsx("kcFormGroupClass")}>
            <div id="kc-form-options">
              <div className={kcClsx("kcFormOptionsWrapperClass")}></div>
            </div>
            <ConfirmationActions
              actionUrl={url.loginAction}
              method="post"
              confirmProps={{
                id: "kc-login",
                name: "accept",
                label: msgStr("doYes"),
                isVisible: true,
                value: msgStr("doYes")
              }}
              cancelProps={{
                id: "kc-cancel",
                name: "cancel",
                label: msgStr("doNo"),
                value: msgStr("doNo"),
                isVisible: true
              }}
            />
          </div>
        </form>
        <div className="clearfix"></div>
      </div>
    </Template>
  );
}
