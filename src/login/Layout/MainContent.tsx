import type { I18n } from "@/login/i18n";
import type { KcContext } from "@/login/KcContext";
import type { TemplateProps } from "keycloakify/login/TemplateProps";

import CardDefault from "@/login/components/Card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function MainContent(props: TemplateProps<KcContext, I18n>) {
  const { kcContext, i18n } = props;

  const { msg } = i18n;

  const { realm } = kcContext;

  return (
    <>
      <div className="mt-4 flex items-center text-center">
        <img
          src={`public/logo.svg`}
          // src={`${import.meta.env.BASE_URL}logo.png`}
          alt="Logo"
          width={70}
          onError={e => {
            e.currentTarget.style.display = "none";
            const nextEl = e.currentTarget.nextElementSibling;
            if (nextEl) nextEl.removeAttribute("hidden");
          }}
        />
        <div>
          <h1 className="text-center text-4xl font-extrabold  uppercase">
            {msg("loginTitleHtml", realm.displayNameHtml)}
          </h1>
        </div>
      </div>
      <div className="w-full max-w-sm md:max-w-3xl">
        <div className={"flex flex-col gap-6"} {...props}>
          <CardDefault {...props} />
          <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
            Durch Klicken auf „Weiter“ stimmst du unseren{" "}
            <a href="https://www.gwq-serviceplus.de/impressum">Nutzungsbedingungen</a> und{" "}
            <a href="https://www.gwq-serviceplus.de/datenschutz">
              Datenschutzrichtlinien
            </a>{" "}
            zu.
          </div>
        </div>
      </div>
    </>
  );
}
