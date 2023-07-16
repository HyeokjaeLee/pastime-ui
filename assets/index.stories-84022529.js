import{j as m}from"./jsx-runtime-94f6e698.js";import{P as a}from"./index-e89228da.js";import"./index-8db94870.js";import{u}from"./useSubscribedState-f5c54406.js";import"./index-34380ec6.js";import"./index-4cf32024.js";import"./index-e6ae2039.js";import"./useDarkMode-9d18891c.js";import"./index-e735f61b.js";import"./index-6d9d35e7.js";import"./index-1fc0ca9a.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-3820e365.js";import"./index-8ce4a492.js";import"./index-9d090926.js";import"./_Uint8Array-bdbab931.js";const _={title:"molecules/Pagination",component:a,args:{page:1,pageSize:10,totalItems:503,buttonCount:10}},e={render:({page:n,...s})=>{const[i,p]=u(n);return m.jsx(a,{...s,page:i,onChange:p})}};var r,t,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: ({
    page,
    ...restArgs
  }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentPage, setCurrentPage] = useSubscribedState(page);
    return <Pagination {...restArgs} page={currentPage} onChange={setCurrentPage} />;
  }
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const z=["Default"];export{e as Default,z as __namedExportsOrder,_ as default};
//# sourceMappingURL=index.stories-84022529.js.map
