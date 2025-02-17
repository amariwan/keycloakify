import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{c as v}from"./KcPageStory-DBRHJgZy.js";import"./index-yBjzXJbu.js";import"./iframe-DUdFcd_d.js";import"./index-BlmOqGMO.js";import"./assert-lEPzpKR_.js";import"./index-49N86NKK.js";import"./index-IE9ObSwG.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./index-Dv8KEsPl.js";import"./dropdown-menu-C7cUncHS.js";import"./index-_wjppGB2.js";import"./index-bzJWmFph.js";import"./index-xprPBo3d.js";import"./utils-CytzSlOG.js";import"./index-DZ2oWOeb.js";import"./button-BgOuTgla.js";import"./index-BwobEAja.js";import"./card-Cusb1SoT.js";import"./mode-toggle-uDeI8jqW.js";const{KcPageStory:o}=v({pageId:"login-oauth2-device-verify-user-code.ftl"}),R={title:"login/login-oauth2-device-verify-user-code.ftl",component:o},t={render:()=>i.jsx(o,{})},e={render:()=>i.jsx(o,{kcContext:{url:{oauth2DeviceVerificationAction:"/mock-oauth2-device-verification"},message:{summary:"The user code you entered is invalid. Please try again.",type:"error"}}})},r={render:()=>i.jsx(o,{kcContext:{url:{oauth2DeviceVerificationAction:"/mock-oauth2-device-verification"},message:{summary:"User code cannot be empty. Please enter a valid code.",type:"error"}}})};var s,n,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <KcPageStory />
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var c,m,p,d,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      oauth2DeviceVerificationAction: "/mock-oauth2-device-verification"
    },
    message: {
      summary: "The user code you entered is invalid. Please try again.",
      type: "error"
    }
  }} />
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:`WithErrorMessage:
- Purpose: Tests when there is an error with the OAuth2 device user code entry.
- Scenario: The component renders with an error message displayed to the user.
- Key Aspect: Ensures the error message is properly shown when the user enters an invalid code.`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.description}}};var h,l,y,g,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      oauth2DeviceVerificationAction: "/mock-oauth2-device-verification"
    },
    message: {
      summary: "User code cannot be empty. Please enter a valid code.",
      type: "error"
    }
  }} />
}`,...(y=(l=r.parameters)==null?void 0:l.docs)==null?void 0:y.source},description:{story:`WithEmptyInputField:
- Purpose: Tests when the user code field is left empty.
- Scenario: The component renders the form, and the user tries to submit without entering any code.
- Key Aspect: Ensures the form displays validation errors when the field is left empty.`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.description}}};const q=["Default","WithErrorMessage","WithEmptyInputField"];export{t as Default,r as WithEmptyInputField,e as WithErrorMessage,q as __namedExportsOrder,R as default};
