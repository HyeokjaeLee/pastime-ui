import{j as n}from"./index-dff3f2f9.js";import{r as l}from"./index-8db94870.js";import{a as e,I as a}from"./index-33770247.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-1fc0ca9a.js";import"./index-fca72f7e.js";const E={title:"atoms/InputContainer/Interaction",component:e.Intreraction,args:{children:n.jsx(a,{}),theme:"light",readonly:!1,size:"medium"},decorators:[t=>n.jsx("article",{className:"story-container",children:n.jsx(t,{})})],argTypes:{theme:{options:["light","dark"],control:"radio"},readonly:{control:"boolean"},size:{options:["small","medium","large"],control:"radio"}}},i={render:t=>{const[o,s]=l.useState("value"),r={value:o,onChange:s,disabled:t.readonly};return n.jsx(e,{children:n.jsx(e.Intreraction,{...t,children:n.jsx(a,{...r})})})}},u={render:t=>{const[o,s]=l.useState("value"),r={value:o,onChange:s};return n.jsxs(n.Fragment,{children:[n.jsx(e,{children:n.jsx(e.Intreraction,{...t,children:n.jsx(a,{...r})})}),n.jsx(e,{children:n.jsx(e.Intreraction,{...t,readonly:!0,children:n.jsx(a,{...r,disabled:!0})})}),n.jsx(e,{children:n.jsx(e.Intreraction,{...t,children:n.jsx(a,{...r,disabled:!0})})})]})}},p={render:t=>{const[o,s]=l.useState("value"),r={value:o,onChange:s,disabled:t.readonly};return n.jsxs(n.Fragment,{children:[n.jsx(e,{children:n.jsx(e.Intreraction,{...t,children:n.jsx(a,{...r})})}),n.jsx(e,{children:n.jsx(e.Intreraction,{...t,theme:"dark",children:n.jsx(a,{...r})})})]})}},c={render:t=>{const[o,s]=l.useState("value"),r={value:o,onChange:s,disabled:t.readonly};return n.jsxs(n.Fragment,{children:[n.jsx(e,{children:n.jsx(e.Intreraction,{...t,size:"small",children:n.jsx(a,{...r})})}),n.jsx(e,{children:n.jsx(e.Intreraction,{...t,children:n.jsx(a,{...r})})}),n.jsx(e,{children:n.jsx(e.Intreraction,{...t,size:"large",children:n.jsx(a,{...r})})})]})}};var d,I,m;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = createState('value');
    const inputProps = {
      value,
      onChange: setValue,
      disabled: args.readonly
    };
    return <InputContainer>
        <InputContainer.Intreraction {...args}>
          <Input {...inputProps} />
        </InputContainer.Intreraction>
      </InputContainer>;
  }
}`,...(m=(I=i.parameters)==null?void 0:I.docs)==null?void 0:m.source}}};var C,h,x;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = createState('value');
    const inputProps = {
      value,
      onChange: setValue
    };
    return <>
        <InputContainer>
          <InputContainer.Intreraction {...args}>
            <Input {...inputProps} />
          </InputContainer.Intreraction>
        </InputContainer>
        <InputContainer>
          <InputContainer.Intreraction {...args} readonly>
            <Input {...inputProps} disabled />
          </InputContainer.Intreraction>
        </InputContainer>
        <InputContainer>
          <InputContainer.Intreraction {...args}>
            <Input {...inputProps} disabled />
          </InputContainer.Intreraction>
        </InputContainer>
      </>;
  }
}`,...(x=(h=u.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,g,v;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = createState('value');
    const inputProps = {
      value,
      onChange: setValue,
      disabled: args.readonly
    };
    return <>
        <InputContainer>
          <InputContainer.Intreraction {...args}>
            <Input {...inputProps} />
          </InputContainer.Intreraction>
        </InputContainer>
        <InputContainer>
          <InputContainer.Intreraction {...args} theme="dark">
            <Input {...inputProps} />
          </InputContainer.Intreraction>
        </InputContainer>
      </>;
  }
}`,...(v=(g=p.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var P,S,b;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = createState('value');
    const inputProps = {
      value,
      onChange: setValue,
      disabled: args.readonly
    };
    return <>
        <InputContainer>
          <InputContainer.Intreraction {...args} size="small">
            <Input {...inputProps} />
          </InputContainer.Intreraction>
        </InputContainer>
        <InputContainer>
          <InputContainer.Intreraction {...args}>
            <Input {...inputProps} />
          </InputContainer.Intreraction>
        </InputContainer>
        <InputContainer>
          <InputContainer.Intreraction {...args} size="large">
            <Input {...inputProps} />
          </InputContainer.Intreraction>
        </InputContainer>
      </>;
  }
}`,...(b=(S=c.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const F=["Default","Disabled","Theme","Size"];export{i as Default,u as Disabled,c as Size,p as Theme,F as __namedExportsOrder,E as default};
//# sourceMappingURL=Interaction.stories-3a73686b.js.map
