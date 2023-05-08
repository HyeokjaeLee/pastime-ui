import{j as e}from"./index-dff3f2f9.js";import{r as b}from"./index-8db94870.js";import{I as n}from"./index-33770247.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-1fc0ca9a.js";import"./index-fca72f7e.js";const v={title:"atoms/Input",component:n,args:{placeholder:"placeholder"},decorators:[r=>e.jsx("article",{className:"story-container",children:e.jsx(r,{})})],argTypes:{placeholder:{control:"text"},type:{control:"select"},disabled:{options:["read-only",!0,!1],control:{type:"radio"}}}},o={render:r=>{const[a,t]=b.useState("");return e.jsx(n,{...r,value:a,onChange:t})}},u={render:r=>{const[a,t]=b.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(n,{...r,placeholder:"number",type:"number",value:a,onChange:t}),e.jsx(n,{...r,placeholder:"large number",type:"large-number",value:a,onChange:t}),e.jsx(n,{...r,placeholder:"phone number",type:"phone-number",value:a,onChange:t})]})}};var s,l,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = createState<string | number>('');
    return <Input {...args} value={value} onChange={setValue} />;
  }
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,c,d;u.parameters={...u.parameters,docs:{...(p=u.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [numberValue, setNumberValue] = createState<string | number>('');
    return <>
        <Input {...args} placeholder="number" type="number" value={numberValue} onChange={setNumberValue} />
        <Input {...args} placeholder="large number" type="large-number" value={numberValue} onChange={setNumberValue} />
        <Input {...args} placeholder="phone number" type="phone-number" value={numberValue} onChange={setNumberValue} />
      </>;
  }
}`,...(d=(c=u.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const j=["Default","NumberType"];export{o as Default,u as NumberType,j as __namedExportsOrder,v as default};
//# sourceMappingURL=index.stories-6b34af0a.js.map
