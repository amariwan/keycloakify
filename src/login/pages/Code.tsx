import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import { Input } from "@/components/ui/input";


export default function Code({
  kcContext,
  i18n,
  doUseDefaultCss,
  Template,
  classes,
}: PageProps<Extract<KcContext, { pageId: "code.ftl" }>, I18n>) {
  const { kcClsx } = getKcClsx({ doUseDefaultCss, classes });
  const { code } = kcContext;
  const { msg } = i18n;

  const headerNode = code.success
    ? msg("codeSuccessTitle")
    : msg("codeErrorTitle", code.error);

  return (
    <Template
      kcContext={kcContext}
      i18n={i18n}
      doUseDefaultCss={doUseDefaultCss}
      classes={classes}
      headerNode={headerNode}
    >
      <div id="kc-code">
        {code.success ? (
          <>
            <p>{msg("copyCodeInstruction")}</p>
            <Input
              tabIndex={2}
              id="code"
              name="code"
              defaultValue={code.code}
              type="text"
              autoFocus
              autoComplete="off"
              className={`${kcClsx("kcTextareaClass")} h-10`}
            />
          </>
        ) : (
          code.error && (
            <p
              id="error"
              dangerouslySetInnerHTML={{
                __html: kcSanitize(code.error),
              }}
            />
          )
        )}
      </div>
    </Template>
  );
}
