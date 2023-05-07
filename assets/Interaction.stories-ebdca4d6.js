import{j as n}from"./index-b6a3891e.js";import{r as l}from"./index-8db94870.js";import{a as e,I as a}from"./index-64bfddf0.js";import"./_commonjsHelpers-042e6b4d.js";const D={title:"atoms/InputContainer/Interaction",component:e.Intreraction,args:{children:n.jsx(a,{}),theme:"light",readonly:!1,size:"medium"},decorators:[t=>n.jsx("article",{className:"story-container",children:n.jsx(t,{})})],argTypes:{theme:{options:["light","dark"],control:"radio"},readonly:{control:"boolean"},size:{options:["small","medium","large"],control:"radio"}}},i={render:t=>{const[o,s]=l.useState("value"),r={value:o,onChange:s,disabled:t.readonly};return n.jsx(e,{children:n.jsx(e.Intreraction,{...t,children:n.jsx(a,{...r})})})}},u={render:t=>{const[o,s]=l.useState("value"),r={value:o,onChange:s};return n.jsxs(n.Fragment,{children:[n.jsx(e,{children:n.jsx(e.Intreraction,{...t,children:n.jsx(a,{...r})})}),n.jsx(e,{children:n.jsx(e.Intreraction,{...t,readonly:!0,children:n.jsx(a,{...r,disabled:!0})})}),n.jsx(e,{children:n.jsx(e.Intreraction,{...t,children:n.jsx(a,{...r,disabled:!0})})})]})}},c={render:t=>{const[o,s]=l.useState("value"),r={value:o,onChange:s,disabled:t.readonly};return n.jsxs(n.Fragment,{children:[n.jsx(e,{children:n.jsx(e.Intreraction,{...t,children:n.jsx(a,{...r})})}),n.jsx(e,{children:n.jsx(e.Intreraction,{...t,theme:"dark",children:n.jsx(a,{...r})})})]})}},p={render:t=>{const[o,s]=l.useState("value"),r={value:o,onChange:s,disabled:t.readonly};return n.jsxs(n.Fragment,{children:[n.jsx(e,{children:n.jsx(e.Intreraction,{...t,size:"small",children:n.jsx(a,{...r})})}),n.jsx(e,{children:n.jsx(e.Intreraction,{...t,children:n.jsx(a,{...r})})}),n.jsx(e,{children:n.jsx(e.Intreraction,{...t,size:"large",children:n.jsx(a,{...r})})})]})}};var d,I,C;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(C=(I=i.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var m,h,x;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(h=u.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,g,v;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(v=(g=c.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var P,S,b;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(b=(S=p.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const k=["Default","Disabled","Theme","Size"];export{i as Default,u as Disabled,p as Size,c as Theme,k as __namedExportsOrder,D as default};
//# sourceMappingURL=Interaction.stories-ebdca4d6.js.map
