import { Suspense } from "react";
import type { ClassKey } from "keycloakify/login";
import type { KcContext } from "./KcContext";
import DefaultPage from "keycloakify/login/DefaultPage";
import Template from "./Template";
import { pages } from "./pages";
export default function KcPage({ kcContext }: { kcContext: KcContext }) {
  const commonProps = { kcContext, i18n, classes, Template, doUseDefaultCss: true };
  const PageComponent = pages[kcContext.pageId] || DefaultPage;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageComponent {...commonProps} />
    </Suspense>
  );
}
const classes = {} satisfies { [key in ClassKey]?: string };
