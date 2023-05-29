import{j as r}from"./index-775eafa6.js";import{I as n}from"./index-648b135e.js";import"./index-8db94870.js";import{u as v}from"./useSubscribedState-0f1b3ddf.js";import"./index-646a9c8c.js";import"./index-1fc0ca9a.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-a31c4b35.js";import"./_Uint8Array-b8d083f9.js";const e={INPUT:{table:{category:"Input"}},CONTAINER:{table:{category:"Input.Container"}},WRAP:{table:{category:"Input.Wrap"}}},s={table:{disable:!0}},W={title:"atoms/Input",component:n,args:{placeholder:"placeholder",validationMessage:""},argTypes:{ref:s,onChange:s,validationMessage:{...e.CONTAINER},size:{...e.WRAP,control:{type:"radio"},options:["small","medium","large"],defaultValue:"medium"},theme:{...e.WRAP,control:{type:"radio"},options:["light","dark"],defaultValue:"light"},placeholder:{...e.INPUT,control:"text",description:"placeholder"},type:{...e.INPUT,control:"select"},value:{...e.INPUT,control:"text"},disabled:{...e.INPUT,options:["readonly",!0,!1],control:{type:"radio"}}}},t={render:({validationMessage:p,size:d,theme:c,value:m,onChange:a,...I})=>{const[g,h]=v(m);return r.jsx(n.Container,{validationMessage:p,children:r.jsx(n.Wrap,{size:d,theme:c,children:r.jsx(n,{...I,value:g,onChange:o=>{h(o),a==null||a(o)}})})})}};var l,i,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({
    //* Input.Container
    validationMessage,
    //* Input.Wrap
    size,
    theme,
    //* Input
    value,
    onChange,
    ...args
  }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputValue, setInputValue] = useSubscribedState(value);
    return <Input.Container validationMessage={validationMessage}>
        <Input.Wrap size={size} theme={theme}>
          <Input {...args} value={inputValue} onChange={value => {
          setInputValue(value);
          onChange?.(value);
        }} />
        </Input.Wrap>
      </Input.Container>;
  }
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,W as default};
//# sourceMappingURL=index.stories-32e11f98.js.map
