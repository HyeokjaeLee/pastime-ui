import{j as e}from"./index-b6a3891e.js";import{r as b}from"./index-8db94870.js";import{I as n}from"./index-64bfddf0.js";import"./_commonjsHelpers-042e6b4d.js";const y={title:"atoms/Input",component:n,args:{placeholder:"placeholder"},decorators:[r=>e.jsx("article",{className:"story-container",children:e.jsx(r,{})})],argTypes:{placeholder:{control:"text"},type:{control:"select"},disabled:{options:["read-only",!0,!1],control:{type:"radio"}}}},u={render:r=>{const[a,t]=b.useState("");return e.jsx(n,{...r,value:a,onChange:t})}},o={render:r=>{const[a,t]=b.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(n,{...r,placeholder:"number",type:"number",value:a,onChange:t}),e.jsx(n,{...r,placeholder:"large number",type:"large-number",value:a,onChange:t}),e.jsx(n,{...r,placeholder:"phone number",type:"phone-number",value:a,onChange:t})]})}};var s,l,m;u.parameters={...u.parameters,docs:{...(s=u.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = createState<string | number>('');
    return <Input {...args} value={value} onChange={setValue} />;
  }
}`,...(m=(l=u.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,c,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [numberValue, setNumberValue] = createState<string | number>('');
    return <>
        <Input {...args} placeholder="number" type="number" value={numberValue} onChange={setNumberValue} />
        <Input {...args} placeholder="large number" type="large-number" value={numberValue} onChange={setNumberValue} />
        <Input {...args} placeholder="phone number" type="phone-number" value={numberValue} onChange={setNumberValue} />
      </>;
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const V=["Default","NumberType"];export{u as Default,o as NumberType,V as __namedExportsOrder,y as default};
//# sourceMappingURL=index.stories-63a03483.js.map
