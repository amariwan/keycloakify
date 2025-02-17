import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as g}from"./index-BlmOqGMO.js";import{P as z}from"./index-bzJWmFph.js";import{c as N}from"./utils-CytzSlOG.js";import"./index-yBjzXJbu.js";import"./index-49N86NKK.js";import"./index-IE9ObSwG.js";import"./index-Dv8KEsPl.js";var R="Separator",p="horizontal",S=["horizontal","vertical"],x=g.forwardRef((r,o)=>{const{decorative:s,orientation:a=p,...l}=r,d=T(a)?a:p,j=s?{role:"none"}:{"aria-orientation":d==="vertical"?d:void 0,role:"separator"};return e.jsx(z.div,{"data-orientation":d,...j,...l,ref:o})});x.displayName=R;function T(r){return S.includes(r)}var y=x;const t=g.forwardRef(({className:r,orientation:o="horizontal",decorative:s=!0,...a},l)=>e.jsx(y,{ref:l,decorative:s,orientation:o,className:N("shrink-0 bg-border",o==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",r),...a}));t.displayName=y.displayName;t.__docgenInfo={description:"",methods:[],props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},decorative:{defaultValue:{value:"true",computed:!1},required:!1}}};const _={title:"Components/Separator",component:t,tags:["autodocs"],argTypes:{orientation:{description:"The orientation of the separator (horizontal or vertical).",control:{type:"radio",options:["horizontal","vertical"]}},decorative:{description:"If true, the separator is for visual decoration only.",control:"boolean"},className:{description:"Custom class names for additional styles.",control:"text"}},parameters:{docs:{description:{component:"The `Separator` component is used to visually separate content with a line, either horizontally or vertically."}}}},n={args:{orientation:"horizontal",decorative:!0},render:r=>e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("div",{style:{marginBottom:"10px"},children:"Content above separator"}),e.jsx(t,{...r}),e.jsx("div",{style:{marginTop:"10px"},children:"Content below separator"})]})},i={args:{orientation:"vertical",decorative:!0},render:r=>e.jsxs("div",{style:{display:"flex",height:"100px",alignItems:"center"},children:[e.jsx("div",{style:{marginRight:"10px"},children:"Left content"}),e.jsx(t,{...r}),e.jsx("div",{style:{marginLeft:"10px"},children:"Right content"})]})};var c,m,v;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    decorative: true
  },
  render: args => <div style={{
    padding: "20px"
  }}>
      <div style={{
      marginBottom: "10px"
    }}>Content above separator</div>
      <Separator {...args} />
      <div style={{
      marginTop: "10px"
    }}>Content below separator</div>
    </div>
}`,...(v=(m=n.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var u,h,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    orientation: "vertical",
    decorative: true
  },
  render: args => <div style={{
    display: "flex",
    height: "100px",
    alignItems: "center"
  }}>
      <div style={{
      marginRight: "10px"
    }}>Left content</div>
      <Separator {...args} />
      <div style={{
      marginLeft: "10px"
    }}>Right content</div>
    </div>
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const A=["Default","Vertical"];export{n as Default,i as Vertical,A as __namedExportsOrder,_ as default};
