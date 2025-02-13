import { lazy, Suspense, type ReactNode } from "react";

export type ThemeName = "reha-inside-theme";
export const themeNames: ThemeName[] = ["reha-inside-theme"];

export type KcEnvName = never;
export const kcEnvNames: KcEnvName[] = [];
export const kcEnvDefaults: Record<KcEnvName, string> = {};

export type KcContext = import("./login/KcContext").KcContext;

declare global {
  interface Window {
    kcContext?: KcContext;
  }
}

const pages: Record<string, React.LazyExoticComponent<React.ComponentType<{ kcContext: KcContext }>>> = {
  login: lazy(() => import("./login/KcPage"))
};

export function KcPage({ kcContext, fallback = <div>Loading…</div> }: { kcContext: KcContext; fallback?: ReactNode }) {
  const Page = pages[kcContext.themeType] ?? (() => <div>Unbekannter Theme-Typ: {kcContext.themeType}</div>);
  return (
    <Suspense fallback={fallback}>
      <Page kcContext={kcContext} />
    </Suspense>
  );
}
