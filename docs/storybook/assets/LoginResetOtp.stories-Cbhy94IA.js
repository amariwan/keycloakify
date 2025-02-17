import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{c as v}from"./KcPageStory-DBRHJgZy.js";import"./index-yBjzXJbu.js";import"./iframe-DUdFcd_d.js";import"./index-BlmOqGMO.js";import"./assert-lEPzpKR_.js";import"./index-49N86NKK.js";import"./index-IE9ObSwG.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./index-Dv8KEsPl.js";import"./dropdown-menu-C7cUncHS.js";import"./index-_wjppGB2.js";import"./index-bzJWmFph.js";import"./index-xprPBo3d.js";import"./utils-CytzSlOG.js";import"./index-DZ2oWOeb.js";import"./button-BgOuTgla.js";import"./index-BwobEAja.js";import"./card-Cusb1SoT.js";import"./mode-toggle-uDeI8jqW.js";const{KcPageStory:n}=v({pageId:"login-reset-otp.ftl"}),Q={title:"login/login-reset-otp.ftl",component:n},o={render:()=>s.jsx(n,{})},e={render:()=>s.jsx(n,{kcContext:{url:{loginAction:"/mock-login"},configuredOtpCredentials:{userOtpCredentials:[],selectedCredentialId:void 0},messagesPerField:{existsError:()=>!1}}})},r={render:()=>s.jsx(n,{kcContext:{url:{loginAction:"/mock-login"},configuredOtpCredentials:{userOtpCredentials:[{id:"otp1",userLabel:"Device 1"},{id:"otp2",userLabel:"Device 2"}],selectedCredentialId:"otp1"},messagesPerField:{existsError:T=>T==="totp",get:()=>"Invalid OTP selection"}}})},t={render:()=>s.jsx(n,{kcContext:{url:{loginAction:"/mock-login"},configuredOtpCredentials:{userOtpCredentials:[{id:"otp1",userLabel:"Device 1"}],selectedCredentialId:"otp1"},messagesPerField:{existsError:()=>!1}}})};var i,a,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <KcPageStory />
}`,...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var d,l,p,m,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      loginAction: "/mock-login"
    },
    configuredOtpCredentials: {
      userOtpCredentials: [],
      selectedCredentialId: undefined
    },
    messagesPerField: {
      existsError: () => false
    }
  }} />
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source},description:{story:`WithoutOtpCredentials:
- Purpose: Tests the behavior when no OTP credentials are available.
- Scenario: The component renders without any OTP credentials, showing only the submit button.
- Key Aspect: Ensures that the component handles the absence of OTP credentials correctly.`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.description}}};var g,O,h,C,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      loginAction: "/mock-login"
    },
    configuredOtpCredentials: {
      userOtpCredentials: [{
        id: "otp1",
        userLabel: "Device 1"
      }, {
        id: "otp2",
        userLabel: "Device 2"
      }],
      selectedCredentialId: "otp1"
    },
    messagesPerField: {
      existsError: (field: string) => field === "totp",
      get: () => "Invalid OTP selection"
    }
  }} />
}`,...(h=(O=r.parameters)==null?void 0:O.docs)==null?void 0:h.source},description:{story:`WithOtpError:
- Purpose: Tests the behavior when an error occurs with the OTP selection.
- Scenario: Simulates a scenario where an error occurs (e.g., no OTP selected), and an error message is displayed.
- Key Aspect: Ensures that error messages are displayed correctly for OTP-related errors.`,...(y=(C=r.parameters)==null?void 0:C.docs)==null?void 0:y.description}}};var P,f,x,b,S;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    url: {
      loginAction: "/mock-login"
    },
    configuredOtpCredentials: {
      userOtpCredentials: [{
        id: "otp1",
        userLabel: "Device 1"
      }],
      selectedCredentialId: "otp1"
    },
    messagesPerField: {
      existsError: () => false
    }
  }} />
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:`WithOnlyOneOtpCredential:
- Purpose: Tests the behavior when there is only one OTP credential available.
- Scenario: Simulates the case where the user has only one OTP credential, and it is pre-selected by default.
- Key Aspect: Ensures that the component renders correctly with only one OTP credential pre-selected.`,...(S=(b=t.parameters)==null?void 0:b.docs)==null?void 0:S.description}}};const U=["Default","WithoutOtpCredentials","WithOtpError","WithOnlyOneOtpCredential"];export{o as Default,t as WithOnlyOneOtpCredential,r as WithOtpError,e as WithoutOtpCredentials,U as __namedExportsOrder,Q as default};
