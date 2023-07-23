import{j as p}from"./jsx-runtime-94f6e698.js";import{H as g,S as b,e as v,I as E,b as y}from"./STORY_META-e745fb7d.js";import{I as o,a as D}from"./useGetter-9fa73c60.js";import"./index-8db94870.js";import{b as S}from"./_baseClone-45c69718.js";import"./cleanClassName-cdc1ff81.js";import"./index-1fc0ca9a.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-aa852bc7.js";import"./index-8ce4a492.js";var _=1,f=4;function x(e){return S(e,_|f)}const t=(e,n)=>{const r=x(e);return n(r)},j={title:"atoms/Input",component:o,args:{placeholder:"Input",validationMessage:""},argTypes:{size:t(b,e=>(e.table.category="Input.Wrap",e)),validationMessage:{description:`The validation message to display.

유효성 검사 메시지`,table:{category:"Input.Wrap",type:{summary:"string"}}},reversed:t(v,e=>(e.table.category="Input.Wrap",e)),onChange:g,placeholder:t(E,e=>(e.table.category="Input",e)),type:{table:{category:"Input"},control:"select"},value:{table:{category:"Input"},control:"text"},disabled:t(y,e=>(e.table.category="Input",e))}},a={render:({validationMessage:e,size:n,value:r,onChange:s,...I})=>{const[m,d]=D(r);return p.jsx(o.Wrap,{validationMessage:e,size:n,children:p.jsx(o,{...I,value:m,onChange:u=>{d(u),s==null||s(u)}})})}};var i,l,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
    return <Input.Wrap validationMessage={validationMessage} size={size}>
        <Input {...args} value={inputValue} onChange={value => {
        setInputValue(value);
        onChange?.(value);
      }} />
      </Input.Wrap>;
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const A=["Default"];export{a as Default,A as __namedExportsOrder,j as default};
//# sourceMappingURL=index.stories-fbdd3872.js.map
