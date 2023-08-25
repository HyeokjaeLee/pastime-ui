import{j as r}from"./jsx-runtime-4ca860c5.js";import{T as t,F as s}from"./useGetter-24c44850.js";import{c}from"./cloneDeepWith-04f791c3.js";import{o as m}from"./omit-ab4e3549.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./index-6831fd36.js";import"./index-8d47fad6.js";import"./index-2801d3c9.js";import"./_baseClone-98650697.js";const _={title:"atoms/Tooltip",component:t,argTypes:{children:{description:`You should wrap the component that composes the Tooltip.

Tooltip을 구성하는 컴포넌트를 감싸주어야 합니다.`,control:!1,table:{type:{summary:"ReactNode"},category:"Tooltip"}},mouseEnterDelay:{description:`The delay time before the Tooltip appears (ms).

Tooltip이 나타나기 전까지의 지연 시간 (ms)`,table:{category:"Tooltip"}},fixedDarkMode:c(s,o=>(o.table.category="Tooltip",o)),areaChildren:{name:"children",description:`The area to display the tooltip when the mouse hovers.

마우스가 올라갔을 때 툴팁을 표시할 영역`,table:{type:{summary:"ReactNode"},category:"Tooltip.Area"}},contentChildren:{name:"children",description:`The content to display in the tooltip.

툴팁에 표시할 내용`,table:{type:{summary:"ReactNode"},category:"Tooltip.Content"}}},args:{mouseEnterDelay:200,areaChildren:"Tooltip area",contentChildren:"Tooltip content"}},d=`
<Tooltip mouseEnterDelay={200}>
  <Tooltip.Area>
    Tooltip area
  </Tooltip.Area>
  <Tooltip.Content>
    Tooltip content
  </Tooltip.Content>
</Tooltip>
`,e={render:({areaChildren:o,contentChildren:l,...p})=>r.jsxs(t,{...m(p,"children"),children:[r.jsx(t.Area,{children:o}),r.jsx(t.Content,{children:l})]}),parameters:{docs:{source:{code:d}}}};var n,a,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: ({
    areaChildren,
    contentChildren,
    ...restArgs
  }) => <Tooltip {...omit(restArgs, 'children')}>
      <Tooltip.Area>{areaChildren}</Tooltip.Area>
      <Tooltip.Content>{contentChildren}</Tooltip.Content>
    </Tooltip>,
  parameters: {
    docs: {
      source: {
        code: DEFAULT_CODE_EXAMPLE
      }
    }
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,_ as default};
//# sourceMappingURL=index.stories-02314f11.js.map
