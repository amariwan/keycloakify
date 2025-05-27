import { kcSanitize } from "keycloakify/lib/kcSanitize";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { LogoutOtherSessions } from "@/login/components/LogoutOtherSessions";
import { PasswordWrapper } from "@/components/ui/PasswordWrapper";

export default function LoginUpdatePassword(props: PageProps<Extract<KcContext, { pageId: "login-update-password.ftl" }>, I18n>) {
  const { kcContext, i18n, Template, doUseDefaultCss, classes } = props;
  const { msg, msgStr } = i18n;
  const { url, messagesPerField, isAppInitiatedAction } = kcContext;
  const { kcClsx } = getKcClsx({ doUseDefaultCss, classes });

  return (
    <Template {...props} displayMessage={!messagesPerField.existsError("password", "password-confirm")} headerNode={msg("updatePasswordTitle")}>
      <div className="w-full max-w-md">
        <div className="py-2 px-4 sm:rounded-lg sm:px-6">
          <form id="kc-passwd-update-form" action={url.loginAction} method="post" className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password-new" className="text-sm font-medium text-gray-700">
                  {msg("passwordNew")}
                </Label>
                <PasswordWrapper i18n={i18n} passwordInputId="password-new">
                  <Input
                    id="password-new"
                    name="password-new"
                    type="password"
                    autoComplete="new-password"
                    className="h-10"
                    aria-invalid={messagesPerField.existsError("password", "password-confirm")}
                  />
                </PasswordWrapper>
                {messagesPerField.existsError("password") && (
                  <Alert variant="destructive">
                    <AlertDescription
                      id="input-error-password"
                      aria-live="polite"
                      dangerouslySetInnerHTML={{
                        __html: kcSanitize(messagesPerField.get("password"))
                      }}
                    />
                  </Alert>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password-confirm" className="text-sm font-medium text-gray-700">
                  {msg("passwordConfirm")}
                </Label>
                <PasswordWrapper i18n={i18n} passwordInputId="password-confirm">
                  <Input
                    id="password-confirm"
                    name="password-confirm"
                    type="password"
                    autoComplete="new-password"
                    className="h-10"
                    aria-invalid={messagesPerField.existsError("password", "password-confirm")}
                  />
                </PasswordWrapper>
                {messagesPerField.existsError("password-confirm") && (
                  <Alert variant="destructive">
                    <AlertDescription
                      id="input-error-password-confirm"
                      aria-live="polite"
                      dangerouslySetInnerHTML={{
                        __html: kcSanitize(messagesPerField.get("password-confirm"))
                      }}
                    />
                  </Alert>
                )}
              </div>

              <div className="space-y-6">
                <LogoutOtherSessions kcClsx={kcClsx} i18n={i18n} />

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1">
                    {msgStr("doSubmit")}
                  </Button>
                  {isAppInitiatedAction && (
                    <Button type="submit" name="cancel-aia" value="true" variant="outline" className="flex-1">
                      {msg("doCancel")}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Template>
  );
}
