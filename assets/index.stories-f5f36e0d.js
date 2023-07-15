import{j as o}from"./jsx-runtime-94f6e698.js";import{r as h}from"./index-8db94870.js";import{T as e}from"./index-fc283608.js";import{L as x}from"./STORY_DUMMY-6de1a062.js";import{u as v}from"./index-412a6d3e.js";import{B as E}from"./index-1c39f0fc.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-5dd1b721.js";import"./index-3142a179.js";import"./index-1fc0ca9a.js";import"./index-c77ba5e6.js";import"./useSubscribedState-4d780d95.js";import"./_Uint8Array-7cfac43c.js";import"./index-8ce4a492.js";import"./index-641aa2e7.js";import"./isSymbol-31fe9746.js";const P=()=>{const{setToastOptionList:t}=v();return{toast:s=>t==null?void 0:t(r=>[...r,s])}},j=({message:t,type:s,holdTime:r})=>{const[a,T]=h.useState(0),{toast:f}=P(),y=a%4;return o.jsx(E,{onClick:()=>{f({message:t||(a%4===0?x:`Toast test text ${a}`),type:s??(()=>{switch(y){case 0:return"success";case 1:return"fail";case 2:return"warning";case 3:return"info";default:return"success"}})(),holdTime:r}),T(g=>g+1)},children:"🚀 Toast!"})},U={title:"atoms/Toast",component:e.Provider,argTypes:{floatDirection:{description:`The location where the Toast will be displayed.

Toast가 표시될 위치`,table:{category:"Toast.Provider"}},children:{description:`You should wrap it around the top-level component of the app.

앱의 최상위 컴포넌트로 감싸주어야 합니다.`,control:"-",table:{type:{summary:"ReactNode"},category:"Toast.Provider"}},message:{control:"text",description:"Toast의 메시지",table:{type:{summary:"string"},category:"Toast Option"}},type:{description:"Toast의 타입",options:["success","fail","warning","info"],control:"radio",table:{category:"Toast Option",type:{summary:"success | fail | warning | info | ReactNode"},defaultValue:{summary:"success"}}},holdTime:{description:"Toast가 보여지는 시간 (ms)",control:"number",table:{type:{summary:"number"},category:"Toast Option",defaultValue:{summary:5e3}}}}},b=`
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
`,n={render:({message:t,holdTime:s,type:r,...a})=>o.jsx(e.Provider,{...a,children:o.jsx(j,{message:t,type:r,holdTime:s})}),parameters:{docs:{source:{code:b}}}},i={render:({holdTime:t=999999})=>o.jsxs("div",{className:"story-container",children:[o.jsx(e,{holdTime:t,icon:"success",children:"Success toast"}),o.jsx(e,{holdTime:t,icon:"fail",children:"Fail toast"}),o.jsx(e,{holdTime:t,icon:"warning",children:"Warning toast"}),o.jsx(e,{holdTime:t,icon:"info",children:"Info toast"})]})};var c,m,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-f5f36e0d.js.map
