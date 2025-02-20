import type { I18n } from "@/login/i18n";
import type { KcContext } from "@/login/KcContext";
import type { TemplateProps } from "keycloakify/login/TemplateProps";

export default function Footer(_props: TemplateProps<KcContext, I18n>): JSX.Element {
  return (
    <footer className="col-span-3 p-4 text-center">
      <div className="text-sm text-gray-600">
        {"© 2025 Your Company. All rights reserved."}
      </div>
    </footer>
  );
}
