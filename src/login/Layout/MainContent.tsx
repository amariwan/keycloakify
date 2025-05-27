import type { I18n } from "@/login/i18n";
import type { KcContext } from "@/login/KcContext";
import type { TemplateProps } from "keycloakify/login/TemplateProps";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";

import CardDefault from "@/login/components/Card";

export default function MainContent(props: TemplateProps<KcContext, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, classes } = props;

  const { msg } = i18n;

  const { realm } = kcContext;
  const { kcClsx } = getKcClsx({ doUseDefaultCss, classes });

  return (
    <>
      <div id="kc-header" className={kcClsx("kcHeaderClass")}>
        <div id="kc-header-wrapper" className={kcClsx("kcHeaderWrapperClass")}>
          {msg("loginTitleHtml", realm.displayNameHtml)}
        </div>
      </div>
      <div className="w-full max-w-sm md:max-w-3xl">
        <div className="flex flex-col gap-6" {...props}>
          <CardDefault {...props} />
          <div className="text-balance text-center text-sm text-muted-foreground">
            Bitte beachten Sie unser{" "}
            <a
              href="https://www.reha-inside.de/Impressum"
              className="underline underline-offset-4 hover:text-primary"
            >
              Impressum
            </a>{" "}
            und unsere{" "}
            <a
              href="https://www.reha-inside.de/Datenschutzhinweise"
              className="underline underline-offset-4 hover:text-primary"
            >
              Datenschutzhinweise
            </a>
            .
          </div>
        </div>
      </div>
    </>
  );
}
