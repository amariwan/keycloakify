import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{c as ie}from"./KcPageStory-DBRHJgZy.js";import"./index-yBjzXJbu.js";import"./iframe-DUdFcd_d.js";import"./index-BlmOqGMO.js";import"./assert-lEPzpKR_.js";import"./index-49N86NKK.js";import"./index-IE9ObSwG.js";import"./index-BdQq_4o_.js";import"./index-Cnu3ZVWt.js";import"./index-Dv8KEsPl.js";import"./dropdown-menu-C7cUncHS.js";import"./index-_wjppGB2.js";import"./index-bzJWmFph.js";import"./index-xprPBo3d.js";import"./utils-CytzSlOG.js";import"./index-DZ2oWOeb.js";import"./button-BgOuTgla.js";import"./index-BwobEAja.js";import"./card-Cusb1SoT.js";import"./mode-toggle-uDeI8jqW.js";const{KcPageStory:e}=ie({pageId:"register.ftl"}),we={title:"login/register.ftl",component:e},s={render:()=>r.jsx(e,{})},n={render:()=>r.jsx(e,{kcContext:{profile:{attributesByName:{username:{value:"Aland"},email:{value:"Aland@gwq-serviceplus.de"},firstName:{value:"Aland"},lastName:{value:"Baban"}}},messagesPerField:{existsError:(t,...a)=>[t,...a].includes("email"),get:t=>t==="email"?"Email already exists.":void 0}}})},i={render:()=>r.jsx(e,{kcContext:{profile:{attributesByName:{email:{validators:{pattern:{pattern:"^[^@]+@([^.]+\\.)*((mit\\.edu)|(berkeley\\.edu))$","error-message":"${profile.attributes.email.pattern.error}"}},annotations:{inputHelperTextBefore:"${profile.attributes.email.inputHelperTextBefore}"}}}},"x-keycloakify":{messages:{"profile.attributes.email.inputHelperTextBefore":"Please use your MIT or Berkeley email.","profile.attributes.email.pattern.error":"This is not an MIT (<strong>@mit.edu</strong>) nor a Berkeley (<strong>@berkeley.edu</strong>) email."}}}})},o={render:()=>r.jsx(e,{kcContext:{profile:{attributesByName:{favoritePet:{name:"favorite-pet",displayName:"${profile.attributes.favoritePet}",validators:{options:{options:["cat","dog","fish"]}},annotations:{inputOptionLabelsI18nPrefix:"profile.attributes.favoritePet.options"},required:!1,readOnly:!1}}},"x-keycloakify":{messages:{"profile.attributes.favoritePet":"Favorite Pet","profile.attributes.favoritePet.options.cat":"Fluffy Cat","profile.attributes.favoritePet.options.dog":"Loyal Dog","profile.attributes.favoritePet.options.fish":"Peaceful Fish"}}}})},l={render:()=>r.jsx(e,{kcContext:{profile:{attributesByName:{newsletter:{name:"newsletter",displayName:"Sign up to the newsletter",validators:{options:{options:["yes"]}},annotations:{inputOptionLabels:{yes:"I want my email inbox filled with spam"},inputType:"multiselect-checkboxes"},required:!1,readOnly:!1}}}}})},c={render:()=>r.jsx(e,{kcContext:{realm:{registrationEmailAsUsername:!0},profile:{attributesByName:{username:void 0}}}})},m={render:()=>r.jsx(e,{kcContext:{scripts:["https://www.google.com/recaptcha/api.js?hl=en"],recaptchaRequired:!0,recaptchaSiteKey:"6LfQHvApAAAAAE73SYTd5vS0lB1Xr7zdiQ-6iBVa"}})},p={render:()=>r.jsx(e,{kcContext:{locale:{currentLanguageTag:"de"},scripts:["https://www.google.com/recaptcha/api.js?hl=de"],recaptchaRequired:!0,recaptchaSiteKey:"6LfQHvApAAAAAE73SYTd5vS0lB1Xr7zdiQ-6iBVa"}})},d={render:()=>r.jsx(e,{kcContext:{passwordPolicies:{length:8}}})},u={render:()=>r.jsx(e,{kcContext:{termsAcceptanceRequired:!0,"x-keycloakify":{messages:{termsText:"<a href='https://example.com/terms'>Service Terms of Use</a>"}}}})},f={render:t=>r.jsx(e,{...t,kcContext:{termsAcceptanceRequired:!0,messagesPerField:{existsError:a=>a==="termsAccepted",get:a=>a==="termsAccepted"?"You must accept the terms.":void 0}}})},g={render:()=>r.jsx(e,{kcContext:{profile:{attributesByName:{username:{value:""},email:{value:"invalid-email"}}},messagesPerField:{existsError:t=>["username","email"].includes(t),get:t=>{if(t==="username")return"Username is required.";if(t==="email")return"Invalid email format."}}}})},y={render:()=>r.jsx(e,{kcContext:{profile:{attributesByName:{username:{value:"must",readOnly:!0},email:{value:"must@gwq-seriveplus.de",readOnly:!1}}}}})},h={render:()=>r.jsx(e,{kcContext:{profile:{attributesByName:{username:{value:"autogenerated_username"}}}}})};var x,v,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <KcPageStory />
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var A,P,k;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    profile: {
      attributesByName: {
        username: {
          value: "Aland"
        },
        email: {
          value: "Aland@gwq-serviceplus.de"
        },
        firstName: {
          value: "Aland"
        },
        lastName: {
          value: "Baban"
        }
      }
    },
    messagesPerField: {
      // NOTE: The other functions of messagesPerField are derived from get() and
      // existsError() so they are the only ones that need to mock.
      existsError: (fieldName: string, ...otherFieldNames: string[]) => [fieldName, ...otherFieldNames].includes("email"),
      get: (fieldName: string) => fieldName === "email" ? "Email already exists." : undefined
    }
  }} />
}`,...(k=(P=n.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var S,N,B;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    profile: {
      attributesByName: {
        email: {
          validators: {
            pattern: {
              pattern: "^[^@]+@([^.]+\\\\.)*((mit\\\\.edu)|(berkeley\\\\.edu))$",
              "error-message": "\${profile.attributes.email.pattern.error}"
            }
          },
          annotations: {
            inputHelperTextBefore: "\${profile.attributes.email.inputHelperTextBefore}"
          }
        }
      }
    },
    "x-keycloakify": {
      messages: {
        "profile.attributes.email.inputHelperTextBefore": "Please use your MIT or Berkeley email.",
        "profile.attributes.email.pattern.error": "This is not an MIT (<strong>@mit.edu</strong>) nor a Berkeley (<strong>@berkeley.edu</strong>) email."
      }
    }
  }} />
}`,...(B=(N=i.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var T,w,C;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    profile: {
      attributesByName: {
        favoritePet: {
          name: "favorite-pet",
          displayName: "\${profile.attributes.favoritePet}",
          validators: {
            options: {
              options: ["cat", "dog", "fish"]
            }
          },
          annotations: {
            inputOptionLabelsI18nPrefix: "profile.attributes.favoritePet.options"
          },
          required: false,
          readOnly: false
        } satisfies Attribute
      }
    },
    "x-keycloakify": {
      messages: {
        "profile.attributes.favoritePet": "Favorite Pet",
        "profile.attributes.favoritePet.options.cat": "Fluffy Cat",
        "profile.attributes.favoritePet.options.dog": "Loyal Dog",
        "profile.attributes.favoritePet.options.fish": "Peaceful Fish"
      }
    }
  }} />
}`,...(C=(w=o.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var E,W,F;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    profile: {
      attributesByName: {
        newsletter: {
          name: "newsletter",
          displayName: "Sign up to the newsletter",
          validators: {
            options: {
              options: ["yes"]
            }
          },
          annotations: {
            inputOptionLabels: {
              yes: "I want my email inbox filled with spam"
            },
            inputType: "multiselect-checkboxes"
          },
          required: false,
          readOnly: false
        } satisfies Attribute
      }
    }
  }} />
}`,...(F=(W=l.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var j,K,q;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    realm: {
      registrationEmailAsUsername: true
    },
    profile: {
      attributesByName: {
        username: undefined
      }
    }
  }} />
}`,...(q=(K=c.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var R,O,L;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    scripts: ["https://www.google.com/recaptcha/api.js?hl=en"],
    recaptchaRequired: true,
    recaptchaSiteKey: "6LfQHvApAAAAAE73SYTd5vS0lB1Xr7zdiQ-6iBVa"
  }} />
}`,...(L=(O=m.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var I,H,U;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    locale: {
      currentLanguageTag: "de"
    },
    scripts: ["https://www.google.com/recaptcha/api.js?hl=de"],
    recaptchaRequired: true,
    recaptchaSiteKey: "6LfQHvApAAAAAE73SYTd5vS0lB1Xr7zdiQ-6iBVa"
  }} />
}`,...(U=(H=p.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var M,Q,$;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    passwordPolicies: {
      length: 8
    }
  }} />
}`,...($=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:$.source}}};var Y,z,D;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    termsAcceptanceRequired: true,
    "x-keycloakify": {
      messages: {
        termsText: "<a href='https://example.com/terms'>Service Terms of Use</a>"
      }
    }
  }} />
}`,...(D=(z=u.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var V,X,_;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <KcPageStory {...args} kcContext={{
    termsAcceptanceRequired: true,
    messagesPerField: {
      existsError: (fieldName: string) => fieldName === "termsAccepted",
      get: (fieldName: string) => fieldName === "termsAccepted" ? "You must accept the terms." : undefined
    }
  }} />
}`,...(_=(X=f.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};var G,J,Z;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    profile: {
      attributesByName: {
        username: {
          value: ""
        },
        email: {
          value: "invalid-email"
        }
      }
    },
    messagesPerField: {
      existsError: (fieldName: string) => ["username", "email"].includes(fieldName),
      get: (fieldName: string) => {
        if (fieldName === "username") return "Username is required.";
        if (fieldName === "email") return "Invalid email format.";
        return undefined;
      }
    }
  }} />
}`,...(Z=(J=g.parameters)==null?void 0:J.docs)==null?void 0:Z.source}}};var ee,re,te;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    profile: {
      attributesByName: {
        username: {
          value: "must",
          readOnly: true
        },
        email: {
          value: "must@gwq-seriveplus.de",
          readOnly: false
        }
      }
    }
  }} />
}`,...(te=(re=y.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ae,se,ne;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    profile: {
      attributesByName: {
        username: {
          value: "autogenerated_username"
        }
      }
    }
  }} />
}`,...(ne=(se=h.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};const Ce=["Default","WithEmailAlreadyExists","WithRestrictedToMITStudents","WithFavoritePet","WithNewsletter","WithEmailAsUsername","WithRecaptcha","WithRecaptchaFrench","WithPasswordMinLength8","WithTermsAcceptance","WithTermsNotAccepted","WithFieldErrors","WithReadOnlyFields","WithAutoGeneratedUsername"];export{s as Default,h as WithAutoGeneratedUsername,n as WithEmailAlreadyExists,c as WithEmailAsUsername,o as WithFavoritePet,g as WithFieldErrors,l as WithNewsletter,d as WithPasswordMinLength8,y as WithReadOnlyFields,m as WithRecaptcha,p as WithRecaptchaFrench,i as WithRestrictedToMITStudents,u as WithTermsAcceptance,f as WithTermsNotAccepted,Ce as __namedExportsOrder,we as default};
