import{j as t}from"./jsx-runtime-4ca860c5.js";import{y as N,O as c,z as O,v as C,B,M as E,D as w,E as v,G as L,F as H,J as I}from"./useGetter-24c44850.js";import{c as a}from"./cloneDeepWith-04f791c3.js";import{r as S}from"./index-2801d3c9.js";import{u as T,X as A,M as R}from"./ModalContext-d3ea8f6b.js";import"./index-61bf1805.js";import{c as u}from"./index-6831fd36.js";import{B as $}from"./index-cd308def.js";import"./index-825f7a5c.js";import"./index-de3f86e8.js";import"./index-992ffde4.js";import"./index-804125ba.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./_baseClone-98650697.js";const z="_header_yyyan_554",P={header:z,"fade-in-bottom":"_fade-in-bottom_yyyan_1","fade-in-top":"_fade-in-top_yyyan_1","fade-in":"_fade-in_yyyan_1","fade-out-bottom":"_fade-out-bottom_yyyan_1","fade-out-top":"_fade-out-top_yyyan_1","fade-out":"_fade-out_yyyan_1","scale-in-center":"_scale-in-center_yyyan_1","scale-in-top":"_scale-in-top_yyyan_1","scale-out-top":"_scale-out-top_yyyan_1","scale-up-center":"_scale-up-center_yyyan_1","shake-horizontal":"_shake-horizontal_yyyan_1","slide-in-bottom":"_slide-in-bottom_yyyan_1","slide-in-fwd-center":"_slide-in-fwd-center_yyyan_1","slide-in-left":"_slide-in-left_yyyan_1","slide-in-right":"_slide-in-right_yyyan_1","slide-in-top":"_slide-in-top_yyyan_1","slide-out-bottom":"_slide-out-bottom_yyyan_1","slide-out-left":"_slide-out-left_yyyan_1","slide-out-right":"_slide-out-right_yyyan_1","slide-out-top":"_slide-out-top_yyyan_1","swing-in-top-fwd":"_swing-in-top-fwd_yyyan_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_yyyan_1"},m=({closeButton:e=!1,className:d,children:r,...o})=>{const{onClose:i}=T();return t.jsxs("header",{...o,className:u(`${P.header} ${d}`),children:[t.jsx("div",{children:r}),e?t.jsx($,{size:"small",theme:"clear",onClick:i,icon:t.jsx(A,{})}):null]})};try{m.displayName="ModalHeader",m.__docgenInfo={description:"",displayName:"ModalHeader",props:{closeButton:{defaultValue:{value:"false"},description:"",name:"closeButton",required:!1,type:{name:"boolean"}}}}}catch{}const q="_closing_1dmjs_565",V="_blurred_1dmjs_576",G="_modal_1dmjs_553",U="_dark_1dmjs_598",n={"modal-container":"_modal-container_1dmjs_553","fade-in":"_fade-in_1dmjs_1",closing:q,"fade-out":"_fade-out_1dmjs_1","background-layer":"_background-layer_1dmjs_570",blurred:V,modal:G,dark:U,"fade-in-bottom":"_fade-in-bottom_1dmjs_1","fade-in-top":"_fade-in-top_1dmjs_1","fade-out-bottom":"_fade-out-bottom_1dmjs_1","fade-out-top":"_fade-out-top_1dmjs_1","scale-in-center":"_scale-in-center_1dmjs_1","scale-in-top":"_scale-in-top_1dmjs_1","scale-out-top":"_scale-out-top_1dmjs_1","scale-up-center":"_scale-up-center_1dmjs_1","shake-horizontal":"_shake-horizontal_1dmjs_1","slide-in-bottom":"_slide-in-bottom_1dmjs_1","slide-in-fwd-center":"_slide-in-fwd-center_1dmjs_1","slide-in-left":"_slide-in-left_1dmjs_1","slide-in-right":"_slide-in-right_1dmjs_1","slide-in-top":"_slide-in-top_1dmjs_1","slide-out-bottom":"_slide-out-bottom_1dmjs_1","slide-out-left":"_slide-out-left_1dmjs_1","slide-out-right":"_slide-out-right_1dmjs_1","slide-out-top":"_slide-out-top_1dmjs_1","swing-in-top-fwd":"_swing-in-top-fwd_1dmjs_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_1dmjs_1"},l=Object.assign(({zIndex:e=100,blurredBackground:d=!0,opened:r=!1,onClose:o,backgroundScroll:i=!1,fixedDarkMode:g,className:b,children:j,...M})=>{const[_,D,k]=N({openingTransition:r?c.OPENED:c.CLOSED,closingDuration:200}),y=()=>{o==null||o({preventDefaultClose:k}),D(!1)};O({backgroundScroll:i,isPrevent:!!_});const{isDarkMode:x}=C(g);return _?S.createPortal(t.jsxs("div",{style:{zIndex:e},className:`${n["modal-container"]} ${_===c.CLOSING&&n.closing}`,children:[t.jsx("div",{className:u(`${n["background-layer"]} ${d&&n.blurred}`),onClick:y}),t.jsx("article",{...M,className:u(`${n.modal} ${x&&n.dark} ${b}`),children:t.jsx(R,{onClose:y,children:j})})]}),document.body):t.jsx(t.Fragment,{})},{Header:m});try{l.displayName="Modal",l.__docgenInfo={description:"",displayName:"Modal",props:{zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},blurredBackground:{defaultValue:null,description:"",name:"blurredBackground",required:!1,type:{name:"boolean"}},opened:{defaultValue:null,description:"",name:"opened",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((e: ModalCloseEvent) => void)"}},backgroundScroll:{defaultValue:null,description:"",name:"backgroundScroll",required:!1,type:{name:"boolean"}},fixedDarkMode:{defaultValue:null,description:"",name:"fixedDarkMode",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}}}}}catch{}const le={title:"organisms/Modal",component:l,argTypes:{children:{description:`The content of the modal.

모달의 내용`,table:{type:{summary:"ReactNode"},category:"Modal"}},opened:a(B,e=>(e.table.category="Modal",e)),zIndex:a(E,e=>(e.table.category="Modal",e)),onClose:a(w,e=>(e.table.category="Modal",e)),blurredBackground:a(v,e=>(e.table.category="Modal",e)),backgroundScroll:a(L,e=>(e.table.category="Modal",e)),fixedDarkMode:a(H,e=>(e.table.category="Modal",e)),headerChildren:{name:"children",description:`The content to display on the left inside the component.

컴포넌트 내부 좌측에 표시할 내용`,table:{type:{summary:"ReactNode"},category:"Modal.Header"}},closeButton:a(I,e=>(e.table.category="Modal.Header",e))},args:{headerChildren:"Modal Header",closeButton:!1,zIndex:100,opened:!0,children:"Modal's children",blurredBackground:!0}},s={render:({closeButton:e,headerChildren:d,children:r,...o})=>t.jsxs(l,{...o,children:[t.jsx(l.Header,{closeButton:e,children:d}),r]})};var p,f,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: ({
    closeButton,
    headerChildren,
    children,
    ...restModalProps
  }) => <Modal {...restModalProps}>
      <Modal.Header closeButton={closeButton}>{headerChildren}</Modal.Header>
      {children}
    </Modal>
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const se=["Default"];export{s as Default,se as __namedExportsOrder,le as default};
//# sourceMappingURL=index.stories-9dfe8c08.js.map