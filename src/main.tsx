import { createRoot } from "react-dom/client";
import { StrictMode, lazy, Suspense } from "react";
import { getKcContextMock } from "./login/KcPageStory";
import "@/styles/index.css";

const KcPage = lazy(() => import("./kc.gen").then(mod => ({ default: mod.KcPage })));

window.kcContext = getKcContextMock({
  pageId: "register.ftl",
  overrides: {}
});

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
  <StrictMode>
    {window.kcContext ? (
      <Suspense fallback={<div>Loading...</div>}>
        <KcPage kcContext={window.kcContext} />
      </Suspense>
    ) : (
      <h1>No Keycloak Context</h1>
    )}
  </StrictMode>
);
