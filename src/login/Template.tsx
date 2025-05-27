import type { TemplateProps } from "keycloakify/login/TemplateProps";
import type { I18n } from "./i18n";
import type { KcContext } from "./KcContext";
import { useEffect } from "react";
import Layout from "./Layout/Layout";
import { useSetClassName } from "keycloakify/tools/useSetClassName";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import { useInsertLinkTags } from "keycloakify/tools/useInsertLinkTags";
import { assert } from "keycloakify/tools/assert";
// import { useInsertScriptTags } from "keycloakify/tools/useInsertScriptTags";
import "@/styles/index.css";

export default function Template(props: TemplateProps<KcContext, I18n>) {
  const { documentTitle, bodyClassName, kcContext, i18n, doUseDefaultCss, classes } = props;
  const { kcClsx } = getKcClsx({ doUseDefaultCss, classes });
  const { msgStr } = i18n;
  const {
    locale,
    url
    // authenticationSession, scripts
  } = kcContext;

  // Setze Klassen auf <html> und <body>
  useSetClassName({ qualifiedName: "html", className: kcClsx("kcHtmlClass") });
  useSetClassName({ qualifiedName: "body", className: bodyClassName ?? kcClsx("kcBodyClass") });

  // Dokumenttitel festlegen
  useEffect(() => {
    document.title = documentTitle ?? msgStr("loginTitle", kcContext.realm.displayName);
  }, [documentTitle, msgStr, kcContext.realm.displayName]);

  // Sprache im HTML-Tag setzen
  useEffect(() => {
    const { currentLanguageTag } = locale ?? {};
    if (currentLanguageTag) {
      const html = document.querySelector("html");
      assert(html !== null);
      html.lang = currentLanguageTag;
    }
  }, [locale]);

  // CSS-Links einfügen
  const { areAllStyleSheetsLoaded } = useInsertLinkTags({
    componentOrHookName: "Template",
    hrefs: [
      `${url.resourcesCommonPath}/node_modules/@patternfly/patternfly/patternfly.min.css`,
      `${url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly-additions.min.css`,
      `${url.resourcesCommonPath}/lib/pficon/pficon.css`,
      `${url.resourcesPath}/css/login.css`
    ]
  });

  useEffect(() => {
    console.log("areAllStyleSheetsLoaded", areAllStyleSheetsLoaded);
    if (areAllStyleSheetsLoaded) {
      // insertScriptTags();
    }
  }, [areAllStyleSheetsLoaded]);

  // if (!areAllStyleSheetsLoaded) {
  //   return null;
  // }

  return <Layout headerProps={props} mainProps={props} />;
}
