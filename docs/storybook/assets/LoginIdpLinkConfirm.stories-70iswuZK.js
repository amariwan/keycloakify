import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{c as f}from"./KcPageStory-DBRHJgZy.js";import"./index-yBjzXJbu.js";import"./iframe-DUdFcd_d.js";import"./index-BlmOqGMO.js";import"./assert-lEPzpKR_.js";import"./index-49N86NKK.js";import"./index-IE9ObSwG.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./index-Dv8KEsPl.js";import"./dropdown-menu-C7cUncHS.js";import"./index-_wjppGB2.js";import"./index-bzJWmFph.js";import"./index-xprPBo3d.js";import"./utils-CytzSlOG.js";import"./index-DZ2oWOeb.js";import"./button-BgOuTgla.js";import"./index-BwobEAja.js";import"./card-Cusb1SoT.js";import"./mode-toggle-uDeI8jqW.js";const g={url:{loginAction:"/login-action"},idpAlias:"mockIdpAlias"},{KcPageStory:e}=f({pageId:"login-idp-link-confirm.ftl"}),U={title:"login/login-idp-link-confirm.ftl",component:e},r={render:()=>l.jsx(e,{kcContext:g})},o={render:()=>l.jsx(e,{kcContext:{...g,url:{loginAction:"/error"},message:{type:"error",summary:"An error occurred during form submission."}}})};var t,n,i,s,a;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={mockKcContext} />
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source},description:{story:"Default:\n- Purpose: Tests standard behavior with mock data.\n- Scenario: The component renders with a mocked identity provider alias (`mockIdpAlias`) and a login action URL (`/login-action`).\n- Key Aspect: Ensures the default behavior of the component with standard values for kcContext.",...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.description}}};var m,c,p,d,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    ...mockKcContext,
    url: {
      loginAction: "/error"
    },
    message: {
      type: "error",
      summary: "An error occurred during form submission."
    }
  }} />
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source},description:{story:`WithFormSubmissionError:
- Purpose: Tests how the component handles form submission errors.
- Scenario: Simulates a form submission error by setting the login action URL to \`/error\` and displays an error message.
- Key Aspect: Verifies that the component can display error messages during form submission failure, ensuring proper error handling.`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.description}}};const _=["Default","WithFormSubmissionError"];export{r as Default,o as WithFormSubmissionError,_ as __namedExportsOrder,U as default};
