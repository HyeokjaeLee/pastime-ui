import{j as n}from"./jsx-runtime-94f6e698.js";import{S as t,H as l}from"./STORY_META-4f242148.js";import{L as m}from"./STORY_DUMMY-6de1a062.js";import{I as p}from"./STORY_STYLE-1d429b8e.js";import{A as o}from"./index-c77ba5e6.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./useSubscribedState-4d780d95.js";import"./index-412a6d3e.js";import"./_Uint8Array-7cfac43c.js";import"./index-1fc0ca9a.js";const b={title:"atoms/Accordion",component:o,args:{size:"medium",style:{width:p},titleChildren:"Accordion Title",contentsChildren:m},argTypes:{size:{...t,table:{...t.table,category:"Accordion"}},opened:{description:`The open state of the Accordion.

Accordion의 열림 상태`,type:"boolean",table:{category:"Accordion"}},titleChildren:{description:`The content that is always displayed.

항상 보이는 내용`,type:"string",name:"children",table:{type:{summary:"ReactNode"},category:"Accordion.Title"}},style:l,contentsChildren:{description:`The content displayed when the Accordion is expanded.

Accordion이 펼쳐졌을 때 보이는 내용`,type:"string",name:"children",table:{type:{summary:"ReactNode"},category:"Accordion.Contents"}}}},A=`
<Accordion size="medium">
  <Accordion.Title>
    Accordion Title
  </Accordion.Title>
  <Accordion.Contents>
    aurora sunrise...
  </Accordion.Contents>
</Accordion>
`,e={render:({titleChildren:s,contentsChildren:d,...a})=>n.jsxs(o,{...a,children:[n.jsx(o.Title,{children:s}),n.jsx(o.Contents,{children:d})]}),parameters:{docs:{source:{code:A}}}};var r,c,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const L=["Default"];export{e as Default,L as __namedExportsOrder,b as default};
//# sourceMappingURL=index.stories-bca4ae52.js.map
