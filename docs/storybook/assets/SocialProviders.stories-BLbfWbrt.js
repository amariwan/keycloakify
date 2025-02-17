import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const a=({social:e,clsx:d,msg:C,realm:j})=>{const t=(e==null?void 0:e.providers)??[];return!j.password||!t.length?null:r.jsxs("div",{id:"kc-social-providers",className:"mt-5 space-y-7",children:[r.jsx("h2",{className:"text-center text-lg mt-7",children:C("identity-provider-login-label")}),r.jsx("div",{className:d("text-lg grid gap-2 grid-cols-1",t.length>1?"md:grid-cols-2":"grid-cols-1"),children:t.map((...[s])=>r.jsx("div",{className:" items-center bg-accent w-full py-1 my-1.5 border rounded-lg px-3 hover:bg-primary hover:text-primary-foreground",children:r.jsxs("a",{id:`social-${s.alias}`,className:"flex flex-row items-center justify-center w-full py-2",href:s.loginUrl,type:"button",children:[s.iconClasses&&r.jsx("i",{className:d(s.iconClasses),"aria-hidden":"true"}),r.jsx("span",{className:"mx-3",dangerouslySetInnerHTML:{__html:s.displayName}})]})},s.alias))})]})};a.__docgenInfo={description:"",methods:[],displayName:"SocialProviders",props:{social:{required:!0,tsType:{name:"union",raw:`| {
    displayInfo?: boolean;
    providers?: Array<{
      alias: string;
      loginUrl: string;
      displayName: string;
      iconClasses?: string;
    }>;
  }
| undefined`,elements:[{name:"signature",type:"object",raw:`{
  displayInfo?: boolean;
  providers?: Array<{
    alias: string;
    loginUrl: string;
    displayName: string;
    iconClasses?: string;
  }>;
}`,signature:{properties:[{key:"displayInfo",value:{name:"boolean",required:!1}},{key:"providers",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  alias: string;
  loginUrl: string;
  displayName: string;
  iconClasses?: string;
}`,signature:{properties:[{key:"alias",value:{name:"string",required:!0}},{key:"loginUrl",value:{name:"string",required:!0}},{key:"displayName",value:{name:"string",required:!0}},{key:"iconClasses",value:{name:"string",required:!1}}]}}],raw:`Array<{
  alias: string;
  loginUrl: string;
  displayName: string;
  iconClasses?: string;
}>`,required:!1}}]}},{name:"undefined"}]},description:""},kcClsx:{required:!0,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => string",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"string"}}},description:""},clsx:{required:!0,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => string",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"string"}}},description:""},msg:{required:!0,tsType:{name:"any"},description:""},realm:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  password: boolean;
}`,signature:{properties:[{key:"password",value:{name:"boolean",required:!0}}]}},description:""}}};const h={title:"Components/SocialProviders",component:a,tags:["autodocs"],args:{social:{providers:[{loginUrl:"google",alias:"google",displayName:"Google",iconClasses:"fa fa-google"},{loginUrl:"microsoft",alias:"microsoft",displayName:"Microsoft",iconClasses:"fa fa-windows"}]},realm:{password:!0},msg:e=>e,kcClsx:(...e)=>e.join(" "),clsx:(...e)=>e.join(" ")}},n={render:e=>r.jsx(a,{...e})},o={args:{social:{providers:[{loginUrl:"google",alias:"google",displayName:"Google",iconClasses:"fa fa-google"}]}},render:e=>r.jsx(a,{...e})},i={args:{social:{providers:[{loginUrl:"google",alias:"google",displayName:"Google",iconClasses:"fa fa-google"},{loginUrl:"microsoft",alias:"microsoft",displayName:"Microsoft",iconClasses:"fa fa-windows"},{loginUrl:"twitter",alias:"twitter",displayName:"Twitter",iconClasses:"fa fa-twitter"}]}},render:e=>r.jsx(a,{...e})},l={args:{social:{providers:[]},realm:{password:!0}},render:e=>r.jsx(a,{...e})};var g,c,m;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: SocialProvidersProps) => <SocialProviders {...args} />
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,u,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    social: {
      providers: [{
        loginUrl: "google",
        alias: "google",
        displayName: "Google",
        iconClasses: "fa fa-google"
      }]
    }
  },
  render: (args: SocialProvidersProps) => <SocialProviders {...args} />
}`,...(y=(u=o.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var f,v,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    social: {
      providers: [{
        loginUrl: "google",
        alias: "google",
        displayName: "Google",
        iconClasses: "fa fa-google"
      }, {
        loginUrl: "microsoft",
        alias: "microsoft",
        displayName: "Microsoft",
        iconClasses: "fa fa-windows"
      }, {
        loginUrl: "twitter",
        alias: "twitter",
        displayName: "Twitter",
        iconClasses: "fa fa-twitter"
      }]
    }
  },
  render: (args: SocialProvidersProps) => <SocialProviders {...args} />
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var x,N,P;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    social: {
      providers: []
    },
    realm: {
      password: true
    }
  },
  render: (args: SocialProvidersProps) => <SocialProviders {...args} />
}`,...(P=(N=l.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};const b=["Default","SingleProvider","MultipleProviders","NoProviders"];export{n as Default,i as MultipleProviders,l as NoProviders,o as SingleProvider,b as __namedExportsOrder,h as default};
