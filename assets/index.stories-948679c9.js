import{j as o}from"./jsx-runtime-4ca860c5.js";import{r as m}from"./index-61bf1805.js";import{i as d,h,k as E,H as r,j as v}from"./STORY_META-3b9d02a7.js";import{c as p,O as x}from"./useGetter-50e5cec5.js";import"./_commonjsHelpers-de833af9.js";import"./index-6831fd36.js";import"./index-8d47fad6.js";import"./index-2801d3c9.js";const V={title:"atoms/Select",component:p,argTypes:{opened:{control:"boolean",description:`Whether it's open or not.

열려있는지 여부`},float:d,options:h,multiple:E,onChange:r,onKeyDown:r,cancelable:v,value:{description:`The value of the selected option.

선택된 옵션의 값`}},args:{opened:!0,options:x,float:"bottom",multiple:!1,cancelable:!0},decorators:[e=>o.jsx("article",{style:{position:"relative",height:650,padding:"10px 0"},children:o.jsx("div",{style:{margin:"300px auto",position:"relative",width:"400px"},children:o.jsx(e,{})})})]},t={render:e=>{const[c,u]=m.useState();return o.jsx(p,{...e,value:c,onChange:a=>{var n;u(a.value),(n=e.onChange)==null||n.call(e,a)}})}};var s,l,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<ValidOptionValue | ValidOptionValue[]>();
    return <Select {...props} value={value} onChange={event => {
      setValue(event.value);
      props.onChange?.(event);
    }} />;
  }
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const _=["Default"];export{t as Default,_ as __namedExportsOrder,V as default};
//# sourceMappingURL=index.stories-948679c9.js.map
