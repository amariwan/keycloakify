import type { I18n } from "@/login/i18n";
import type { KcContext } from "@/login/KcContext";
import type { TemplateProps } from "keycloakify/login/TemplateProps";

export default function SidebarRight(_props: TemplateProps<KcContext, I18n>) {
  return <aside className=" p-4"></aside>;
}
