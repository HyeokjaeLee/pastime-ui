import{j as t}from"./jsx-runtime-94f6e698.js";import{r as c}from"./index-8db94870.js";import{d as u,c as m,g as d,H as a,f as E}from"./STORY_META-e745fb7d.js";import{l,O as h}from"./useGetter-9fa73c60.js";import"./_commonjsHelpers-042e6b4d.js";import"./cleanClassName-cdc1ff81.js";import"./index-1fc0ca9a.js";import"./index-aa852bc7.js";import"./index-8ce4a492.js";const V={title:"atoms/Select",component:l,argTypes:{opened:{control:"boolean",description:`Whether it's open or not.

열려있는지 여부`},float:u,options:m,multiple:d,onChange:a,onKeyDown:a,cancelable:E,value:{description:`The value of the selected option.

선택된 옵션의 값`}},args:{opened:!0,options:h,float:"bottom",multiple:!1,cancelable:!0},decorators:[o=>t.jsx("article",{style:{position:"relative",height:650,padding:"10px 0"},children:t.jsx("div",{style:{margin:"300px auto",position:"relative",width:"400px"},children:t.jsx(o,{})})})]},e={render:o=>{const[i,p]=c.useState();return t.jsx(l,{...o,value:i,onChange:p})}};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: props => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<ValidOptionValue | ValidOptionValue[]>();
    return <Select {...props} value={value} onChange={setValue} />;
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const _=["Default"];export{e as Default,_ as __namedExportsOrder,V as default};
//# sourceMappingURL=index.stories-e8c5942a.js.map
