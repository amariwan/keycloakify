import type { I18n } from "@/login/i18n";
import type { KcContext } from "@/login/KcContext";
import type { TemplateProps } from "keycloakify/login/TemplateProps";

import { BackButton } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { ModeToggle } from "@/components/ui/mode-toggle";

function Header(props: TemplateProps<KcContext, I18n>) {
  const { i18n } = props;
  const { currentLanguage, enabledLanguages } = i18n;

  return (
    <header className="w-full fixed flex justify-between top-1 space-x-2 ">
      <BackButton />
      <div className="flex justify-between">
        <ModeToggle className="px-5" />
        <LanguageSwitcher
          currentLanguage={currentLanguage}
          enabledLanguages={enabledLanguages}
        />
      </div>
    </header>
  );
}
export default Header;
