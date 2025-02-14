import { GetSubject, GetTemplate } from "keycloakify-emails";

export const getTemplate: GetTemplate = async () => {
    return "<p>This is a test message</p>";
};

export const getSubject: GetSubject = async () => {
    return "[KEYCLOAK] - SMTP test message";
};

const emailTest = {
    getTemplate,
    getSubject
};

export default emailTest;
