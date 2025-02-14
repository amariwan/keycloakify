import React from "react";
import type { KcContext } from "../login/KcContext";
import type { I18n } from "../i18n";

// Definiere die Props für die VerifyEmail-Komponente
export interface VerifyEmailProps {
    kcContext: KcContext;
    i18n: I18n;
    Template: React.ComponentType<{ title: string; body: React.ReactNode }>;
    doUseDefaultCss: boolean;
}

export function VerifyEmail({ kcContext, i18n, Template, doUseDefaultCss }: VerifyEmailProps) {
    // Übersetzungen abrufen
    const title = i18n.msg("email.verify.title"); // Beispiel: "Bitte bestätigen Sie Ihre E-Mail-Adresse"
    const intro = i18n.msg("email.verify.intro"); // Beispiel: "Vielen Dank für Ihre Registrierung."
    const instructions = i18n.msg("email.verify.instructions"); // Beispiel: "Bitte klicken Sie auf den untenstehenden Link, um Ihre E-Mail-Adresse zu bestätigen."

    // Hier kann man je nach kcContext weitere Logik einbauen

    return (
        <Template title={title} body={
            <div style={{ fontFamily: "Arial, sans-serif", fontSize: "16px" }}>
                <p>{intro}</p>
                <p>{instructions}</p>
                {/* Hier können weitere Details oder ein Call-to-Action eingefügt werden */}
            </div>
        } />
    );
}

export default VerifyEmail;
