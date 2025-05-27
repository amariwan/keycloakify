import { I18n } from "keycloakify/login/i18n";
import { JSX } from "react";

import { assert } from "keycloakify/tools/assert";
import { useEffect, useReducer } from "react";
import { Button } from "./button";
import { Eye, EyeOff } from "lucide-react";

export function PasswordWrapper(props: {
  i18n: I18n;
  passwordInputId: string;
  children: JSX.Element;
}) {
  const { i18n, passwordInputId, children } = props;
  const { msgStr } = i18n;
  const [isPasswordRevealed, toggleIsPasswordRevealed] = useReducer(
    (state: boolean) => !state,
    false
  );

  useEffect(() => {
    const passwordInputElement = document.getElementById(passwordInputId);
    assert(passwordInputElement instanceof HTMLInputElement);
    passwordInputElement.type = isPasswordRevealed ? "text" : "password";
  }, [isPasswordRevealed]);

  return (
    <div className={"relative"}>
      {children}
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
        onClick={toggleIsPasswordRevealed}
        aria-label={msgStr(isPasswordRevealed ? "hidePassword" : "showPassword")}
        aria-controls={passwordInputId}
      >
        {isPasswordRevealed ? (
          <EyeOff className="h-4 w-4 text-gray-500" />
        ) : (
          <Eye className="h-4 w-4 text-gray-500" />
        )}
      </Button>
    </div>
  );
}
