import { useState } from "react";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordWrapper } from "@/components/ui/PasswordWrapper";

export default function Login(props: PageProps<Extract<KcContext, { pageId: "login.ftl" }>, I18n>) {
  const { kcContext, i18n, Template } = props;
  const { social, realm, url, usernameHidden, login, auth, registrationDisabled, messagesPerField } = kcContext;
  const { msg, msgStr } = i18n;
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

  return (
    <Template
      {...props}
      displayMessage={!messagesPerField.existsError("username", "password")}
      headerNode={"Willkommen zurück"}
      displayInfo={realm.password && realm.registrationAllowed && !registrationDisabled}
      infoNode={
        <span>
          {msg("noAccount")}{" "}
          <a className="text-blue-600 hover:underline" tabIndex={8} href={url.registrationUrl}>
            {msg("doRegister")}
          </a>
        </span>
      }
      socialProvidersNode={
        <>
          {realm.password && social?.providers !== undefined && social.providers.length !== 0 && (
            <div id="kc-social-providers" className="mt-6">
              <hr className="my-6" />
              <h2 className="text-xl font-semibold mb-4">{msg("identity-provider-login-label")}</h2>
              <ul className={`grid ${social.providers.length > 3 ? "grid-cols-2 gap-4" : "grid-cols-1 gap-2"}`}>
                {social.providers.map(p => (
                  <li key={p.alias}>
                    <a
                      id={`social-${p.alias}`}
                      className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                      href={p.loginUrl}
                    >
                      {p.iconClasses && <i className={`mr-2 ${p.iconClasses}`} aria-hidden="true"></i>}
                      <span dangerouslySetInnerHTML={{ __html: kcSanitize(p.displayName) }}></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      }
    >
      <div className="w-full max-w-md">
        <div className="py-8 px-4 sm:rounded-lg sm:px-6">
          {realm.password && (
            <form
              onSubmit={() => {
                setIsLoginButtonDisabled(true);
                return true;
              }}
              action={url.loginAction}
              method="post"
              className="space-y-6"
            >
              {!usernameHidden && (
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    {!realm.loginWithEmailAllowed ? msg("username") : !realm.registrationEmailAsUsername ? msg("usernameOrEmail") : msg("email")}
                  </label>
                  <div className="mt-1">
                    <Input
                      tabIndex={2}
                      id="username"
                      name="username"
                      defaultValue={login.username ?? ""}
                      type="text"
                      autoFocus
                      autoComplete="username"
                      aria-invalid={messagesPerField.existsError("username", "password")}
                      className="h-10"
                    />
                  </div>
                  {messagesPerField.existsError("username", "password") && (
                    <p className="mt-2 text-sm text-red-600" id="input-error" aria-live="polite">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: kcSanitize(messagesPerField.getFirstError("username", "password"))
                        }}
                      />
                    </p>
                  )}
                </div>
              )}

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  {msg("password")}
                </label>
                <PasswordWrapper i18n={i18n} passwordInputId="password">
                  <Input
                    tabIndex={3}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    aria-invalid={messagesPerField.existsError("username", "password")}
                    className="h-10"
                  />
                </PasswordWrapper>
                {usernameHidden && messagesPerField.existsError("username", "password") && (
                  <p className="mt-2 text-sm text-red-600" id="input-error" aria-live="polite">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: kcSanitize(messagesPerField.getFirstError("username", "password"))
                      }}
                    />
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between">
                {realm.rememberMe && !usernameHidden && (
                  <div className="flex items-center">
                    <input
                      tabIndex={5}
                      id="rememberMe"
                      name="rememberMe"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      defaultChecked={!!login.rememberMe}
                    />
                    <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                      {msg("rememberMe")}
                    </label>
                  </div>
                )}
                {realm.resetPasswordAllowed && (
                  <div className="text-sm">
                    <a tabIndex={6} href={url.loginResetCredentialsUrl} className="font-medium text-indigo-600 hover:text-indigo-500">
                      {msg("doForgotPassword")}
                    </a>
                  </div>
                )}
              </div>

              <div>
                <input type="hidden" id="id-hidden-input" name="credentialId" value={auth.selectedCredential} />
                <Button disabled={isLoginButtonDisabled} name="login" type="submit" variant="default" className="w-full">
                  {msgStr("doLogIn")}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Template>
  );
}
