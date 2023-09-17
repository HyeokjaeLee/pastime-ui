import{j as t}from"./jsx-runtime-ffb262ed.js";import{A as n,S as r,F as l,H as m}from"./useGetter-bbe8dbaf.js";import{L as p}from"./STORY_DUMMY-1d44b6df.js";import{c as A}from"./cloneDeepWith-1edb6fad.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-97f3e2bc.js";import"./index-8d47fad6.js";import"./index-d3ea75b5.js";import"./_baseClone-4ac59c0e.js";const b={title:"atoms/Accordion",component:n,args:{size:"medium",titleChildren:"Accordion Title",contentsChildren:p},argTypes:{size:{...r,table:{...r.table,category:"Accordion"}},opened:{description:`The open state of the Accordion.

Accordion의 열림 상태`,type:"boolean",table:{category:"Accordion"}},fixedDarkMode:A(l,e=>(e.table.category="Accordion",e)),titleChildren:{description:`The content that is always displayed.

항상 보이는 내용`,type:"string",name:"children",table:{type:{summary:"ReactNode"},category:"Accordion.Title"}},style:m,contentsChildren:{description:`The content displayed when the Accordion is expanded.

Accordion이 펼쳐졌을 때 보이는 내용`,type:"string",name:"children",table:{type:{summary:"ReactNode"},category:"Accordion.Contents"}}}},h=`
<Accordion size="medium">
  <Accordion.Title>
    Accordion Title
  </Accordion.Title>
  <Accordion.Contents>
    aurora sunrise...
  </Accordion.Contents>
</Accordion>
`,o={render:({titleChildren:e,contentsChildren:d,...a})=>t.jsxs(n,{...a,children:[t.jsx(n.Title,{children:e}),t.jsx(n.Contents,{children:d})]}),parameters:{docs:{source:{code:h}}}};var c,i,s;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const L=["Default"];export{o as Default,L as __namedExportsOrder,b as default};
//# sourceMappingURL=index.stories-3645f9d8.js.map
