import{j as m}from"./jsx-runtime-94f6e698.js";import{H as u,S as g}from"./STORY_META-e745fb7d.js";import"./cleanClassName-02d9776f.js";import{P as n}from"./index-213a6909.js";import"./index-8db94870.js";import{u as c}from"./useSubscribedState-f477a4b7.js";import"./index-ded462de.js";import"./index-98974bb7.js";import"./useDarkMode-9d18891c.js";import"./index-f08c19b6.js";import"./index-c53cb9c6.js";import"./index-1fc0ca9a.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c3baf1.js";import"./index-8ce4a492.js";import"./index-8c97ad0a.js";import"./_Uint8Array-a89bc7b3.js";const A={title:"molecules/Pagination",component:n,argTypes:{page:{description:`The current page.

현재 페이지`},pageSize:{description:`The number of items to be displayed per page.

페이지 당 표시할 항목 수`},totalItems:{description:`The total number of items.

전체 항목 수`},buttonCount:{description:`The number of page buttons to display.

표시할 페이지 버튼 수`},onChange:u,size:g},args:{page:1,pageSize:10,totalItems:503,buttonCount:10,size:"medium"}},e={render:({page:a,...s})=>{const[i,p]=c(a);return m.jsx(n,{...s,page:i,onChange:p})}};var t,r,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: ({
    page,
    ...restArgs
  }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentPage, setCurrentPage] = useSubscribedState(page);
    return <Pagination {...restArgs} page={currentPage} onChange={setCurrentPage} />;
  }
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const H=["Default"];export{e as Default,H as __namedExportsOrder,A as default};
//# sourceMappingURL=index.stories-05fadaf3.js.map
