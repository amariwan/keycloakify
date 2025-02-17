import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{c as v}from"./KcPageStory-DBRHJgZy.js";import"./index-yBjzXJbu.js";import"./iframe-DUdFcd_d.js";import"./index-BlmOqGMO.js";import"./assert-lEPzpKR_.js";import"./index-49N86NKK.js";import"./index-IE9ObSwG.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./index-Dv8KEsPl.js";import"./dropdown-menu-C7cUncHS.js";import"./index-_wjppGB2.js";import"./index-bzJWmFph.js";import"./index-xprPBo3d.js";import"./utils-CytzSlOG.js";import"./index-DZ2oWOeb.js";import"./button-BgOuTgla.js";import"./index-BwobEAja.js";import"./card-Cusb1SoT.js";import"./mode-toggle-uDeI8jqW.js";const{KcPageStory:n}=v({pageId:"webauthn-error.ftl"}),M={title:"login/webauthn-error.ftl",component:n},a={render:()=>o.jsx(n,{})},e={render:()=>o.jsx(n,{kcContext:{url:{loginAction:"/mock-login-action"},isAppInitiatedAction:!1,message:{summary:"WebAuthn authentication failed. Please try again.",type:"error"}}})},t={render:()=>o.jsx(n,{kcContext:{url:{loginAction:"/mock-login-action"},isAppInitiatedAction:!0,message:{summary:"WebAuthn authentication failed. You can try again or cancel.",type:"error"}}})},r={render:()=>o.jsx(n,{kcContext:{url:{loginAction:"/mock-login-action"},isAppInitiatedAction:!1,message:{summary:"JavaScript is disabled or not working. Please retry manually.",type:"warning"}}})};var i,s,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <KcPageStory />
}`,...(c=(s=a.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var p,m,l,u,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      loginAction: "/mock-login-action"
    },
    isAppInitiatedAction: false,
    message: {
      summary: "WebAuthn authentication failed. Please try again.",
      type: "error"
    }
  }} />
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source},description:{story:`WithRetryAvailable:
- Purpose: Tests when the user can retry the WebAuthn authentication after an error.
- Scenario: The component renders with a "Try Again" button to allow retrying the authentication process.
- Key Aspect: Ensures the retry button functionality is visible and the user can retry authentication.`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.description}}};var h,y,g,A,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      loginAction: "/mock-login-action"
    },
    isAppInitiatedAction: true,
    message: {
      summary: "WebAuthn authentication failed. You can try again or cancel.",
      type: "error"
    }
  }} />
}`,...(g=(y=t.parameters)==null?void 0:y.docs)==null?void 0:g.source},description:{story:`WithAppInitiatedAction:
- Purpose: Tests when the WebAuthn error form is part of an application-initiated action.
- Scenario: The component renders with both a "Try Again" button and a "Cancel" button for app-initiated actions.
- Key Aspect: Ensures the form renders correctly with both "Try Again" and "Cancel" options.`,...(b=(A=t.parameters)==null?void 0:A.docs)==null?void 0:b.description}}};var f,S,w,k,W;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      loginAction: "/mock-login-action"
    },
    isAppInitiatedAction: false,
    message: {
      summary: "JavaScript is disabled or not working. Please retry manually.",
      type: "warning"
    }
  }} />
}`,...(w=(S=r.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:`WithJavaScriptDisabled:
- Purpose: Tests the behavior when JavaScript is disabled or not functioning.
- Scenario: The component renders with a message prompting the user to retry manually without JavaScript.
- Key Aspect: Ensures the retry mechanism works properly when JavaScript is disabled or unavailable.`,...(W=(k=r.parameters)==null?void 0:k.docs)==null?void 0:W.description}}};const N=["Default","WithRetryAvailable","WithAppInitiatedAction","WithJavaScriptDisabled"];export{a as Default,t as WithAppInitiatedAction,r as WithJavaScriptDisabled,e as WithRetryAvailable,N as __namedExportsOrder,M as default};
