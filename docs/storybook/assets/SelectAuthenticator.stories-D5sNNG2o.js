import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{c as b}from"./KcPageStory-DBRHJgZy.js";import"./index-yBjzXJbu.js";import"./iframe-DUdFcd_d.js";import"./index-BlmOqGMO.js";import"./assert-lEPzpKR_.js";import"./index-49N86NKK.js";import"./index-IE9ObSwG.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./index-Dv8KEsPl.js";import"./dropdown-menu-C7cUncHS.js";import"./index-_wjppGB2.js";import"./index-bzJWmFph.js";import"./index-xprPBo3d.js";import"./utils-CytzSlOG.js";import"./index-DZ2oWOeb.js";import"./button-BgOuTgla.js";import"./index-BwobEAja.js";import"./card-Cusb1SoT.js";import"./mode-toggle-uDeI8jqW.js";const{KcPageStory:t}=b({pageId:"select-authenticator.ftl"}),B={title:"login/select-authenticator.ftl",component:t},a={render:()=>r.jsx(t,{})},s={render:()=>r.jsx(t,{kcContext:{auth:{authenticationSelections:[{authExecId:"25697c4e-0c80-4f2c-8eb7-2c16347e8e8d",displayName:"auth-username-password-form-display-name",helpText:"auth-username-password-form-help-text",iconCssClass:"kcAuthenticatorPasswordClass"},{authExecId:"4cb60872-ce0d-4c8f-a806-e651ed77994b",displayName:"webauthn-passwordless-display-name",helpText:"webauthn-passwordless-help-text",iconCssClass:"kcAuthenticatorWebAuthnPasswordlessClass"}]}}})},i={render:()=>r.jsx(t,{kcContext:{auth:{authenticationSelections:[{authExecId:"f0c22855-eda7-4092-8565-0c22f77d2ffb",displayName:"home-idp-discovery-display-name",helpText:"home-idp-discovery-help-text",iconCssClass:"kcAuthenticatorDefaultClass"},{authExecId:"20456f5a-8b2b-45f3-98e0-551dcb27e3e1",displayName:"identity-provider-redirctor-display-name",helpText:"identity-provider-redirctor-help-text",iconCssClass:"kcAuthenticatorDefaultClass"},{authExecId:"eb435db9-474e-473a-8da7-c184fa510b96",displayName:"auth-username-password-form-display-name",helpText:"auth-username-password-help-text",iconCssClass:"kcAuthenticatorDefaultClass"}]},"x-keycloakify":{messages:{"home-idp-discovery-display-name":"Home identity provider","home-idp-discovery-help-text":"Sign in via your home identity provider which will be automatically determined based on your provided email address.","identity-provider-redirctor-display-name":"Identity Provider Redirector","identity-provider-redirctor-help-text":"Sign in via your identity provider.","auth-username-password-help-text":"Sign in via your username and password."}}}})},e={render:()=>r.jsx(t,{kcContext:{url:{loginAction:"/mock-login-action"},auth:{authenticationSelections:[]}}})};var o,n,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <KcPageStory />
}`,...(d=(n=a.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var c,p,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    auth: {
      authenticationSelections: [{
        authExecId: "25697c4e-0c80-4f2c-8eb7-2c16347e8e8d",
        displayName: "auth-username-password-form-display-name",
        helpText: "auth-username-password-form-help-text",
        iconCssClass: "kcAuthenticatorPasswordClass"
      }, {
        authExecId: "4cb60872-ce0d-4c8f-a806-e651ed77994b",
        displayName: "webauthn-passwordless-display-name",
        helpText: "webauthn-passwordless-help-text",
        iconCssClass: "kcAuthenticatorWebAuthnPasswordlessClass"
      }]
    }
  }} />
}`,...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var h,m,u;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    auth: {
      authenticationSelections: [{
        authExecId: "f0c22855-eda7-4092-8565-0c22f77d2ffb",
        displayName: "home-idp-discovery-display-name",
        helpText: "home-idp-discovery-help-text",
        iconCssClass: "kcAuthenticatorDefaultClass"
      }, {
        authExecId: "20456f5a-8b2b-45f3-98e0-551dcb27e3e1",
        displayName: "identity-provider-redirctor-display-name",
        helpText: "identity-provider-redirctor-help-text",
        iconCssClass: "kcAuthenticatorDefaultClass"
      }, {
        authExecId: "eb435db9-474e-473a-8da7-c184fa510b96",
        displayName: "auth-username-password-form-display-name",
        helpText: "auth-username-password-help-text",
        iconCssClass: "kcAuthenticatorDefaultClass"
      }]
    },
    "x-keycloakify": {
      messages: {
        "home-idp-discovery-display-name": "Home identity provider",
        "home-idp-discovery-help-text": "Sign in via your home identity provider which will be automatically determined based on your provided email address.",
        "identity-provider-redirctor-display-name": "Identity Provider Redirector",
        "identity-provider-redirctor-help-text": "Sign in via your identity provider.",
        "auth-username-password-help-text": "Sign in via your username and password."
      }
    }
  }} />
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var y,x,f,v,C;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      loginAction: "/mock-login-action"
    },
    auth: {
      authenticationSelections: [] // No authentication methods available
    }
  }} />
}`,...(f=(x=e.parameters)==null?void 0:x.docs)==null?void 0:f.source},description:{story:`WithoutAuthenticationSelections:
- Purpose: Tests when no authentication methods are available for selection.
- Scenario: The component renders without any authentication options, providing a default message or fallback.
- Key Aspect: Ensures that the component gracefully handles the absence of available authentication methods.`,...(C=(v=e.parameters)==null?void 0:v.docs)==null?void 0:C.description}}};const F=["Default","WithDifferentAuthenticationMethods","WithRealmTranslations","WithoutAuthenticationSelections"];export{a as Default,s as WithDifferentAuthenticationMethods,i as WithRealmTranslations,e as WithoutAuthenticationSelections,F as __namedExportsOrder,B as default};
