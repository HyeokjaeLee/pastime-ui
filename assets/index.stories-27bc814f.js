import{j as o}from"./jsx-runtime-4ca860c5.js";import{r as T}from"./index-61bf1805.js";import{B as x}from"./index-d24b9a61.js";import"./index-57507f71.js";import"./index-d28d33c2.js";import"./index-0e3a4a39.js";import"./index-a9c40f5c.js";import{q as E,r as s,F as v}from"./useGetter-398907a8.js";import{L as P}from"./STORY_DUMMY-1d44b6df.js";import{c as D}from"./cloneDeepWith-10ab26fb.js";import"./_commonjsHelpers-de833af9.js";import"./index-6831fd36.js";import"./index-8d47fad6.js";import"./index-2801d3c9.js";import"./_baseClone-f305d592.js";const b=()=>{const{setToastOptionList:t}=E(),{current:r}=T.useRef({toast:a=>t==null?void 0:t(e=>[...e,a])});return r},j=({message:t,type:r,holdTime:a})=>{const[e,f]=T.useState(0),{toast:y}=b(),g=e%4;return o.jsx(x,{onClick:()=>{y({message:t||(e%4===0?P:`Toast test text ${e}`),type:r??(()=>{switch(g){case 0:return"success";case 1:return"fail";case 2:return"warning";case 3:return"info";default:return"success"}})(),holdTime:a}),f(h=>h+1)},children:"🚀 Toast!"})},U={title:"atoms/Toast",component:s.Provider,argTypes:{floatDirection:{description:`The location where the Toast will be displayed.

Toast가 표시될 위치`,table:{category:"Toast.Provider"}},fixedDarkMode:D(v,t=>(t.table.category="Toast.Provider",t)),children:{description:`You should wrap it around the top-level component of the app.

앱의 최상위 컴포넌트로 감싸주어야 합니다.`,control:"-",table:{type:{summary:"ReactNode"},category:"Toast.Provider"}},message:{control:"text",description:"Toast의 메시지",table:{type:{summary:"string"},category:"Toast Option"}},type:{description:"Toast의 타입",options:["success","fail","warning","info"],control:"radio",table:{category:"Toast Option",type:{summary:"success | fail | warning | info | ReactNode"},defaultValue:{summary:"success"}}},holdTime:{description:"Toast가 보여지는 시간 (ms)",control:"number",table:{type:{summary:"number"},category:"Toast Option",defaultValue:{summary:5e3}}}}},w=`
// App.tsx
<Toast.Provider floatDirection="from-top">
  <App />
</Toast.Provider>

// Page.tsx
const Page = () => {
  const { toast } = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          type: 'success',
          message: 'Toast test text',
          holdTime: 5000,
        })
      }
    >
      🚀 Toast!
    </Button>
  );
}
`,n={render:({message:t,holdTime:r,type:a,...e})=>o.jsx(s.Provider,{...e,children:o.jsx(j,{message:t,type:a,holdTime:r})}),parameters:{docs:{source:{code:w}}}},i={render:({holdTime:t=999999})=>o.jsxs("div",{className:"story-container",children:[o.jsx(s,{holdTime:t,icon:"success",children:"Success toast"}),o.jsx(s,{holdTime:t,icon:"fail",children:"Fail toast"}),o.jsx(s,{holdTime:t,icon:"warning",children:"Warning toast"}),o.jsx(s,{holdTime:t,icon:"info",children:"Info toast"})]})};var c,m,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: ({
    message,
    holdTime,
    type,
    ...args
  }) => <Toast.Provider {...args}>
      <ToastTestButton message={message} type={type} holdTime={holdTime} />
    </Toast.Provider>,
  parameters: {
    docs: {
      source: {
        code: DEFAULT_CODE_EXAMPLE
      }
    }
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,l,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: ({
    holdTime = 999999
  }) => <div className="story-container">
      <Toast holdTime={holdTime} icon="success">
        Success toast
      </Toast>
      <Toast holdTime={holdTime} icon="fail">
        Fail toast
      </Toast>
      <Toast holdTime={holdTime} icon="warning">
        Warning toast
      </Toast>
      <Toast holdTime={holdTime} icon="info">
        Info toast
      </Toast>
    </div>
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const V=["Default","Type"];export{n as Default,i as Type,V as __namedExportsOrder,U as default};
//# sourceMappingURL=index.stories-27bc814f.js.map
