import{j as s}from"./jsx-runtime-ffb262ed.js";import{I as j,c as I,b as _,d as N,S as D,V as R,a as L,e as S,f as w,g as A,F as z}from"./useGetter-bbe8dbaf.js";import"./index-f138c119.js";import"./index-d59862fe.js";import"./index-32dbad9a.js";import"./index-5f72e0e5.js";import{T as d}from"./index-7ceb466c.js";import{r as U,R as i}from"./index-76fb7be0.js";import{P as l}from"./index-8d47fad6.js";import"./index-97f3e2bc.js";import"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";function u(){return u=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u.apply(this,arguments)}function C(e,o){if(e==null)return{};var t=W(e,o),r,a;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],!(o.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function W(e,o){if(e==null)return{};var t={},r=Object.keys(e),a,n;for(n=0;n<r.length;n++)a=r[n],!(o.indexOf(a)>=0)&&(t[a]=e[a]);return t}var g=U.forwardRef(function(e,o){var t=e.color,r=t===void 0?"currentColor":t,a=e.size,n=a===void 0?24:a,O=C(e,["color","size"]);return i.createElement("svg",u({ref:o,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},O),i.createElement("line",{x1:"19",y1:"5",x2:"5",y2:"19"}),i.createElement("circle",{cx:"6.5",cy:"6.5",r:"2.5"}),i.createElement("circle",{cx:"17.5",cy:"17.5",r:"2.5"}))});g.propTypes={color:l.string,size:l.oneOfType([l.string,l.number])};g.displayName="Percent";const k=g,Z={title:"molecules/Textbox",component:d,args:{placeholder:"Textbox",value:"",label:"Textbox label"},argTypes:{value:{control:"text"},reversed:j,placeholder:I,children:_,onChange:N,size:D,validation:R,disabled:L,label:S,readOnly:w,required:A,fixedDarkMode:z},decorators:[e=>s.jsx("article",{className:"story-container",children:s.jsx(e,{})})]},c={},p={args:{children:"원",type:"large-number",value:"-10000.95"},render:e=>s.jsxs(s.Fragment,{children:[s.jsx(d,{...e}),s.jsx(d,{...e,children:s.jsx(k,{size:"1.2em"})})]})},m={args:{validation:e=>String(e),children:"원",type:"large-number"}};var x,f,h;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(h=(f=c.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,v,E;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(v=p.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var y,T,P;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    validation: value => String(value),
    children: '원',
    type: 'large-number'
  }
}`,...(P=(T=m.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};const J=["Default","WithChildren","WithValidation"];export{c as Default,p as WithChildren,m as WithValidation,J as __namedExportsOrder,Z as default};
//# sourceMappingURL=index.stories-96e91cf6.js.map
