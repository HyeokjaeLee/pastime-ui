import{j as o}from"./jsx-runtime-94f6e698.js";import{r as g}from"./index-8db94870.js";import{B as x}from"./index-f995d06d.js";import"./index-1322b24f.js";import"./index-ca2b295e.js";import"./index-872f8973.js";import"./index-714bc497.js";import{h as v,j as e,L as E}from"./useGetter-9fa73c60.js";import"./_commonjsHelpers-042e6b4d.js";import"./cleanClassName-cdc1ff81.js";import"./index-aa852bc7.js";import"./index-1fc0ca9a.js";import"./index-8ce4a492.js";const P=()=>{const{setToastOptionList:t}=v();return{toast:s=>t==null?void 0:t(a=>[...a,s])}},j=({message:t,type:s,holdTime:a})=>{const[r,T]=g.useState(0),{toast:y}=P(),h=r%4;return o.jsx(x,{onClick:()=>{y({message:t||(r%4===0?E:`Toast test text ${r}`),type:s??(()=>{switch(h){case 0:return"success";case 1:return"fail";case 2:return"warning";case 3:return"info";default:return"success"}})(),holdTime:a}),T(f=>f+1)},children:"🚀 Toast!"})},X={title:"atoms/Toast",component:e.Provider,argTypes:{floatDirection:{description:`The location where the Toast will be displayed.

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
`,n={render:({message:t,holdTime:s,type:a,...r})=>o.jsx(e.Provider,{...r,children:o.jsx(j,{message:t,type:a,holdTime:s})}),parameters:{docs:{source:{code:b}}}},i={render:({holdTime:t=999999})=>o.jsxs("div",{className:"story-container",children:[o.jsx(e,{holdTime:t,icon:"success",children:"Success toast"}),o.jsx(e,{holdTime:t,icon:"fail",children:"Fail toast"}),o.jsx(e,{holdTime:t,icon:"warning",children:"Warning toast"}),o.jsx(e,{holdTime:t,icon:"info",children:"Info toast"})]})};var c,m,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const k=["Default","Type"];export{n as Default,i as Type,k as __namedExportsOrder,X as default};
//# sourceMappingURL=index.stories-7c02fd95.js.map
