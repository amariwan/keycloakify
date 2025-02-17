import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{c as A}from"./KcPageStory-DBRHJgZy.js";import"./index-yBjzXJbu.js";import"./iframe-DUdFcd_d.js";import"./index-BlmOqGMO.js";import"./assert-lEPzpKR_.js";import"./index-49N86NKK.js";import"./index-IE9ObSwG.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./index-Dv8KEsPl.js";import"./dropdown-menu-C7cUncHS.js";import"./index-_wjppGB2.js";import"./index-bzJWmFph.js";import"./index-xprPBo3d.js";import"./utils-CytzSlOG.js";import"./index-DZ2oWOeb.js";import"./button-BgOuTgla.js";import"./index-BwobEAja.js";import"./card-Cusb1SoT.js";import"./mode-toggle-uDeI8jqW.js";const{KcPageStory:o}=A({pageId:"login-verify-email.ftl"}),L={title:"login/login-verify-email.ftl",component:o},n={render:()=>i.jsx(o,{kcContext:{message:{summary:"You need to verify your email to activate your account.",type:"warning"},user:{email:"sss@gwq-serviceplus.de"}}})},e={render:()=>i.jsx(o,{kcContext:{message:{summary:"Your email has been successfully verified.",type:"success"},user:{email:"sss@gwq-serviceplus.de"},url:{loginAction:"/mock-login-action"}}})},s={render:()=>i.jsx(o,{kcContext:{message:{summary:"There was an error verifying your email. Please try again.",type:"error"},user:{email:"sss@gwq-serviceplus.de"},url:{loginAction:"/mock-login-action"}}})},r={render:()=>i.jsx(o,{kcContext:{message:{summary:"Please verify your email to continue using our services.",type:"info"},user:{email:"sss@gwq-serviceplus.de"},url:{loginAction:"/mock-login-action"}}})};var t,a,c;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    message: {
      summary: "You need to verify your email to activate your account.",
      type: "warning"
    },
    user: {
      email: "sss@gwq-serviceplus.de"
    }
  }} />
}`,...(c=(a=n.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var m,u,p,l,g;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    message: {
      summary: "Your email has been successfully verified.",
      type: "success"
    },
    user: {
      email: "sss@gwq-serviceplus.de"
    },
    url: {
      loginAction: "/mock-login-action"
    }
  }} />
}`,...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source},description:{story:`WithSuccessMessage:
- Purpose: Tests when the email verification is successful, and the user receives a confirmation message.
- Scenario: The component renders a success message instead of a warning or error.
- Key Aspect: Ensures the success message is displayed correctly when the email is successfully verified.`,...(g=(l=e.parameters)==null?void 0:l.docs)==null?void 0:g.description}}};var d,y,f,h,v;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    message: {
      summary: "There was an error verifying your email. Please try again.",
      type: "error"
    },
    user: {
      email: "sss@gwq-serviceplus.de"
    },
    url: {
      loginAction: "/mock-login-action"
    }
  }} />
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source},description:{story:`WithErrorMessage:
- Purpose: Tests when there is an error during the email verification process.
- Scenario: The component renders an error message indicating the email verification failed.
- Key Aspect: Ensures the error message is shown correctly when the verification process encounters an issue.`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.description}}};var w,x,S,k,P;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    message: {
      summary: "Please verify your email to continue using our services.",
      type: "info"
    },
    user: {
      email: "sss@gwq-serviceplus.de"
    },
    url: {
      loginAction: "/mock-login-action"
    }
  }} />
}`,...(S=(x=r.parameters)==null?void 0:x.docs)==null?void 0:S.source},description:{story:`WithInfoMessage:
- Purpose: Tests when the user is prompted to verify their email without any urgency.
- Scenario: The component renders with an informational message for email verification.
- Key Aspect: Ensures the informational message is displayed properly.`,...(P=(k=r.parameters)==null?void 0:k.docs)==null?void 0:P.description}}};const N=["Default","WithSuccessMessage","WithErrorMessage","WithInfoMessage"];export{n as Default,s as WithErrorMessage,r as WithInfoMessage,e as WithSuccessMessage,N as __namedExportsOrder,L as default};
