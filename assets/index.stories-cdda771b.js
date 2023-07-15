import{j as s}from"./jsx-runtime-94f6e698.js";import{H as o,S as l}from"./STORY_META-4f242148.js";import{I as T}from"./STORY_STYLE-1d429b8e.js";import"./index-8db94870.js";import{u as b}from"./useSubscribedState-4d780d95.js";import"./index-412a6d3e.js";import{I as n}from"./index-5dd1b721.js";import"./_commonjsHelpers-042e6b4d.js";import"./_Uint8Array-7cfac43c.js";const e={INPUT:{table:{category:"Input"}},WRAP:{table:{category:"Input.Wrap"}}},D={title:"atoms/Input",component:n,args:{placeholder:"placeholder",validationMessage:""},argTypes:{ref:o,onChange:o,validationMessage:{...e.WRAP},size:{...l,table:{...l.table,...e.WRAP.table}},placeholder:{...e.INPUT,control:"text",description:"placeholder"},type:{...e.INPUT,control:"select"},value:{...e.INPUT,control:"text"},disabled:{...e.INPUT,options:["readonly",!0,!1],control:{type:"radio"}}}},t={render:({validationMessage:c,size:d,value:I,onChange:a,...m})=>{const[g,v]=b(I);return s.jsx(n.Wrap,{validationMessage:c,size:d,style:{width:T},children:s.jsx(n,{...m,value:g,onChange:r=>{v(r),a==null||a(r)}})})}};var p,i,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: ({
    //* Input.Container
    validationMessage,
    //* Input.Wrap
    size,
    //* Input
    value,
    onChange,
    ...args
  }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputValue, setInputValue] = useSubscribedState(value);
    return <Input.Wrap validationMessage={validationMessage} size={size} style={{
      width: STORY_STYLES.INPUT_WIDTH
    }}>
        <Input {...args} value={inputValue} onChange={value => {
        setInputValue(value);
        onChange?.(value);
      }} />
      </Input.Wrap>;
  }
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,D as default};
//# sourceMappingURL=index.stories-cdda771b.js.map
