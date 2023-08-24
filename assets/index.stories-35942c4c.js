import{j as t}from"./jsx-runtime-4ca860c5.js";import{T as e}from"./useGetter-8dbb8f59.js";import{o as s}from"./omit-5d62b285.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./index-6831fd36.js";import"./index-8d47fad6.js";import"./index-2801d3c9.js";import"./_baseClone-3b2f8666.js";const g={title:"atoms/Tooltip",component:e,argTypes:{children:{description:`You should wrap the component that composes the Tooltip.

Tooltip을 구성하는 컴포넌트를 감싸주어야 합니다.`,control:!1,table:{type:{summary:"ReactNode"},category:"Tooltip"}},mouseEnterDelay:{description:`The delay time before the Tooltip appears (ms).

Tooltip이 나타나기 전까지의 지연 시간 (ms)`,table:{category:"Tooltip"}},areaChildren:{name:"children",description:`The area to display the tooltip when the mouse hovers.

마우스가 올라갔을 때 툴팁을 표시할 영역`,table:{type:{summary:"ReactNode"},category:"Tooltip.Area"}},contentChildren:{name:"children",description:`The content to display in the tooltip.

툴팁에 표시할 내용`,table:{type:{summary:"ReactNode"},category:"Tooltip.Content"}}},args:{mouseEnterDelay:200,areaChildren:"Tooltip area",contentChildren:"Tooltip content"}},c=`
<Tooltip mouseEnterDelay={200}>
  <Tooltip.Area>
    Tooltip area
  </Tooltip.Area>
  <Tooltip.Content>
    Tooltip content
  </Tooltip.Content>
</Tooltip>
`,o={render:({areaChildren:i,contentChildren:l,...p})=>t.jsxs(e,{...s(p,"children"),children:[t.jsx(e.Area,{children:i}),t.jsx(e.Content,{children:l})]}),parameters:{docs:{source:{code:c}}}};var r,n,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(n=o.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const D=["Default"];export{o as Default,D as __namedExportsOrder,g as default};
//# sourceMappingURL=index.stories-35942c4c.js.map
