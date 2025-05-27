declare module "react-dom/client";
import { createRoot } from "react-dom/client";
import { StrictMode, lazy, Suspense } from "react";

const KcPage = lazy(() => import("./kc.gen").then(mod => ({ default: mod.KcPage })));

createRoot(document.getElementById("root")!).render(
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
