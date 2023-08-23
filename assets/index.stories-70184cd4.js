import{j as s}from"./jsx-runtime-4ca860c5.js";import{I as O,c as I,b as N,d as _,S as R,V as L,a as D,e as S,f as w,g as A}from"./STORY_META-3b9d02a7.js";import"./useGetter-113de2ec.js";import"./index-0b8cf9d2.js";import"./index-671f7796.js";import"./index-b12a2b7f.js";import"./index-f43b0c1b.js";import{T as d}from"./index-b6fd13c1.js";import{r as z,R as i}from"./index-61bf1805.js";import{P as l}from"./index-8d47fad6.js";import"./index-6831fd36.js";import"./index-2801d3c9.js";import"./_commonjsHelpers-de833af9.js";function u(){return u=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u.apply(this,arguments)}function U(e,o){if(e==null)return{};var t=C(e,o),r,a;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],!(o.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function C(e,o){if(e==null)return{};var t={},r=Object.keys(e),a,n;for(n=0;n<r.length;n++)a=r[n],!(o.indexOf(a)>=0)&&(t[a]=e[a]);return t}var g=z.forwardRef(function(e,o){var t=e.color,r=t===void 0?"currentColor":t,a=e.size,n=a===void 0?24:a,j=U(e,["color","size"]);return i.createElement("svg",u({ref:o,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},j),i.createElement("line",{x1:"19",y1:"5",x2:"5",y2:"19"}),i.createElement("circle",{cx:"6.5",cy:"6.5",r:"2.5"}),i.createElement("circle",{cx:"17.5",cy:"17.5",r:"2.5"}))});g.propTypes={color:l.string,size:l.oneOfType([l.string,l.number])};g.displayName="Percent";const W=g,M={title:"molecules/Textbox",component:d,args:{placeholder:"Textbox",value:"",label:"Textbox label"},argTypes:{value:{control:"text"},reversed:O,placeholder:I,children:N,onChange:_,size:R,validation:L,disabled:D,label:S,readOnly:w,required:A},decorators:[e=>s.jsx("article",{className:"story-container",children:s.jsx(e,{})})]},c={},p={args:{children:"원",type:"large-number",value:"-10000.95"},render:e=>s.jsxs(s.Fragment,{children:[s.jsx(d,{...e}),s.jsx(d,{...e,children:s.jsx(W,{size:"1.2em"})})]})},m={args:{validation:e=>String(e),children:"원",type:"large-number"}};var x,f,h;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(h=(f=c.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,v,y;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(v=p.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var E,T,P;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    validation: value => String(value),
    children: '원',
    type: 'large-number'
  }
}`,...(P=(T=m.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};const X=["Default","WithChildren","WithValidation"];export{c as Default,p as WithChildren,m as WithValidation,X as __namedExportsOrder,M as default};
//# sourceMappingURL=index.stories-70184cd4.js.map
