import { CheckboxWithLabel } from "@/components/ui/checkbox";
import { KcClsx } from "keycloakify/login/lib/kcClsx";
import { I18n } from "keycloakify/login/i18n";

export function LogoutOtherSessions(props: { kcClsx: KcClsx; i18n: I18n }) {
  const { kcClsx, i18n } = props;

  const { msg } = i18n;

  return (
    <div id="kc-form-options" className={kcClsx("kcFormOptionsClass") + " space-y-4"}>
      <div
        className={kcClsx("kcFormOptionsWrapperClass") + " flex items-center space-x-2"}
      >
        <CheckboxWithLabel
          id="logout-sessions"
          name="logout-sessions"
          value="on"
          defaultChecked={true}
          label={msg("logoutOtherSessions")}
        />
      </div>
    </div>
  );
}
