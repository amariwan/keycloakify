import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{c as x}from"./KcPageStory-DBRHJgZy.js";import"./index-yBjzXJbu.js";import"./iframe-DUdFcd_d.js";import"./index-BlmOqGMO.js";import"./assert-lEPzpKR_.js";import"./index-49N86NKK.js";import"./index-IE9ObSwG.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./index-Dv8KEsPl.js";import"./dropdown-menu-C7cUncHS.js";import"./index-_wjppGB2.js";import"./index-bzJWmFph.js";import"./index-xprPBo3d.js";import"./utils-CytzSlOG.js";import"./index-DZ2oWOeb.js";import"./button-BgOuTgla.js";import"./index-BwobEAja.js";import"./card-Cusb1SoT.js";import"./mode-toggle-uDeI8jqW.js";const{KcPageStory:o}=x({pageId:"login-update-password.ftl"}),G={title:"login/login-update-password.ftl",component:o},s={render:()=>n.jsx(o,{})},r={render:()=>n.jsx(o,{kcContext:{url:{loginAction:"/mock-login-action"},messagesPerField:{existsError:t=>t==="password",get:()=>"Password must be at least 8 characters long."},isAppInitiatedAction:!1}})},e={render:()=>n.jsx(o,{kcContext:{url:{loginAction:"/mock-login-action"},messagesPerField:{existsError:t=>t==="password-confirm",get:()=>"Passwords do not match."},isAppInitiatedAction:!1}})};var a,i,d;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <KcPageStory />
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,p,m,l,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      loginAction: "/mock-login-action"
    },
    messagesPerField: {
      existsError: (field: string) => field === "password",
      get: () => "Password must be at least 8 characters long."
    },
    isAppInitiatedAction: false
  }} />
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:`WithPasswordError:
- Purpose: Tests when there is an error in the password input (e.g., invalid password).
- Scenario: Simulates the case where the user enters an invalid password, and an error message is displayed.
- Key Aspect: Ensures the password input field shows an error message when validation fails.`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.description}}};var h,w,u,f,P;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      loginAction: "/mock-login-action"
    },
    messagesPerField: {
      existsError: (field: string) => field === "password-confirm",
      get: () => "Passwords do not match."
    },
    isAppInitiatedAction: false
  }} />
}`,...(u=(w=e.parameters)==null?void 0:w.docs)==null?void 0:u.source},description:{story:`WithPasswordConfirmError:
- Purpose: Tests when there is an error in the password confirmation input (e.g., passwords do not match).
- Scenario: Simulates the case where the user enters mismatching passwords, and an error message is displayed in the confirmation field.
- Key Aspect: Ensures that the password confirmation field shows an error when passwords do not match.`,...(P=(f=e.parameters)==null?void 0:f.docs)==null?void 0:P.description}}};const H=["Default","WithPasswordError","WithPasswordConfirmError"];export{s as Default,e as WithPasswordConfirmError,r as WithPasswordError,H as __namedExportsOrder,G as default};
