import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{c as f}from"./KcPageStory-DBRHJgZy.js";import"./index-yBjzXJbu.js";import"./iframe-DUdFcd_d.js";import"./index-BlmOqGMO.js";import"./assert-lEPzpKR_.js";import"./index-49N86NKK.js";import"./index-IE9ObSwG.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./index-Dv8KEsPl.js";import"./dropdown-menu-C7cUncHS.js";import"./index-_wjppGB2.js";import"./index-bzJWmFph.js";import"./index-xprPBo3d.js";import"./utils-CytzSlOG.js";import"./index-DZ2oWOeb.js";import"./button-BgOuTgla.js";import"./index-BwobEAja.js";import"./card-Cusb1SoT.js";import"./mode-toggle-uDeI8jqW.js";const{KcPageStory:o}=f({pageId:"login-reset-password.ftl"}),q={title:"login/login-reset-password.ftl",component:o},r={render:()=>s.jsx(o,{})},t={render:()=>s.jsx(o,{kcContext:{realm:{loginWithEmailAllowed:!0,registrationEmailAsUsername:!0}}})},e={render:()=>s.jsx(o,{kcContext:{realm:{loginWithEmailAllowed:!1,registrationEmailAsUsername:!1,duplicateEmailsAllowed:!1},url:{loginAction:"/mock-login-action",loginUrl:"/mock-login-url"},messagesPerField:{existsError:E=>E==="username",get:()=>"Invalid username"},auth:{attemptedUsername:"invalid_user"}}})};var n,a,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <KcPageStory />
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var m,l,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    realm: {
      loginWithEmailAllowed: true,
      registrationEmailAsUsername: true
    }
  }} />
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,d,u,g,h;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    realm: {
      loginWithEmailAllowed: false,
      registrationEmailAsUsername: false,
      duplicateEmailsAllowed: false
    },
    url: {
      loginAction: "/mock-login-action",
      loginUrl: "/mock-login-url"
    },
    messagesPerField: {
      existsError: (field: string) => field === "username",
      get: () => "Invalid username"
    },
    auth: {
      attemptedUsername: "invalid_user"
    }
  }} />
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source},description:{story:`WithUsernameError:
- Purpose: Tests behavior when an error occurs with the username input (e.g., invalid username).
- Scenario: The component displays an error message next to the username input field.
- Key Aspect: Ensures the username input shows error messages when validation fails.`,...(h=(g=e.parameters)==null?void 0:g.docs)==null?void 0:h.description}}};const z=["Default","WithEmailAsUsername","WithUsernameError"];export{r as Default,t as WithEmailAsUsername,e as WithUsernameError,z as __namedExportsOrder,q as default};
