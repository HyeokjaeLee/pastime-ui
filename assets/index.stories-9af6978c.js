import{j as u}from"./jsx-runtime-4ca860c5.js";import{H as y,S as v,e as E,g as D,I as W,c as x,a as S}from"./STORY_META-3b9d02a7.js";import{I as n,u as f}from"./useGetter-d6c608ba.js";import"./index-61bf1805.js";import{c as t}from"./cloneDeepWith-be7a9d3c.js";import"./index-6831fd36.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./index-2801d3c9.js";import"./_baseClone-e04788ea.js";const j={title:"atoms/Input",component:n,args:{placeholder:"Input",validationMessage:"",label:"Input label"},argTypes:{size:t(v,e=>(e.table.category="Input.Wrap",e)),label:t(E,e=>(e.table.category="Input.Wrap",e)),required:t(D,e=>(e.table.category="Input.Wrap",e)),validationMessage:{description:`The validation message to display.

유효성 검사 메시지`,table:{category:"Input.Wrap",type:{summary:"string"}}},reversed:t(W,e=>(e.table.category="Input.Wrap",e)),onChange:y,placeholder:t(x,e=>(e.table.category="Input",e)),type:{table:{category:"Input"},control:"select"},value:{table:{category:"Input"},control:"text"},disabled:t(S,e=>(e.table.category="Input",e))}},a={render:({validationMessage:e,size:c,label:I,value:d,onChange:r,...s})=>{const[m,g]=f(d),{required:b}=s;return u.jsx(n.Wrap,{validationMessage:e,size:c,label:I,required:b,children:u.jsx(n,{...s,value:m,onChange:o=>{g(o.value),r==null||r(o)}})})}};var p,l,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: ({
    //* Input.Container
    validationMessage,
    //* Input.Wrap
    size,
    label,
    //* Input
    value,
    onChange,
    ...args
  }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputValue, setInputValue] = useSubscribedState(value);
    const {
      required
    } = args;
    return <Input.Wrap validationMessage={validationMessage} size={size} label={label} required={required}>
        <Input {...args} value={inputValue} onChange={e => {
        setInputValue(e.value);
        onChange?.(e);
      }} />
      </Input.Wrap>;
  }
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const q=["Default"];export{a as Default,q as __namedExportsOrder,j as default};
//# sourceMappingURL=index.stories-9af6978c.js.map
