import { lazy } from "react";

export const pages: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  "email-verify.ftl": lazy(() => import("./VerifyEmail")),
  "email-test.ftl": lazy(() => import("./emailTest)),
    ./ passwordReset
};
