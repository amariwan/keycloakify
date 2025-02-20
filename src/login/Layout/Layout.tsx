import React from "react";
import Header from "./Header";
import SidebarLeft from "./SidebarLeft";
import MainContent from "./MainContent";
import SidebarRight from "./SidebarRight";
import Footer from "./Footer";

import type { I18n } from "@/login/i18n";
import type { KcContext } from "@/login/KcContext";
import type { TemplateProps } from "keycloakify/login/TemplateProps";

interface LayoutProps {
  headerProps: TemplateProps<KcContext, I18n>;
  sidebarLeftProps?: TemplateProps<KcContext, I18n>;
  sidebarRightProps?: TemplateProps<KcContext, I18n>;
  mainProps: TemplateProps<KcContext, I18n>;
  footerProps?: TemplateProps<KcContext, I18n>;
}

const Layout: React.FC<LayoutProps> = ({
  headerProps,
  sidebarLeftProps,
  mainProps,
  sidebarRightProps,
  footerProps
}) => {
  return (
    <div className="bg-background min-h-screen prose dark:prose-invert max-w-none grid grid-rows-[auto,1fr,auto] grid-cols-[200px,1fr,200px]">
      <div className="col-span-3">
        <Header {...headerProps} />
      </div>
      <div>{sidebarLeftProps && <SidebarLeft {...sidebarLeftProps} />}</div>
      <main className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <MainContent {...mainProps} />
      </main>
      <div>{sidebarRightProps && <SidebarRight {...sidebarRightProps} />}</div>
      <div className="col-span-3">{footerProps && <Footer {...footerProps} />}</div>
    </div>
  );
};

export default Layout;
