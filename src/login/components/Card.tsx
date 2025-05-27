import type { I18n } from "@/login/i18n";
import type { KcContext } from "@/login/KcContext";
import type { TemplateProps } from "keycloakify/login/TemplateProps";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent
} from "@/components/ui/card";
import { MessageAlert } from "@/components/ui/MessageAlert";

export default function cardDefault(props: TemplateProps<KcContext, I18n>) {
  const {
    displayInfo = false,
    displayMessage = true,
    displayRequiredFields = false,
    headerNode,
    infoNode = null,
    children,
    kcContext,
    i18n
  } = props;

  const { msg } = i18n;

  const { auth, url, message, isAppInitiatedAction } = kcContext;

  return (
    <div className="mt-5 mx-0 sm:mx-auto w-full max-w-md">
      <Card className="mt-5 mx-0 sm:mx-auto w-full max-w-md">
        <CardHeader>
          <CardTitle>
            <h1 className="text-center text-4xl font-bold">{headerNode}</h1>
          </CardTitle>
          <CardDescription>
            {displayRequiredFields && (
              <div className="text-sm text-gray-500 mb-4">
                <span className="text-red-500">*</span> {msg("requiredFields")}
              </div>
            )}
            {displayMessage &&
              message &&
              (message.type !== "warning" || !isAppInitiatedAction) && (
                <MessageAlert message={message} />
              )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {children}
          {auth?.showTryAnotherWayLink && url && (
            <form
              id="kc-select-try-another-way-form"
              action={url.loginAction}
              method="post"
              className="mt-4"
            >
              {/* Formular für "Try Another Way" */}
            </form>
          )}
        </CardContent>

        <CardFooter>
          {displayInfo && <div className="mt-6 text-center">{infoNode}</div>}
        </CardFooter>
      </Card>
    </div>
  );
}
