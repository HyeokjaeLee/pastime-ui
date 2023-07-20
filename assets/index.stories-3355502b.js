import{j as n}from"./jsx-runtime-94f6e698.js";import{S as t,H as l}from"./STORY_META-e745fb7d.js";import{L as m}from"./cleanClassName-02d9776f.js";import{A as o}from"./index-96c3baf1.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./useSubscribedState-f477a4b7.js";import"./_Uint8Array-a89bc7b3.js";import"./useDarkMode-9d18891c.js";import"./index-1fc0ca9a.js";const D={title:"atoms/Accordion",component:o,args:{size:"medium",titleChildren:"Accordion Title",contentsChildren:m},argTypes:{size:{...t,table:{...t.table,category:"Accordion"}},opened:{description:`The open state of the Accordion.

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
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const _=["Default"];export{e as Default,_ as __namedExportsOrder,D as default};
//# sourceMappingURL=index.stories-3355502b.js.map
