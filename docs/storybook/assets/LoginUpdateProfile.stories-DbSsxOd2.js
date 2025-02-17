import{j as c}from"./jsx-runtime-Cf8x2fCZ.js";import{c as f}from"./KcPageStory-DBRHJgZy.js";import"./index-yBjzXJbu.js";import"./iframe-DUdFcd_d.js";import"./index-BlmOqGMO.js";import"./assert-lEPzpKR_.js";import"./index-49N86NKK.js";import"./index-IE9ObSwG.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./index-Dv8KEsPl.js";import"./dropdown-menu-C7cUncHS.js";import"./index-_wjppGB2.js";import"./index-bzJWmFph.js";import"./index-xprPBo3d.js";import"./utils-CytzSlOG.js";import"./index-DZ2oWOeb.js";import"./button-BgOuTgla.js";import"./index-BwobEAja.js";import"./card-Cusb1SoT.js";import"./mode-toggle-uDeI8jqW.js";const{KcPageStory:o}=f({pageId:"login-update-profile.ftl"}),O={title:"login/login-update-profile.ftl",component:o},e={render:()=>c.jsx(o,{})},r={render:()=>c.jsx(o,{kcContext:{url:{loginAction:"/mock-login-action"},messagesPerField:{existsError:d=>d==="email",get:()=>"Invalid email format"},isAppInitiatedAction:!1}})};var t,i,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <KcPageStory />
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var n,a,m,p,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      loginAction: "/mock-login-action"
    },
    messagesPerField: {
      existsError: (field: string) => field === "email",
      get: () => "Invalid email format"
    },
    isAppInitiatedAction: false
  }} />
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source},description:{story:`WithProfileError:
- Purpose: Tests when an error occurs in one or more profile fields (e.g., invalid email format).
- Scenario: The component displays error messages next to the affected fields.
- Key Aspect: Ensures the profile fields show error messages when validation fails.`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.description}}};const R=["Default","WithProfileError"];export{e as Default,r as WithProfileError,R as __namedExportsOrder,O as default};
