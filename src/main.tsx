declare module "react-dom/client";
import { createRoot } from "react-dom/client";
import { StrictMode, lazy, Suspense } from "react";

const KcPage = lazy(() => import("./kc.gen").then(mod => ({ default: mod.KcPage })));

/*
The following block can be uncommented to test a specific page with `yarn dev`
Don't forget to comment back or your bundle size will increase
*/
import { getKcContextMock } from "./login/KcPageStory";
// if (process.env.NODE_ENV === "development") {
window.kcContext = getKcContextMock({
  pageId: "register.ftl",
  overrides: {}
});
// }

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
  <StrictMode>
    {!window.kcContext ? (
      <h1>No Keycloak Context</h1>
    ) : (
      <Suspense fallback={<div>Loading...</div>}>
        <KcPage kcContext={window.kcContext} />
      </Suspense>
    )}
  </StrictMode>
);
