import { useEffect } from "react";
import { Body, Container, Head, Html, Preview, Section } from "jsx-email";
import type { TemplateProps } from "keycloakify/login/TemplateProps";
import type { KcContext } from "./KcContext";
import type { I18n } from "./i18n";
import { useSetClassName } from "keycloakify/tools/useSetClassName";
import { useInitialize } from "keycloakify/login/Template.useInitialize";
const main = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
};
const container = {
  margin: "0 auto",
  marginBottom: "64px",
  padding: "20px 0 48px",
};
const box = {
  padding: "0 48px",
};
export default function Template(props: TemplateProps<KcContext, I18n>) {
  const {
    children,
    documentTitle,
    bodyClassName,
    kcContext,
    i18n,
  } = props;
  const { msg, msgStr, currentLanguage } = i18n;
  const { realm } = kcContext;
  useEffect(() => {
    document.title = documentTitle ?? msgStr("loginTitle", realm.displayName);
  }, [documentTitle, msgStr, realm.displayName]);
  useSetClassName({
    qualifiedName: "body",
    className: bodyClassName ?? "bg-gray-100",
  });
  const { isReadyToRender } = useInitialize({ kcContext, doUseDefaultCss: false });
  if (!isReadyToRender) return null;
  // Definiere locale aus currentLanguage und eine Vorschau-Nachricht
  const locale = currentLanguage?.languageTag || "de";
  const preview = msg("preview", realm.displayName);
  return (
    <Html lang={locale}>
      <Head>
        <meta charSet="UTF-8" />
      </Head>
      <Preview>{preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>{children}</Section>
        </Container>
      </Body>
    </Html>
  );
}
