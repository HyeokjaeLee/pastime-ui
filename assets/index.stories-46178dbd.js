import{j as o}from"./jsx-runtime-4ca860c5.js";import{r as d}from"./index-61bf1805.js";import{p,i as m,h,k as E,H as r,j as x,F as v,O as S}from"./useGetter-ac4dabea.js";import"./_commonjsHelpers-de833af9.js";import"./index-6831fd36.js";import"./index-8d47fad6.js";import"./index-2801d3c9.js";const _={title:"atoms/Select",component:p,argTypes:{opened:{control:"boolean",description:`Whether it's open or not.

열려있는지 여부`},float:m,options:h,multiple:E,onChange:r,onKeyDown:r,cancelable:x,fixedDarkMode:v,value:{description:`The value of the selected option.

선택된 옵션의 값`}},args:{opened:!0,options:S,float:"bottom",multiple:!1,cancelable:!0},decorators:[e=>o.jsx("article",{style:{position:"relative",height:650,padding:"10px 0"},children:o.jsx("div",{style:{margin:"300px auto",position:"relative",width:"400px"},children:o.jsx(e,{})})})]},t={render:e=>{const[u,c]=d.useState();return o.jsx(p,{...e,value:u,onChange:a=>{var n;c(a.value),(n=e.onChange)==null||n.call(e,a)}})}};var s,l,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<ValidOptionValue | ValidOptionValue[]>();
    return <Select {...props} value={value} onChange={event => {
      setValue(event.value);
      props.onChange?.(event);
    }} />;
  }
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const j=["Default"];export{t as Default,j as __namedExportsOrder,_ as default};
//# sourceMappingURL=index.stories-46178dbd.js.map
