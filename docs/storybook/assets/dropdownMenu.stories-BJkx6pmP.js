import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{D as d,a as u,b as s,c as a,d as o,e as p,f as M,g as w,h as e,i as S,j as O,k as C}from"./dropdown-menu-C7cUncHS.js";import{B as l}from"./button-BgOuTgla.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./index-Cnu3ZVWt.js";import"./index-Dv8KEsPl.js";import"./index-_wjppGB2.js";import"./index-bzJWmFph.js";import"./index-49N86NKK.js";import"./index-IE9ObSwG.js";import"./index-xprPBo3d.js";import"./utils-CytzSlOG.js";import"./index-BwobEAja.js";const y={title:"Components/DropdownMenu",component:d,tags:["autodocs"],argTypes:{}},r={render:()=>n.jsxs(d,{children:[n.jsx(u,{asChild:!0,children:n.jsx(l,{children:"Open Menu"})}),n.jsxs(s,{children:[n.jsx(a,{children:"Options"}),n.jsx(o,{children:"Profile"}),n.jsx(o,{children:"Settings"}),n.jsx(p,{}),n.jsx(M,{checked:!0,children:"Enable Notifications"}),n.jsxs(w,{value:"option1",children:[n.jsx(e,{value:"option1",children:"Option 1"}),n.jsx(e,{value:"option2",children:"Option 2"})]})]})]})},t={render:()=>n.jsxs(d,{children:[n.jsx(u,{asChild:!0,children:n.jsx(l,{children:"Open Menu with Submenu"})}),n.jsxs(s,{children:[n.jsx(a,{children:"Options"}),n.jsx(o,{children:"Profile"}),n.jsx(o,{children:"Settings"}),n.jsx(p,{}),n.jsx(M,{checked:!0,children:"Enable Notifications"}),n.jsxs(w,{value:"option1",children:[n.jsx(e,{value:"option1",children:"Option 1"}),n.jsx(e,{value:"option2",children:"Option 2"})]}),n.jsx(p,{}),n.jsxs(S,{children:[n.jsx(O,{children:"More Options"}),n.jsxs(C,{children:[n.jsx(o,{children:"Sub-option 1"}),n.jsx(o,{children:"Sub-option 2"})]})]})]})]})},i={render:()=>n.jsxs(d,{children:[n.jsx(u,{asChild:!0,children:n.jsx(l,{children:"Open Menu with Various Items"})}),n.jsxs(s,{children:[n.jsx(a,{children:"Options"}),n.jsx(o,{inset:!0,children:"Profile"}),n.jsx(o,{inset:!0,children:"Settings"}),n.jsx(p,{}),n.jsx(M,{checked:!1,children:"Enable Notifications"}),n.jsxs(w,{value:"option1",children:[n.jsx(e,{value:"option1",children:"Option 1"}),n.jsx(e,{value:"option2",children:"Option 2"})]})]})]})};var D,c,m;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Options</DropdownMenuLabel>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={true}>
          Enable Notifications
        </DropdownMenuCheckboxItem>
        <DropdownMenuRadioGroup value="option1">
          <DropdownMenuRadioItem value="option1">Option 1</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="option2">Option 2</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var h,x,j;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open Menu with Submenu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Options</DropdownMenuLabel>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={true}>
          Enable Notifications
        </DropdownMenuCheckboxItem>
        <DropdownMenuRadioGroup value="option1">
          <DropdownMenuRadioItem value="option1">Option 1</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="option2">Option 2</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>More Options</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Sub-option 1</DropdownMenuItem>
            <DropdownMenuItem>Sub-option 2</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...(j=(x=t.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var I,b,g;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open Menu with Various Items</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Options</DropdownMenuLabel>
        <DropdownMenuItem inset>Profile</DropdownMenuItem>
        <DropdownMenuItem inset>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={false}>
          Enable Notifications
        </DropdownMenuCheckboxItem>
        <DropdownMenuRadioGroup value="option1">
          <DropdownMenuRadioItem value="option1">Option 1</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="option2">Option 2</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const q=["Default","WithSubmenu","VariousItems"];export{r as Default,i as VariousItems,t as WithSubmenu,q as __namedExportsOrder,y as default};
