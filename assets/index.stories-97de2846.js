import{j as o}from"./jsx-runtime-ffb262ed.js";import{r as d}from"./index-76fb7be0.js";import{o as p,i as m,h,k as E,H as r,j as x,F as f}from"./useGetter-e0894edc.js";import{O as v}from"./STORY_DUMMY-1d44b6df.js";import"./_commonjsHelpers-de833af9.js";import"./index-97f3e2bc.js";import"./index-8d47fad6.js";import"./index-d3ea75b5.js";const j={title:"atoms/Select",component:p,argTypes:{opened:{control:"boolean",description:`Whether it's open or not.

열려있는지 여부`},float:m,options:h,multiple:E,onChange:r,onKeyDown:r,cancelable:x,fixedDarkMode:f,value:{description:`The value of the selected option.

선택된 옵션의 값`}},args:{opened:!0,options:v,float:"bottom",multiple:!1,cancelable:!0},decorators:[e=>o.jsx("article",{style:{position:"relative",height:650,padding:"10px 0"},children:o.jsx("div",{style:{margin:"300px auto",position:"relative",width:"400px"},children:o.jsx(e,{})})})]},t={render:e=>{const[u,c]=d.useState();return o.jsx(p,{...e,value:u,onChange:a=>{var n;c(a.value),(n=e.onChange)==null||n.call(e,a)}})}};var s,l,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<ValidOptionValue | ValidOptionValue[]>();
    return <Select {...props} value={value} onChange={event => {
      setValue(event.value);
      props.onChange?.(event);
    }} />;
  }
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const V=["Default"];export{t as Default,V as __namedExportsOrder,j as default};
//# sourceMappingURL=index.stories-97de2846.js.map
