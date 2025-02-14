
import type { ExtendKcContext } from "keycloakify-emails";
import type { KcEnvName, ThemeName } from "../kc.gen";
export type KcContextExtension = {
  themeName: ThemeName;
  properties: Record<KcEnvName, string> & {};
};
export type KcContextExtensionPerPage = Record<string, Record<string, unknown>>;
export type KcContext = ExtendKcContext<KcContextExtension, KcContextExtensionPerPage>;
