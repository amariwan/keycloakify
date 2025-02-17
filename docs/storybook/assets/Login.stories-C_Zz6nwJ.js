import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{c as ue}from"./KcPageStory-DBRHJgZy.js";import"./index-yBjzXJbu.js";import"./iframe-DUdFcd_d.js";import"./index-BlmOqGMO.js";import"./assert-lEPzpKR_.js";import"./index-49N86NKK.js";import"./index-IE9ObSwG.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./index-Dv8KEsPl.js";import"./dropdown-menu-C7cUncHS.js";import"./index-_wjppGB2.js";import"./index-bzJWmFph.js";import"./index-xprPBo3d.js";import"./utils-CytzSlOG.js";import"./index-DZ2oWOeb.js";import"./button-BgOuTgla.js";import"./index-BwobEAja.js";import"./card-Cusb1SoT.js";import"./mode-toggle-uDeI8jqW.js";const{KcPageStory:e}=ue({pageId:"login.ftl"}),Ae={title:"login/login.ftl",component:e},r={render:()=>a.jsx(e,{})},s={render:()=>a.jsx(e,{kcContext:{login:{username:"test"},messagesPerField:{existsError:(o,...fe)=>{const h=[o,...fe];return h.includes("username")||h.includes("password")},get:o=>o==="username"||o==="password"?"Invalid username or password.":""}}})},n={render:()=>a.jsx(e,{kcContext:{realm:{registrationAllowed:!1}}})},i={render:()=>a.jsx(e,{kcContext:{realm:{rememberMe:!1}}})},t={render:()=>a.jsx(e,{kcContext:{realm:{resetPasswordAllowed:!1}}})},l={render:()=>a.jsx(e,{kcContext:{realm:{loginWithEmailAllowed:!1}}})},d={render:()=>a.jsx(e,{kcContext:{login:{username:"max.mustermann@mail.com"}}})},c={render:()=>a.jsx(e,{kcContext:{auth:{attemptedUsername:"max.mustermann@mail.com",showUsername:!0},usernameHidden:!0,message:{type:"info",summary:"Please re-authenticate to continue"}}})},m={render:()=>a.jsx(e,{kcContext:{social:{displayInfo:!0,providers:[{loginUrl:"google",alias:"google",providerId:"google",displayName:"Google",iconClasses:"fa fa-google"},{loginUrl:"microsoft",alias:"microsoft",providerId:"microsoft",displayName:"Microsoft",iconClasses:"fa fa-windows"},{loginUrl:"facebook",alias:"facebook",providerId:"facebook",displayName:"Facebook",iconClasses:"fa fa-facebook"},{loginUrl:"instagram",alias:"instagram",providerId:"instagram",displayName:"Instagram",iconClasses:"fa fa-instagram"},{loginUrl:"twitter",alias:"twitter",providerId:"twitter",displayName:"Twitter",iconClasses:"fa fa-twitter"},{loginUrl:"linkedin",alias:"linkedin",providerId:"linkedin",displayName:"LinkedIn",iconClasses:"fa fa-linkedin"},{loginUrl:"stackoverflow",alias:"stackoverflow",providerId:"stackoverflow",displayName:"Stackoverflow",iconClasses:"fa fa-stack-overflow"},{loginUrl:"github",alias:"github",providerId:"github",displayName:"Github",iconClasses:"fa fa-github"},{loginUrl:"gitlab",alias:"gitlab",providerId:"gitlab",displayName:"Gitlab",iconClasses:"fa fa-gitlab"},{loginUrl:"bitbucket",alias:"bitbucket",providerId:"bitbucket",displayName:"Bitbucket",iconClasses:"fa fa-bitbucket"},{loginUrl:"paypal",alias:"paypal",providerId:"paypal",displayName:"PayPal",iconClasses:"fa fa-paypal"},{loginUrl:"openshift",alias:"openshift",providerId:"openshift",displayName:"OpenShift",iconClasses:"fa fa-cloud"}]}}})},p={render:()=>a.jsx(e,{kcContext:{realm:{password:!1}}})},g={render:()=>a.jsx(e,{kcContext:{message:{summary:"The time allotted for the connection has elapsed.<br/>The login process will restart from the beginning.",type:"error"}}})},f={render:o=>a.jsx(e,{...o,kcContext:{social:{displayInfo:!0,providers:[{loginUrl:"google",alias:"google",providerId:"google",displayName:"Google",iconClasses:"fa fa-google"}]}}})},u={render:o=>a.jsx(e,{...o,kcContext:{social:{displayInfo:!0,providers:[{loginUrl:"google",alias:"google",providerId:"google",displayName:"Google",iconClasses:"fa fa-google"},{loginUrl:"microsoft",alias:"microsoft",providerId:"microsoft",displayName:"Microsoft",iconClasses:"fa fa-windows"}]}}})},y={render:o=>a.jsx(e,{...o,kcContext:{social:{displayInfo:!0,providers:[]}}})},k={render:o=>a.jsx(e,{...o,kcContext:{social:{displayInfo:!0,providers:[{loginUrl:"google",alias:"google",providerId:"google",displayName:"Google",iconClasses:"fa fa-google"},{loginUrl:"microsoft",alias:"microsoft",providerId:"microsoft",displayName:"Microsoft",iconClasses:"fa fa-windows"},{loginUrl:"facebook",alias:"facebook",providerId:"facebook",displayName:"Facebook",iconClasses:"fa fa-facebook"},{loginUrl:"twitter",alias:"twitter",providerId:"twitter",displayName:"Twitter",iconClasses:"fa fa-twitter"}]}}})},v={render:o=>a.jsx(e,{...o,kcContext:{social:{displayInfo:!0,providers:[{loginUrl:"google",alias:"google",providerId:"google",displayName:"Google",iconClasses:"fa fa-google"}]},realm:{rememberMe:!1}}})};var b,C,w;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <KcPageStory />
}`,...(w=(C=r.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var I,x,N;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    login: {
      username: "test"
    },
    messagesPerField: {
      // NOTE: The other functions of messagesPerField are derived from get() and
      // existsError() so they are the only ones that need to mock.
      existsError: (fieldName: string, ...otherFieldNames: string[]) => {
        const fieldNames = [fieldName, ...otherFieldNames];
        return fieldNames.includes("username") || fieldNames.includes("password");
      },
      get: (fieldName: string) => {
        if (fieldName === "username" || fieldName === "password") {
          return "Invalid username or password.";
        }
        return "";
      }
    }
  }} />
}`,...(N=(x=s.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var S,U,P;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    realm: {
      registrationAllowed: false
    }
  }} />
}`,...(P=(U=n.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var W,j,K;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    realm: {
      rememberMe: false
    }
  }} />
}`,...(K=(j=i.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var M,T,G;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    realm: {
      resetPasswordAllowed: false
    }
  }} />
}`,...(G=(T=t.parameters)==null?void 0:T.docs)==null?void 0:G.source}}};var E,F,A;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    realm: {
      loginWithEmailAllowed: false
    }
  }} />
}`,...(A=(F=l.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var R,O,B;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    login: {
      username: "max.mustermann@mail.com"
    }
  }} />
}`,...(B=(O=d.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var D,H,L;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    auth: {
      attemptedUsername: "max.mustermann@mail.com",
      showUsername: true
    },
    usernameHidden: true,
    message: {
      type: "info",
      summary: "Please re-authenticate to continue"
    }
  }} />
}`,...(L=(H=c.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var _,q,z;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    social: {
      displayInfo: true,
      providers: [{
        loginUrl: "google",
        alias: "google",
        providerId: "google",
        displayName: "Google",
        iconClasses: "fa fa-google"
      }, {
        loginUrl: "microsoft",
        alias: "microsoft",
        providerId: "microsoft",
        displayName: "Microsoft",
        iconClasses: "fa fa-windows"
      }, {
        loginUrl: "facebook",
        alias: "facebook",
        providerId: "facebook",
        displayName: "Facebook",
        iconClasses: "fa fa-facebook"
      }, {
        loginUrl: "instagram",
        alias: "instagram",
        providerId: "instagram",
        displayName: "Instagram",
        iconClasses: "fa fa-instagram"
      }, {
        loginUrl: "twitter",
        alias: "twitter",
        providerId: "twitter",
        displayName: "Twitter",
        iconClasses: "fa fa-twitter"
      }, {
        loginUrl: "linkedin",
        alias: "linkedin",
        providerId: "linkedin",
        displayName: "LinkedIn",
        iconClasses: "fa fa-linkedin"
      }, {
        loginUrl: "stackoverflow",
        alias: "stackoverflow",
        providerId: "stackoverflow",
        displayName: "Stackoverflow",
        iconClasses: "fa fa-stack-overflow"
      }, {
        loginUrl: "github",
        alias: "github",
        providerId: "github",
        displayName: "Github",
        iconClasses: "fa fa-github"
      }, {
        loginUrl: "gitlab",
        alias: "gitlab",
        providerId: "gitlab",
        displayName: "Gitlab",
        iconClasses: "fa fa-gitlab"
      }, {
        loginUrl: "bitbucket",
        alias: "bitbucket",
        providerId: "bitbucket",
        displayName: "Bitbucket",
        iconClasses: "fa fa-bitbucket"
      }, {
        loginUrl: "paypal",
        alias: "paypal",
        providerId: "paypal",
        displayName: "PayPal",
        iconClasses: "fa fa-paypal"
      }, {
        loginUrl: "openshift",
        alias: "openshift",
        providerId: "openshift",
        displayName: "OpenShift",
        iconClasses: "fa fa-cloud"
      }]
    }
  }} />
}`,...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var J,Q,V;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    realm: {
      password: false
    }
  }} />
}`,...(V=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    message: {
      summary: "The time allotted for the connection has elapsed.<br/>The login process will restart from the beginning.",
      type: "error"
    }
  }} />
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => <KcPageStory {...args} kcContext={{
    social: {
      displayInfo: true,
      providers: [{
        loginUrl: "google",
        alias: "google",
        providerId: "google",
        displayName: "Google",
        iconClasses: "fa fa-google"
      }]
    }
  }} />
}`,...(ae=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var oe,re,se;u.parameters={...u.parameters,docs:{...(oe=u.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => <KcPageStory {...args} kcContext={{
    social: {
      displayInfo: true,
      providers: [{
        loginUrl: "google",
        alias: "google",
        providerId: "google",
        displayName: "Google",
        iconClasses: "fa fa-google"
      }, {
        loginUrl: "microsoft",
        alias: "microsoft",
        providerId: "microsoft",
        displayName: "Microsoft",
        iconClasses: "fa fa-windows"
      }]
    }
  }} />
}`,...(se=(re=u.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ne,ie,te;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => <KcPageStory {...args} kcContext={{
    social: {
      displayInfo: true,
      providers: []
    }
  }} />
}`,...(te=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:te.source}}};var le,de,ce;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: args => <KcPageStory {...args} kcContext={{
    social: {
      displayInfo: true,
      providers: [{
        loginUrl: "google",
        alias: "google",
        providerId: "google",
        displayName: "Google",
        iconClasses: "fa fa-google"
      }, {
        loginUrl: "microsoft",
        alias: "microsoft",
        providerId: "microsoft",
        displayName: "Microsoft",
        iconClasses: "fa fa-windows"
      }, {
        loginUrl: "facebook",
        alias: "facebook",
        providerId: "facebook",
        displayName: "Facebook",
        iconClasses: "fa fa-facebook"
      }, {
        loginUrl: "twitter",
        alias: "twitter",
        providerId: "twitter",
        displayName: "Twitter",
        iconClasses: "fa fa-twitter"
      }]
    }
  }} />
}`,...(ce=(de=k.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var me,pe,ge;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: args => <KcPageStory {...args} kcContext={{
    social: {
      displayInfo: true,
      providers: [{
        loginUrl: "google",
        alias: "google",
        providerId: "google",
        displayName: "Google",
        iconClasses: "fa fa-google"
      }]
    },
    realm: {
      rememberMe: false
    }
  }} />
}`,...(ge=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};const Re=["Default","WithInvalidCredential","WithoutRegistration","WithoutRememberMe","WithoutPasswordReset","WithEmailAsUsername","WithPresetUsername","WithImmutablePresetUsername","WithSocialProviders","WithoutPasswordField","WithErrorMessage","WithOneSocialProvider","WithTwoSocialProviders","WithNoSocialProviders","WithMoreThanTwoSocialProviders","WithSocialProvidersAndWithoutRememberMe"];export{r as Default,l as WithEmailAsUsername,g as WithErrorMessage,c as WithImmutablePresetUsername,s as WithInvalidCredential,k as WithMoreThanTwoSocialProviders,y as WithNoSocialProviders,f as WithOneSocialProvider,d as WithPresetUsername,m as WithSocialProviders,v as WithSocialProvidersAndWithoutRememberMe,u as WithTwoSocialProviders,p as WithoutPasswordField,t as WithoutPasswordReset,n as WithoutRegistration,i as WithoutRememberMe,Re as __namedExportsOrder,Ae as default};
