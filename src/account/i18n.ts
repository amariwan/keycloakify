import { i18nBuilder } from "keycloakify/account";
import type { ThemeName } from "../kc.gen";

const { useI18n, ofTypeI18n } = i18nBuilder.withThemeName<ThemeName>().build();

type I18n = typeof ofTypeI18n;

const i18n = ofTypeI18n; // Fügen Sie diese Zeile hinzu

export { useI18n, i18n, type I18n }; // Exportieren Sie i18n
