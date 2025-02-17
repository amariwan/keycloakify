import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{c as P}from"./KcPageStory-DBRHJgZy.js";import"./index-yBjzXJbu.js";import"./iframe-DUdFcd_d.js";import"./index-BlmOqGMO.js";import"./assert-lEPzpKR_.js";import"./index-49N86NKK.js";import"./index-IE9ObSwG.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./index-Dv8KEsPl.js";import"./dropdown-menu-C7cUncHS.js";import"./index-_wjppGB2.js";import"./index-bzJWmFph.js";import"./index-xprPBo3d.js";import"./utils-CytzSlOG.js";import"./index-DZ2oWOeb.js";import"./button-BgOuTgla.js";import"./index-BwobEAja.js";import"./card-Cusb1SoT.js";import"./mode-toggle-uDeI8jqW.js";const a={url:{loginAction:"/login-action"},idpAlias:"mockIdpAlias",brokerContext:{username:"mockUser"},realm:{displayName:"MockRealm"}},{KcPageStory:n}=P({pageId:"login-idp-link-email.ftl"}),J={title:"login/login-idp-link-email.ftl",component:n},e={render:()=>s.jsx(n,{kcContext:a})},r={render:()=>s.jsx(n,{kcContext:{...a,idpAlias:"Google",brokerContext:{username:"john.doe"},realm:{displayName:"Reha Inside"}}})},o={render:()=>s.jsx(n,{kcContext:{...a,idpAlias:"Facebook",brokerContext:{username:"jane.doe"},realm:{displayName:"CUSTOM REALM DISPLAY NAME"}}})},t={render:()=>s.jsx(n,{kcContext:{...a,url:{loginAction:"/error"},message:{type:"error",summary:"An error occurred during form submission."}}})};var i,m,c,p,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={mockKcContext} />
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source},description:{story:"Default:\n- Purpose: Tests the default behavior with mock data.\n- Scenario: The component renders with a mocked identity provider alias (`mockIdpAlias`), a default broker username (`mockUser`), and a default realm name (`MockRealm`).\n- Key Aspect: Ensures the default behavior of the component with typical kcContext values.",...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.description}}};var l,u,h,g,y;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    ...mockKcContext,
    idpAlias: "Google",
    brokerContext: {
      username: "john.doe"
    },
    realm: {
      displayName: "Reha Inside"
    }
  }} />
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source},description:{story:`WithIdpAlias:
- Purpose: Tests behavior when the idpAlias is set to "Google".
- Scenario: Simulates the component being used with a Google identity provider, showing the username "john.doe" and realm "reha-inside".
- Key Aspect: Ensures the correct identity provider alias ("Google") and broker context (user info) are displayed in the email linking instructions.`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.description}}};var k,x,A,b,C;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    ...mockKcContext,
    idpAlias: "Facebook",
    brokerContext: {
      username: "jane.doe"
    },
    realm: {
      displayName: "CUSTOM REALM DISPLAY NAME"
    }
  }} />
}`,...(A=(x=o.parameters)==null?void 0:x.docs)==null?void 0:A.source},description:{story:`WithCustomRealmDisplayName:
- Purpose: Tests behavior when the realm display name is customized.
- Scenario: Simulates the component with a Facebook identity provider, a broker username "jane.doe", and a custom realm name "CustomRealm".
- Key Aspect: Ensures that custom realm display names are rendered correctly alongside the idpAlias and broker context.`,...(C=(b=o.parameters)==null?void 0:b.docs)==null?void 0:C.description}}};var S,f,K,j,E;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(K=(f=t.parameters)==null?void 0:f.docs)==null?void 0:K.source},description:{story:`WithFormSubmissionError:
- Purpose: Tests how the component handles form submission errors.
- Scenario: Simulates a form submission error by setting the login action URL to \`/error\` and displays an error message.
- Key Aspect: Verifies that the component can display error messages during form submission failure, ensuring proper error handling.`,...(E=(j=t.parameters)==null?void 0:j.docs)==null?void 0:E.description}}};const Q=["Default","WithIdpAlias","WithCustomRealmDisplayName","WithFormSubmissionError"];export{e as Default,o as WithCustomRealmDisplayName,t as WithFormSubmissionError,r as WithIdpAlias,Q as __namedExportsOrder,J as default};
