import{r as i}from"./index-BlmOqGMO.js";import{u as h,b as v}from"./index-Cnu3ZVWt.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),b=(...e)=>e.filter((o,t,r)=>!!o&&o.trim()!==""&&r.indexOf(o)===t).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var C={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=i.forwardRef(({color:e="currentColor",size:o=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:n="",children:s,iconNode:u,...a},f)=>i.createElement("svg",{ref:f,...C,width:o,height:o,stroke:e,strokeWidth:r?Number(t)*24/Number(o):t,className:b("lucide",n),...a},[...u.map(([c,l])=>i.createElement(c,l)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=(e,o)=>{const t=i.forwardRef(({className:r,...n},s)=>i.createElement(w,{ref:s,iconNode:o,className:b(`lucide-${g(e)}`,r),...n}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],A=S("Check",y);function p({prop:e,defaultProp:o,onChange:t=()=>{}}){const[r,n]=k({defaultProp:o,onChange:t}),s=e!==void 0,u=s?e:r,a=h(t),f=i.useCallback(c=>{if(s){const d=typeof c=="function"?c(e):c;d!==e&&a(d)}else n(c)},[s,e,n,a]);return[u,f]}function k({defaultProp:e,onChange:o}){const t=i.useState(e),[r]=t,n=i.useRef(r),s=h(o);return i.useEffect(()=>{n.current!==r&&(s(r),n.current=r)},[r,n,s]),t}function E(e){const[o,t]=i.useState(void 0);return v(()=>{if(e){t({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(n=>{if(!Array.isArray(n)||!n.length)return;const s=n[0];let u,a;if("borderBoxSize"in s){const f=s.borderBoxSize,c=Array.isArray(f)?f[0]:f;u=c.inlineSize,a=c.blockSize}else u=e.offsetWidth,a=e.offsetHeight;t({width:u,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else t(void 0)},[e]),o}export{A as C,E as a,S as c,p as u};
