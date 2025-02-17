import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{C as a,a as o,b as s,c as d,d as c,e as i}from"./card-Cusb1SoT.js";import{B as l}from"./button-BgOuTgla.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./utils-CytzSlOG.js";import"./index-Dv8KEsPl.js";import"./index-BwobEAja.js";const H={title:"Components/Card",component:a,tags:["autodocs"],argTypes:{className:{control:"text"}}},t={render:()=>e.jsxs(a,{className:"max-w-sm",children:[e.jsxs(o,{children:[e.jsx(s,{children:"Card Title"}),e.jsx(d,{children:"This is a description of the card."})]}),e.jsx(c,{children:e.jsx("p",{children:"This is the content of the card. You can add any component here."})}),e.jsx(i,{children:e.jsx(l,{className:"text-white p-2 rounded",children:"Action"})})]})},n={render:()=>e.jsxs(a,{className:"max-w-sm bg-red-100 text-red-700",children:[e.jsxs(o,{children:[e.jsx(s,{children:"Custom Styled Card"}),e.jsx(d,{children:"This card has a custom background and text color."})]}),e.jsx(c,{children:e.jsx("p",{children:"Card content with a custom style."})}),e.jsx(i,{children:e.jsx(l,{className:"bg-red-500 text-white p-2 rounded",children:"Custom Action"})})]})},r={render:()=>e.jsxs(a,{className:"max-w-md",children:[e.jsxs(o,{children:[e.jsx(s,{children:"Card with Long Content"}),e.jsx(d,{children:"A description with more detailed content to demonstrate how it handles long text."})]}),e.jsx(c,{children:e.jsx("p",{children:"This card contains a lot of content. It’s a good example of what happens when content extends the usual length. The Card component is flexible enough to handle varying amounts of text and other components."})}),e.jsx(i,{children:e.jsx(l,{className:"bg-blue-500 text-white p-2 rounded",children:"View More"})})]})};var m,h,C;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a description of the card.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the content of the card. You can add any component here.</p>
      </CardContent>
      <CardFooter>
        <Button className="text-white p-2 rounded">Action</Button>
      </CardFooter>
    </Card>
}`,...(C=(h=t.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var p,x,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Card className="max-w-sm bg-red-100 text-red-700">
      <CardHeader>
        <CardTitle>Custom Styled Card</CardTitle>
        <CardDescription>
          This card has a custom background and text color.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content with a custom style.</p>
      </CardContent>
      <CardFooter>
        <Button className="bg-red-500 text-white p-2 rounded">Custom Action</Button>
      </CardFooter>
    </Card>
}`,...(u=(x=n.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var g,j,w;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Card with Long Content</CardTitle>
        <CardDescription>
          A description with more detailed content to demonstrate how it handles long
          text.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          This card contains a lot of content. It’s a good example of what happens when
          content extends the usual length. The Card component is flexible enough to
          handle varying amounts of text and other components.
        </p>
      </CardContent>
      <CardFooter>
        <Button className="bg-blue-500 text-white p-2 rounded">View More</Button>
      </CardFooter>
    </Card>
}`,...(w=(j=r.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const S=["Default","CustomStyle","LongContent"];export{n as CustomStyle,t as Default,r as LongContent,S as __namedExportsOrder,H as default};
