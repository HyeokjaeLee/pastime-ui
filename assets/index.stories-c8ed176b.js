import{j as u}from"./jsx-runtime-4ca860c5.js";import{p as r,H as E,S as v,e as x,g as W,I as _,F as f,c as S,a as h,u as M}from"./useGetter-24c44850.js";import"./index-61bf1805.js";import{c as t}from"./cloneDeepWith-04f791c3.js";import"./index-6831fd36.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./index-2801d3c9.js";import"./_baseClone-98650697.js";const A={title:"atoms/Input",component:r,args:{placeholder:"Input",validationMessage:"",label:"Input label"},argTypes:{size:t(v,e=>(e.table.category="Input.Wrap",e)),label:t(x,e=>(e.table.category="Input.Wrap",e)),required:t(W,e=>(e.table.category="Input.Wrap",e)),validationMessage:{description:`The validation message to display.

유효성 검사 메시지`,table:{category:"Input.Wrap",type:{summary:"string"}}},reversed:t(_,e=>(e.table.category="Input.Wrap",e)),fixedDarkMode:t(f,e=>(e.table.category="Input.Wrap",e)),onChange:E,placeholder:t(S,e=>(e.table.category="Input",e)),type:{table:{category:"Input"},control:"select"},value:{table:{category:"Input"},control:"text"},disabled:t(h,e=>(e.table.category="Input",e))}},a={render:({validationMessage:e,size:c,reversed:I,label:d,fixedDarkMode:g,value:m,onChange:n,...s})=>{const[b,y]=M(m),{required:D}=s;return u.jsx(r.Wrap,{validationMessage:e,size:c,reversed:I,label:d,required:D,fixedDarkMode:g,children:u.jsx(r,{...s,value:b,onChange:o=>{y(o.value),n==null||n(o)}})})}};var p,l,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: ({
    //* Input.Wrap
    validationMessage,
    size,
    reversed,
    label,
    fixedDarkMode,
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
    return <Input.Wrap {...{
      validationMessage,
      size,
      reversed,
      label,
      required,
      fixedDarkMode
    }}>
        <Input {...args} value={inputValue} onChange={e => {
        setInputValue(e.value);
        onChange?.(e);
      }} />
      </Input.Wrap>;
  }
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const q=["Default"];export{a as Default,q as __namedExportsOrder,A as default};
//# sourceMappingURL=index.stories-c8ed176b.js.map