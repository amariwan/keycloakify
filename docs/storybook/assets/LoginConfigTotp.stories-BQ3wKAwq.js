import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{c as A}from"./KcPageStory-DBRHJgZy.js";import"./index-yBjzXJbu.js";import"./iframe-DUdFcd_d.js";import"./index-BlmOqGMO.js";import"./assert-lEPzpKR_.js";import"./index-49N86NKK.js";import"./index-IE9ObSwG.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./index-Dv8KEsPl.js";import"./dropdown-menu-C7cUncHS.js";import"./index-_wjppGB2.js";import"./index-bzJWmFph.js";import"./index-xprPBo3d.js";import"./utils-CytzSlOG.js";import"./index-DZ2oWOeb.js";import"./button-BgOuTgla.js";import"./index-BwobEAja.js";import"./card-Cusb1SoT.js";import"./mode-toggle-uDeI8jqW.js";const{KcPageStory:t}=A({pageId:"login-config-totp.ftl"}),H={title:"login/login-config-totp.ftl",component:t},o={render:()=>r.jsx(t,{})},i={render:()=>r.jsx(t,{kcContext:{mode:"manual"}})},s={render:()=>r.jsx(t,{kcContext:{messagesPerField:{get:e=>e==="totp"?"Invalid TOTP":void 0,exists:e=>e==="totp",existsError:e=>e==="totp",printIfExists:(e,k)=>e==="totp"?k:void 0}}})},n={render:()=>r.jsx(t,{kcContext:{isAppInitiatedAction:!0}})},a={render:()=>r.jsx(t,{kcContext:{totp:{otpCredentials:[{userLabel:"MyDevice"}]}}})};var p,c,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <KcPageStory />
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,l,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    mode: "manual"
  }} />
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,x,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    messagesPerField: {
      get: (fieldName: string) => fieldName === "totp" ? "Invalid TOTP" : undefined,
      exists: (fieldName: string) => fieldName === "totp",
      existsError: (fieldName: string) => fieldName === "totp",
      printIfExists: <T,>(fieldName: string, x: T) => fieldName === "totp" ? x : undefined
    }
  }} />
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var S,P,C;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    isAppInitiatedAction: true
  }} />
}`,...(C=(P=n.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var y,I,h;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    totp: {
      otpCredentials: [{
        userLabel: "MyDevice"
      }]
    }
  }} />
}`,...(h=(I=a.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};const J=["Default","WithManualSetUp","WithError","WithAppInitiatedAction","WithPreFilledUserLabel"];export{o as Default,n as WithAppInitiatedAction,s as WithError,i as WithManualSetUp,a as WithPreFilledUserLabel,J as __namedExportsOrder,H as default};
