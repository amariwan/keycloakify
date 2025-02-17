import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{c as v}from"./KcPageStory-DBRHJgZy.js";import"./index-yBjzXJbu.js";import"./iframe-DUdFcd_d.js";import"./index-BlmOqGMO.js";import"./assert-lEPzpKR_.js";import"./index-49N86NKK.js";import"./index-IE9ObSwG.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./index-Dv8KEsPl.js";import"./dropdown-menu-C7cUncHS.js";import"./index-_wjppGB2.js";import"./index-bzJWmFph.js";import"./index-xprPBo3d.js";import"./utils-CytzSlOG.js";import"./index-DZ2oWOeb.js";import"./button-BgOuTgla.js";import"./index-BwobEAja.js";import"./card-Cusb1SoT.js";import"./mode-toggle-uDeI8jqW.js";const{KcPageStory:e}=v({pageId:"idp-review-user-profile.ftl"}),z={title:"login/idp-review-user-profile.ftl",component:e},a={render:()=>o.jsx(e,{})},t={render:()=>o.jsx(e,{kcContext:{messagesPerField:{existsError:r=>["email","firstName"].includes(r),get:r=>{if(r==="email")return"Invalid email format.";if(r==="firstName")return"First name is required."}}}})},i={render:()=>o.jsx(e,{kcContext:{profile:{attributesByName:{email:{value:"jane.doe@example.com",readOnly:!0},firstName:{value:"Jane",readOnly:!1}}}}})},n={render:()=>o.jsx(e,{kcContext:{profile:{attributesByName:{firstName:{value:"Jane"},lastName:{value:"Doe"},email:{value:"jane.doe@example.com"}}}}})};var s,m,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <KcPageStory />
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,p,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    messagesPerField: {
      existsError: (fieldName: string) => ["email", "firstName"].includes(fieldName),
      get: (fieldName: string) => {
        if (fieldName === "email") return "Invalid email format.";
        if (fieldName === "firstName") return "First name is required.";
        return undefined;
      }
    }
  }} />
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,f,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    profile: {
      attributesByName: {
        email: {
          value: "jane.doe@example.com",
          readOnly: true
        },
        firstName: {
          value: "Jane",
          readOnly: false
        }
      }
    }
  }} />
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var g,N,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    profile: {
      attributesByName: {
        firstName: {
          value: "Jane"
        },
        lastName: {
          value: "Doe"
        },
        email: {
          value: "jane.doe@example.com"
        }
      }
    }
  }} />
}`,...(y=(N=n.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};const A=["Default","WithFormValidationErrors","WithReadOnlyFields","WithPrefilledFormFields"];export{a as Default,t as WithFormValidationErrors,n as WithPrefilledFormFields,i as WithReadOnlyFields,A as __namedExportsOrder,z as default};
