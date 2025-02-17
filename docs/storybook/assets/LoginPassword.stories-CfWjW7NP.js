import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{c as x}from"./KcPageStory-DBRHJgZy.js";import"./index-yBjzXJbu.js";import"./iframe-DUdFcd_d.js";import"./index-BlmOqGMO.js";import"./assert-lEPzpKR_.js";import"./index-49N86NKK.js";import"./index-IE9ObSwG.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./index-Dv8KEsPl.js";import"./dropdown-menu-C7cUncHS.js";import"./index-_wjppGB2.js";import"./index-bzJWmFph.js";import"./index-xprPBo3d.js";import"./utils-CytzSlOG.js";import"./index-DZ2oWOeb.js";import"./button-BgOuTgla.js";import"./index-BwobEAja.js";import"./card-Cusb1SoT.js";import"./mode-toggle-uDeI8jqW.js";const{KcPageStory:o}=x({pageId:"login-password.ftl"}),B={title:"login/login-password.ftl",component:o},s={render:()=>t.jsx(o,{})},e={render:()=>t.jsx(o,{kcContext:{realm:{resetPasswordAllowed:!0},url:{loginAction:"/mock-login",loginResetCredentialsUrl:"/mock-reset-password"},messagesPerField:{existsError:f=>f==="password",get:()=>"Invalid password"}}})},r={render:()=>t.jsx(o,{kcContext:{realm:{resetPasswordAllowed:!1},url:{loginAction:"/mock-login",loginResetCredentialsUrl:"/mock-reset-password"},messagesPerField:{existsError:()=>!1}}})};var a,n,i;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <KcPageStory />
}`,...(i=(n=s.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var d,l,p,c,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    realm: {
      resetPasswordAllowed: true
    },
    url: {
      loginAction: "/mock-login",
      loginResetCredentialsUrl: "/mock-reset-password"
    },
    messagesPerField: {
      existsError: (field: string) => field === "password",
      get: () => "Invalid password"
    }
  }} />
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source},description:{story:`WithPasswordError:
- Purpose: Tests the behavior when an error occurs in the password field (e.g., incorrect password).
- Scenario: Simulates a scenario where an invalid password is entered, and an error message is displayed.
- Key Aspect: Ensures that the password input field displays error messages correctly.`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.description}}};var w,g,u,h,P;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    realm: {
      resetPasswordAllowed: false
    },
    url: {
      loginAction: "/mock-login",
      loginResetCredentialsUrl: "/mock-reset-password"
    },
    messagesPerField: {
      existsError: () => false
    }
  }} />
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source},description:{story:'WithoutResetPasswordOption:\n- Purpose: Tests the behavior when the reset password option is disabled.\n- Scenario: Simulates a scenario where the `resetPasswordAllowed` is set to `false`, and the "Forgot Password" link is not rendered.\n- Key Aspect: Ensures that the component handles cases where resetting the password is not allowed.',...(P=(h=r.parameters)==null?void 0:h.docs)==null?void 0:P.description}}};const G=["Default","WithPasswordError","WithoutResetPasswordOption"];export{s as Default,e as WithPasswordError,r as WithoutResetPasswordOption,G as __namedExportsOrder,B as default};
