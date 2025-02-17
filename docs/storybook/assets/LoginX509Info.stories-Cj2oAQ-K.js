import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{c as d}from"./KcPageStory-DBRHJgZy.js";import"./index-yBjzXJbu.js";import"./iframe-DUdFcd_d.js";import"./index-BlmOqGMO.js";import"./assert-lEPzpKR_.js";import"./index-49N86NKK.js";import"./index-IE9ObSwG.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./index-Dv8KEsPl.js";import"./dropdown-menu-C7cUncHS.js";import"./index-_wjppGB2.js";import"./index-bzJWmFph.js";import"./index-xprPBo3d.js";import"./utils-CytzSlOG.js";import"./index-DZ2oWOeb.js";import"./button-BgOuTgla.js";import"./index-BwobEAja.js";import"./card-Cusb1SoT.js";import"./mode-toggle-uDeI8jqW.js";const{KcPageStory:o}=d({pageId:"login-x509-info.ftl"}),W={title:"login/login-x509-info.ftl",component:o},t={render:()=>l.jsx(o,{})},e={render:()=>l.jsx(o,{kcContext:{url:{loginAction:"/mock-login-action"},x509:{formData:{subjectDN:"CN=Must Man, OU=Example Org, O=Example Inc, C=DE",username:"Must",isUserEnabled:!1}}}})};var r,n,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <KcPageStory />
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var a,i,m,p,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      loginAction: "/mock-login-action"
    },
    x509: {
      formData: {
        subjectDN: "CN=Must Man, OU=Example Org, O=Example Inc, C=DE",
        username: "Must",
        isUserEnabled: false // User not enabled for login
      }
    }
  }} />
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source},description:{story:`WithoutUserEnabled:
- Purpose: Tests when the user is not enabled to log in via x509.
- Scenario: The component renders the certificate details but does not provide the option to log in or cancel.
- Key Aspect: Ensures that the login buttons are not displayed when the user is not enabled.`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.description}}};const v=["Default","WithoutUserEnabled"];export{t as Default,e as WithoutUserEnabled,v as __namedExportsOrder,W as default};
