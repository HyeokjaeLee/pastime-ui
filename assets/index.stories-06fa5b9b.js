import{j as i}from"./jsx-runtime-94f6e698.js";import{I as E,a as I,H as w,S as D,V as S,b as z}from"./STORY_META-e745fb7d.js";import"./useGetter-9fa73c60.js";import"./index-f995d06d.js";import"./index-1322b24f.js";import"./index-ca2b295e.js";import"./index-872f8973.js";import{T as u}from"./index-714bc497.js";import{r as L,R as s}from"./index-8db94870.js";import{P as c}from"./index-1fc0ca9a.js";import"./cleanClassName-cdc1ff81.js";import"./index-aa852bc7.js";import"./index-8ce4a492.js";import"./_commonjsHelpers-042e6b4d.js";function d(){return d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},d.apply(this,arguments)}function N(e,a){if(e==null)return{};var t=_(e,a),r,o;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],!(a.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function _(e,a){if(e==null)return{};var t={},r=Object.keys(e),o,n;for(n=0;n<r.length;n++)o=r[n],!(a.indexOf(o)>=0)&&(t[o]=e[o]);return t}var g=L.forwardRef(function(e,a){var t=e.color,r=t===void 0?"currentColor":t,o=e.size,n=o===void 0?24:o,T=N(e,["color","size"]);return s.createElement("svg",d({ref:a,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},T),s.createElement("line",{x1:"19",y1:"5",x2:"5",y2:"19"}),s.createElement("circle",{cx:"6.5",cy:"6.5",r:"2.5"}),s.createElement("circle",{cx:"17.5",cy:"17.5",r:"2.5"}))});g.propTypes={color:c.string,size:c.oneOfType([c.string,c.number])};g.displayName="Percent";const W=g,K={title:"molecules/Textbox",component:u,args:{placeholder:"Textbox",value:""},argTypes:{value:{control:"text"},placeholder:E,children:I,onChange:w,size:D,validation:S,disabled:z},decorators:[e=>i.jsx("article",{className:"story-container",children:i.jsx(e,{})})]},l={},p={args:{children:"원",type:"large-number",value:"-10000.95"},render:e=>i.jsxs(i.Fragment,{children:[i.jsx(u,{...e}),i.jsx(u,{...e,children:i.jsx(W,{size:"1.2em"})})]})},m={args:{validation:e=>String(e),children:"원",type:"large-number"}};var x,f,h;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,b,y;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: '원',
    type: 'large-number',
    value: '-10000.95'
  },
  render: args => <>
      <Textbox {...args} />
      <Textbox {...args}>
        <Percent size="1.2em" />
      </Textbox>
    </>
}`,...(y=(b=p.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var j,O,P;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    validation: value => String(value),
    children: '원',
    type: 'large-number'
  }
}`,...(P=(O=m.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const M=["Default","WithUnit","WithValidation"];export{l as Default,p as WithUnit,m as WithValidation,M as __namedExportsOrder,K as default};
//# sourceMappingURL=index.stories-06fa5b9b.js.map
