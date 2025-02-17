import { lazy } from "react";
export const pages: Record<
  string,
  React.LazyExoticComponent<React.ComponentType<any>>
> = {
  "email-test.ftl": lazy(() => import("./emailTest")),
  "email-verify.ftl": lazy(() => import("./VerifyEmail"))
};
