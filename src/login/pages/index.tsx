import { lazy } from "react";

export const pages: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  "login.ftl": lazy(() => import("./Login")),
  "login-username.ftl": lazy(() => import("./LoginUsername")),
  "login-password.ftl": lazy(() => import("./LoginPassword")),
  "login-reset-password.ftl": lazy(() => import("./LoginResetPassword")),
  "login-verify-email.ftl": lazy(() => import("./LoginVerifyEmail")),
  "login-otp.ftl": lazy(() => import("./LoginOtp")),
  "info.ftl": lazy(() => import("./Info")),
  "error.ftl": lazy(() => import("./Error")),
  "login-update-password.ftl": lazy(() => import("./LoginUpdatePassword")),
  "login-page-expired.ftl": lazy(() => import("./LoginPageExpired")),
  "logout-confirm.ftl": lazy(() => import("./LogoutConfirm")),
  "register.ftl": lazy(() => import("./Register"))
};
