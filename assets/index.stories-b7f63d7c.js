import{j as m}from"./jsx-runtime-94f6e698.js";import{P as a}from"./index-e4ebfd80.js";import"./index-8db94870.js";import{u}from"./useSubscribedState-4d780d95.js";import"./index-412a6d3e.js";import"./index-fc283608.js";import"./index-1c39f0fc.js";import"./index-5dd1b721.js";import"./index-3142a179.js";import"./index-1fc0ca9a.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-c77ba5e6.js";import"./index-8ce4a492.js";import"./index-641aa2e7.js";import"./_Uint8Array-7cfac43c.js";import"./isSymbol-31fe9746.js";const _={title:"molecules/Pagination",component:a,args:{page:1,pageSize:10,totalItems:503,buttonCount:10}},e={render:({page:n,...s})=>{const[i,p]=u(n);return m.jsx(a,{...s,page:i,onChange:p})}};var r,t,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: ({
    page,
    ...restArgs
  }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentPage, setCurrentPage] = useSubscribedState(page);
    return <Pagination {...restArgs} page={currentPage} onChange={setCurrentPage} />;
  }
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const z=["Default"];export{e as Default,z as __namedExportsOrder,_ as default};
//# sourceMappingURL=index.stories-b7f63d7c.js.map
