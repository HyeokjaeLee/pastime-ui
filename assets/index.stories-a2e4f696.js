import{j as r,B as d}from"./index-dff3f2f9.js";import{r as p}from"./index-8db94870.js";import{B as a}from"./index-fca72f7e.js";import"./_commonjsHelpers-042e6b4d.js";const x={title:"atoms/BackgroundLayer",component:a,args:{focused:!1,blur:!0},decorators:[e=>r.jsxs("article",{style:{minHeight:"500px"},children:["Outer content",r.jsx(e,{})]})]},o={render:e=>{const[s,u]=p.useState(e.focused);return r.jsx(a,{...e,focused:s,children:r.jsx(d,{onClick:()=>u(!s),children:s?"close":"open"})})}};var t,c,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: props => {
    const [focused, setFocused] = createState(props.focused);
    return <BackgroundLayer {...props} focused={focused}>
        <Button onClick={() => setFocused(!focused)}>
          {focused ? 'close' : 'open'}
        </Button>
      </BackgroundLayer>;
  }
}`,...(n=(c=o.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const B=["Default"];export{o as Default,B as __namedExportsOrder,x as default};
//# sourceMappingURL=index.stories-a2e4f696.js.map
