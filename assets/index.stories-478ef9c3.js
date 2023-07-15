import{j as r}from"./jsx-runtime-94f6e698.js";import{r as c}from"./index-8db94870.js";import{O as u,H as n}from"./STORY_META-4f242148.js";import{L as m}from"./STORY_DUMMY-6de1a062.js";import{S as i}from"./index-3142a179.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-412a6d3e.js";import"./index-1fc0ca9a.js";const O={title:"atoms/Select",component:i,argTypes:{opened:{control:"boolean",description:`Whether it's open or not.

열려있는지 여부`},float:u,options:{control:"object",description:`The options to provide.

제공할 옵션`},multiple:{control:"boolean",description:`Whether multiple selection is possible or not.

다중 선택이 가능한지 여부`,table:{defaultValue:{summary:!1}}},onChange:n,onKeyDown:n,cancelable:{control:"boolean",description:`Whether it is possible to cancel by re-selecting the already selected option.

이미 선택된 옵션을 다시 선택하여 취소할 수 있는지 여부`},value:{description:`The value of the selected option.

선택된 옵션의 값`}},args:{opened:!0,options:Array.from({length:10},(t,e)=>({label:`Test label ${e}${e%7===0?` is long text: ${m}`:""}`,value:`${e}번 옵션이 선택`})),float:"bottom",multiple:!1,cancelable:!0},decorators:[t=>r.jsx("article",{style:{position:"relative",height:650,padding:"10px 0"},children:r.jsx("div",{style:{margin:"300px auto",position:"relative",width:"400px"},children:r.jsx(t,{})})})]},o={render:t=>{const[e,p]=c.useState();return r.jsx(i,{...t,value:e,onChange:p})}};var a,s,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: props => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<ValidOptionValue | ValidOptionValue[]>();
    return <Select {...props} value={value} onChange={setValue} />;
  }
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const S=["Default"];export{o as Default,S as __namedExportsOrder,O as default};
//# sourceMappingURL=index.stories-478ef9c3.js.map
