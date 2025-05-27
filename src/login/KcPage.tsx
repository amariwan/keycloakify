import { Suspense, lazy } from "react";
import type { ClassKey } from "keycloakify/login";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "keycloakify/login/DefaultPage";
import Template from "./Template";
import { pages } from "./pages";
import "@/styles/index.css";

const UserProfileFormFields = lazy(() => import("./UserProfileFormFields"));

const doMakeUserConfirmPassword = true;

export default function KcPage({ kcContext }: { kcContext: KcContext }) {
  const { i18n } = useI18n({ kcContext });

  const commonProps = { kcContext, i18n, classes, Template, doUseDefaultCss: true };

  const PageComponent = pages[kcContext.pageId] || DefaultPage;

  const extraProps =
    kcContext.pageId === "register.ftl" || !(kcContext.pageId in pages)
      ? { UserProfileFormFields, doMakeUserConfirmPassword }
      : {};

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageComponent {...commonProps} {...extraProps} />
    </Suspense>
  );
}

const classes = {
  kcHtmlClass: "bg-background"
} satisfies { [key in ClassKey]?: string };
