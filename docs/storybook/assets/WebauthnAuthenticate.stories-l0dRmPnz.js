import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{c as U}from"./KcPageStory-DBRHJgZy.js";import"./index-yBjzXJbu.js";import"./iframe-DUdFcd_d.js";import"./index-BlmOqGMO.js";import"./assert-lEPzpKR_.js";import"./index-49N86NKK.js";import"./index-IE9ObSwG.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./index-Dv8KEsPl.js";import"./dropdown-menu-C7cUncHS.js";import"./index-_wjppGB2.js";import"./index-bzJWmFph.js";import"./index-xprPBo3d.js";import"./utils-CytzSlOG.js";import"./index-DZ2oWOeb.js";import"./button-BgOuTgla.js";import"./index-BwobEAja.js";import"./card-Cusb1SoT.js";import"./mode-toggle-uDeI8jqW.js";const{KcPageStory:t}=U({pageId:"webauthn-authenticate.ftl"}),Z={title:"login/webauthn-authenticate.ftl",component:t},i={render:()=>o.jsx(t,{})},e={render:()=>o.jsx(t,{kcContext:{url:{loginAction:"/mock-login-action"},authenticators:{authenticators:[{credentialId:"authenticator-1",label:"Security Key 1",transports:{iconClass:"kcAuthenticatorUsbIcon",displayNameProperties:["USB"]},createdAt:"2023-01-01"},{credentialId:"authenticator-2",label:"Security Key 2",transports:{iconClass:"kcAuthenticatorNfcIcon",displayNameProperties:["NFC"]},createdAt:"2023-02-01"}]},shouldDisplayAuthenticators:!0}})},r={render:()=>o.jsx(t,{kcContext:{url:{loginAction:"/mock-login-action"},authenticators:{authenticators:[{credentialId:"authenticator-1",label:"My Security Key",transports:{iconClass:"kcAuthenticatorUsbIcon",displayNameProperties:["USB"]},createdAt:"2023-01-01"}]},shouldDisplayAuthenticators:!0}})},n={render:()=>o.jsx(t,{kcContext:{url:{loginAction:"/mock-login-action"},authenticators:{authenticators:[{credentialId:"authenticator-1",label:"My Security Key",transports:{iconClass:"kcAuthenticatorUsbIcon",displayNameProperties:["USB"]},createdAt:"2023-01-01"}]},shouldDisplayAuthenticators:!0,message:{summary:"An error occurred during WebAuthn authentication.",type:"error"}}})},a={render:()=>o.jsx(t,{kcContext:{url:{loginAction:"/mock-login-action"},authenticators:{authenticators:[{credentialId:"authenticator-1",label:"My Security Key",transports:{iconClass:"kcAuthenticatorUsbIcon",displayNameProperties:["USB"]},createdAt:"2023-01-01"}]},shouldDisplayAuthenticators:!0}})};var s,c,u;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <KcPageStory />
}`,...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var l,p,h,d,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      loginAction: "/mock-login-action"
    },
    authenticators: {
      authenticators: [{
        credentialId: "authenticator-1",
        label: "Security Key 1",
        transports: {
          iconClass: "kcAuthenticatorUsbIcon",
          displayNameProperties: ["USB"]
        },
        createdAt: "2023-01-01"
      }, {
        credentialId: "authenticator-2",
        label: "Security Key 2",
        transports: {
          iconClass: "kcAuthenticatorNfcIcon",
          displayNameProperties: ["NFC"]
        },
        createdAt: "2023-02-01"
      }]
    },
    shouldDisplayAuthenticators: true
  }} />
}`,...(h=(p=e.parameters)==null?void 0:p.docs)==null?void 0:h.source},description:{story:`WithMultipleAuthenticators:
- Purpose: Tests when multiple WebAuthn authenticators are available for selection.
- Scenario: The component renders multiple authenticators, allowing the user to choose between them.
- Key Aspect: Ensures that the available authenticators are displayed, and the user can select one.`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.description}}};var y,A,g,b,S;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      loginAction: "/mock-login-action"
    },
    authenticators: {
      authenticators: [{
        credentialId: "authenticator-1",
        label: "My Security Key",
        transports: {
          iconClass: "kcAuthenticatorUsbIcon",
          displayNameProperties: ["USB"]
        },
        createdAt: "2023-01-01"
      }]
    },
    shouldDisplayAuthenticators: true
  }} />
}`,...(g=(A=r.parameters)==null?void 0:A.docs)==null?void 0:g.source},description:{story:`WithSingleAuthenticator:
- Purpose: Tests when only one WebAuthn authenticator is available.
- Scenario: The component renders the WebAuthn form with a single available authenticator.
- Key Aspect: Ensures the form renders correctly when there is only one authenticator available.`,...(S=(b=r.parameters)==null?void 0:b.docs)==null?void 0:S.description}}};var k,I,K,P,C;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      loginAction: "/mock-login-action"
    },
    authenticators: {
      authenticators: [{
        credentialId: "authenticator-1",
        label: "My Security Key",
        transports: {
          iconClass: "kcAuthenticatorUsbIcon",
          displayNameProperties: ["USB"]
        },
        createdAt: "2023-01-01"
      }]
    },
    shouldDisplayAuthenticators: true,
    message: {
      summary: "An error occurred during WebAuthn authentication.",
      type: "error"
    }
  }} />
}`,...(K=(I=n.parameters)==null?void 0:I.docs)==null?void 0:K.source},description:{story:`WithErrorDuringAuthentication:
- Purpose: Tests the behavior when an error occurs during WebAuthn authentication.
- Scenario: The component renders with an error message displayed to the user.
- Key Aspect: Ensures the form handles authentication errors and displays a relevant message.`,...(C=(P=n.parameters)==null?void 0:P.docs)==null?void 0:C.description}}};var W,f,x,v,D;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      loginAction: "/mock-login-action"
    },
    authenticators: {
      authenticators: [{
        credentialId: "authenticator-1",
        label: "My Security Key",
        transports: {
          iconClass: "kcAuthenticatorUsbIcon",
          displayNameProperties: ["USB"]
        },
        createdAt: "2023-01-01"
      }]
    },
    shouldDisplayAuthenticators: true
  }} />
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:`WithJavaScriptDisabled:
- Purpose: Tests the behavior when JavaScript is disabled or not functioning.
- Scenario: The component renders a fallback message prompting the user to enable JavaScript for WebAuthn authentication.
- Key Aspect: Ensures the form provides a clear message when JavaScript is required but unavailable.`,...(D=(v=a.parameters)==null?void 0:v.docs)==null?void 0:D.description}}};const $=["Default","WithMultipleAuthenticators","WithSingleAuthenticator","WithErrorDuringAuthentication","WithJavaScriptDisabled"];export{i as Default,n as WithErrorDuringAuthentication,a as WithJavaScriptDisabled,e as WithMultipleAuthenticators,r as WithSingleAuthenticator,$ as __namedExportsOrder,Z as default};
