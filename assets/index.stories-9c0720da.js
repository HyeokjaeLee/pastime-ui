import{j as r}from"./jsx-runtime-4ca860c5.js";import{r as x,R as c}from"./index-61bf1805.js";import{F as H,S as K}from"./useGetter-aa62640f.js";import{B as n}from"./index-21da628e.js";import{P as l}from"./index-8d47fad6.js";import{o as A}from"./omit-30b235e2.js";import"./_commonjsHelpers-de833af9.js";import"./index-6831fd36.js";import"./index-2801d3c9.js";import"./_baseClone-77a733f5.js";function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o])}return e},j.apply(this,arguments)}function X(e,t){if(e==null)return{};var s=Z(e,t),o,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}function Z(e,t){if(e==null)return{};var s={},o=Object.keys(e),a,i;for(i=0;i<o.length;i++)a=o[i],!(t.indexOf(a)>=0)&&(s[a]=e[a]);return s}var b=x.forwardRef(function(e,t){var s=e.color,o=s===void 0?"currentColor":s,a=e.size,i=a===void 0?24:a,C=X(e,["color","size"]);return c.createElement("svg",j({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},C),c.createElement("polyline",{points:"3 6 5 6 21 6"}),c.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),c.createElement("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),c.createElement("line",{x1:"14",y1:"11",x2:"14",y2:"17"}))});b.propTypes={color:l.string,size:l.oneOfType([l.string,l.number])};b.displayName="Trash2";const y=b,oe={title:"molecules/Button",component:n,decorators:[e=>r.jsx("article",{className:"story-container",children:r.jsx(e,{})})],argTypes:{delay:{control:"number",description:`The time (in milliseconds) to disable the button after rendering.

렌더링 후 버튼을 비활성화하는 시간(ms)`},fixedDarkMode:H,children:{description:`The content of the button.

버튼의 내용`,control:"text",table:{type:{summary:"ReactNode"}}},size:K,theme:{description:`The theme of the button.

버튼의 테마`},shape:{description:`The shape of the button.

버튼의 모양`},icon:{description:`The icon of the button.

버튼의 아이콘`,control:"text"},iconDirection:{description:`The display position of the icon.

아이콘 표시 위치`},loading:{description:`Whether the button is loading or not, submit, click handlers do not work while loading.

버튼의 로딩 여부, 로딩 중에는 submit, click 핸들러가 동작하지 않습니다.`,defaultValue:!1},disabled:{description:`The disabled state of the button.

버튼의 비활성화 상태`,control:"boolean",table:{defaultValue:{summary:!1},type:{summary:"boolean"}}}},args:{children:"Button"}},m={},p={render:e=>r.jsx(r.Fragment,{children:["primary","secondary","success","warning","danger","ghost","clear"].map(t=>x.createElement(n,{...e,theme:t,key:t},t," button"))})},d={render:e=>r.jsx(r.Fragment,{children:["small","medium","large"].map(t=>x.createElement(n,{...e,size:t,key:t},t," button"))})},u={render:e=>r.jsx(r.Fragment,{children:["pill","rounded","sharp-corner"].map(t=>x.createElement(n,{...e,shape:t,key:t},t," button"))})},h={args:{icon:r.jsx(y,{})},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(n,{...e}),r.jsx(n,{...e,iconDirection:"right"}),r.jsx(n,{...A(e,"children")})]})},g={args:{delay:1e4},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(n,{...e}),r.jsx(n,{...e,theme:"ghost"}),r.jsx(n,{...e,theme:"clear"})]})},f={args:{loading:!0},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(n,{...e,shape:"pill"}),r.jsx(n,{...e}),r.jsx(n,{...e,shape:"sharp-corner"}),r.jsx(n,{...e,icon:r.jsx(y,{}),iconDirection:"left"}),r.jsx(n,{...e,icon:r.jsx(y,{}),iconDirection:"right"}),r.jsx(n,{...A(e,"children"),icon:r.jsx(y,{})})]})};var B,T,v;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:"{}",...(v=(T=m.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var k,D,E;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <>
      {(['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'clear'] satisfies ButtonProps['theme'][]).map(theme => <Button {...args} theme={theme} key={theme}>
          {theme} button
        </Button>)}
    </>
}`,...(E=(D=p.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var w,O,S;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <>
      {(['small', 'medium', 'large'] satisfies ButtonProps['size'][]).map(size => <Button {...args} size={size} key={size}>
            {size} button
          </Button>)}
    </>
}`,...(S=(O=d.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var z,P,F;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <>
      {(['pill', 'rounded', 'sharp-corner'] satisfies ButtonProps['shape'][]).map(shape => <Button {...args} shape={shape} key={shape}>
          {shape} button
        </Button>)}
    </>
}`,...(F=(P=u.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var _,R,I;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    icon: <Trash2 />
  },
  render: args => <>
      <Button {...args} />
      <Button {...args} iconDirection="right" />
      <Button {...omit(args, 'children')} />
    </>
}`,...(I=(R=h.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var L,V,W;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    delay: 10000
  },
  render: args => <>
      <Button {...args} />
      <Button {...args} theme="ghost" />
      <Button {...args} theme="clear" />
    </>
}`,...(W=(V=g.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var M,N,$;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  render: args => <>
      <Button {...args} shape="pill" />
      <Button {...args} />
      <Button {...args} shape="sharp-corner" />
      <Button {...args} icon={<Trash2 />} iconDirection="left" />
      <Button {...args} icon={<Trash2 />} iconDirection="right" />
      <Button {...omit(args, 'children')} icon={<Trash2 />} />
    </>
}`,...($=(N=f.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};const se=["Default","Theme","Size","Shape","Icon","Delay","Loading"];export{m as Default,g as Delay,h as Icon,f as Loading,u as Shape,d as Size,p as Theme,se as __namedExportsOrder,oe as default};
//# sourceMappingURL=index.stories-9c0720da.js.map
