import{j as n}from"./jsx-runtime-4ca860c5.js";import{S as t,H as l}from"./STORY_META-3b9d02a7.js";import{A as o,L as m}from"./useGetter-d6c608ba.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./index-6831fd36.js";import"./index-8d47fad6.js";import"./index-2801d3c9.js";const x={title:"atoms/Accordion",component:o,args:{size:"medium",titleChildren:"Accordion Title",contentsChildren:m},argTypes:{size:{...t,table:{...t.table,category:"Accordion"}},opened:{description:`The open state of the Accordion.

Accordion의 열림 상태`,type:"boolean",table:{category:"Accordion"}},titleChildren:{description:`The content that is always displayed.

항상 보이는 내용`,type:"string",name:"children",table:{type:{summary:"ReactNode"},category:"Accordion.Title"}},style:l,contentsChildren:{description:`The content displayed when the Accordion is expanded.

Accordion이 펼쳐졌을 때 보이는 내용`,type:"string",name:"children",table:{type:{summary:"ReactNode"},category:"Accordion.Contents"}}}},p=`
<Accordion size="medium">
  <Accordion.Title>
    Accordion Title
  </Accordion.Title>
  <Accordion.Contents>
    aurora sunrise...
  </Accordion.Contents>
</Accordion>
`,e={render:({titleChildren:s,contentsChildren:d,...a})=>n.jsxs(o,{...a,children:[n.jsx(o.Title,{children:s}),n.jsx(o.Contents,{children:d})]}),parameters:{docs:{source:{code:p}}}};var r,c,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: ({
    titleChildren,
    contentsChildren,
    ...args
  }) => <Accordion {...args}>
      <Accordion.Title>{titleChildren}</Accordion.Title>
      <Accordion.Contents>{contentsChildren}</Accordion.Contents>
    </Accordion>,
  parameters: {
    docs: {
      source: {
        code: DEFAULT_CODE_EXAMPLE
      }
    }
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const D=["Default"];export{e as Default,D as __namedExportsOrder,x as default};
//# sourceMappingURL=index.stories-221c8db9.js.map
