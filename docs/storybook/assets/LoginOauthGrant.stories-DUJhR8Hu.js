import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{c as k}from"./KcPageStory-DBRHJgZy.js";import"./index-yBjzXJbu.js";import"./iframe-DUdFcd_d.js";import"./index-BlmOqGMO.js";import"./assert-lEPzpKR_.js";import"./index-49N86NKK.js";import"./index-IE9ObSwG.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./index-Dv8KEsPl.js";import"./dropdown-menu-C7cUncHS.js";import"./index-_wjppGB2.js";import"./index-bzJWmFph.js";import"./index-xprPBo3d.js";import"./utils-CytzSlOG.js";import"./index-DZ2oWOeb.js";import"./button-BgOuTgla.js";import"./index-BwobEAja.js";import"./card-Cusb1SoT.js";import"./mode-toggle-uDeI8jqW.js";const r={url:{oauthAction:"/oauth-action"},oauth:{clientScopesRequested:[{consentScreenText:"Scope1",dynamicScopeParameter:"dynamicScope1"},{consentScreenText:"Scope2"}],code:"mockCode"},client:{attributes:{policyUri:"https://twitter.com/en/tos",tosUri:"https://twitter.com/en/privacy"},name:"Twitter",clientId:"twitter-client-id"}},{KcPageStory:n}=k({pageId:"login-oauth-grant.ftl"}),G={title:"login/login-oauth-grant.ftl",component:n},e={render:()=>s.jsx(n,{kcContext:r})},t={render:()=>s.jsx(n,{kcContext:{...r,oauth:{...r.oauth,clientScopesRequested:[]}}})},o={render:()=>s.jsx(n,{kcContext:{...r,url:{oauthAction:"/error"},message:{type:"error",summary:"An error occurred during form submission."}}})};var c,i,a,m,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={mockKcContext} />
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source},description:{story:`Default:
- Purpose: Tests the default behavior with meaningful logo (Twitter).
- Scenario: The component renders with Twitter as the client, displaying its logo, policy, and terms of service links.
- Key Aspect: Ensures the component works with a realistic \`logoUri\` and client name.`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.description}}};var u,d,h,l,S;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    ...mockKcContext,
    oauth: {
      ...mockKcContext.oauth,
      clientScopesRequested: []
    }
  }} />
}`,...(h=(d=t.parameters)==null?void 0:d.docs)==null?void 0:h.source},description:{story:`WithoutScopes:
- Purpose: Tests the component when no OAuth scopes are requested.
- Scenario: The component renders with no scopes listed under the consent screen.
- Key Aspect: Ensures the component renders correctly when there are no requested scopes.`,...(S=(l=t.parameters)==null?void 0:l.docs)==null?void 0:S.description}}};var g,y,x,f,w;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    ...mockKcContext,
    url: {
      oauthAction: "/error"
    },
    message: {
      type: "error",
      summary: "An error occurred during form submission."
    }
  }} />
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source},description:{story:`WithFormSubmissionError:
- Purpose: Tests how the component handles form submission errors.
- Scenario: The \`oauthAction\` URL is set to an error route and an error message is displayed.
- Key Aspect: Ensures that the component can display error messages when form submission fails.`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.description}}};const H=["Default","WithoutScopes","WithFormSubmissionError"];export{e as Default,o as WithFormSubmissionError,t as WithoutScopes,H as __namedExportsOrder,G as default};
