import{j as t}from"./jsx-runtime-94f6e698.js";import{r as f,R as c}from"./index-8db94870.js";import{S as V}from"./STORY_META-e745fb7d.js";import"./cleanClassName-02d9776f.js";import{B as i}from"./index-98974bb7.js";import{P as m}from"./index-1fc0ca9a.js";import{o as W}from"./omit-c02194d9.js";import"./_commonjsHelpers-042e6b4d.js";import"./useDarkMode-9d18891c.js";import"./_baseClone-325ee4dd.js";import"./_Uint8Array-a89bc7b3.js";function y(){return y=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},y.apply(this,arguments)}function $(e,r){if(e==null)return{};var o=C(e,r),n,s;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function C(e,r){if(e==null)return{};var o={},n=Object.keys(e),s,a;for(a=0;a<n.length;a++)s=n[a],!(r.indexOf(s)>=0)&&(o[s]=e[s]);return o}var b=f.forwardRef(function(e,r){var o=e.color,n=o===void 0?"currentColor":o,s=e.size,a=s===void 0?24:s,N=$(e,["color","size"]);return c.createElement("svg",y({ref:r,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},N),c.createElement("polyline",{points:"3 6 5 6 21 6"}),c.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),c.createElement("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),c.createElement("line",{x1:"14",y1:"11",x2:"14",y2:"17"}))});b.propTypes={color:m.string,size:m.oneOfType([m.string,m.number])};b.displayName="Trash2";const H=b,ee={title:"atoms/Button",component:i,decorators:[e=>t.jsx("article",{className:"story-container",children:t.jsx(e,{})})],argTypes:{delay:{control:"number",description:`The time (in milliseconds) to disable the button after rendering.

렌더링 후 버튼을 비활성화하는 시간(ms)`},children:{description:`The content of the button.

버튼의 내용`,control:"text",table:{type:{summary:"ReactNode"}}},size:V,theme:{description:`The theme of the button.

버튼의 테마`},shape:{description:`The shape of the button.

버튼의 모양`},icon:{description:`The icon of the button.

버튼의 아이콘`},iconDirection:{description:`The display position of the icon.

아이콘 표시 위치`},disabled:{description:`The disabled state of the button.

버튼의 비활성화 상태`,control:"boolean",table:{defaultValue:{summary:!1},type:{summary:"boolean"}}}},args:{children:"Button"}},p={},l={render:e=>t.jsx(t.Fragment,{children:["primary","secondary","success","warning","danger","ghost","clear"].map(r=>f.createElement(i,{...e,theme:r,key:r},r," button"))})},d={render:e=>t.jsx(t.Fragment,{children:["small","medium","large"].map(r=>f.createElement(i,{...e,size:r,key:r},r," button"))})},u={render:e=>t.jsx(t.Fragment,{children:["pill","rounded","sharp-corner"].map(r=>f.createElement(i,{...e,shape:r,key:r},r," button"))})},h={args:{icon:t.jsx(H,{})},render:e=>t.jsxs(t.Fragment,{children:[t.jsx(i,{...e}),t.jsx(i,{...e,iconDirection:"right"}),t.jsx(i,{...W(e,"children")})]})},g={args:{delay:1e4},render:e=>t.jsxs(t.Fragment,{children:[t.jsx(i,{...e}),t.jsx(i,{...e,theme:"ghost"}),t.jsx(i,{...e,theme:"clear"})]})};var x,j,B;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(B=(j=p.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var v,T,E;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <>
      {(['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'clear'] satisfies ButtonProps['theme'][]).map(theme => <Button {...args} theme={theme} key={theme}>
          {theme} button
        </Button>)}
    </>
}`,...(E=(T=l.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var O,S,w;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <>
      {(['small', 'medium', 'large'] satisfies ButtonProps['size'][]).map(size => <Button {...args} size={size} key={size}>
            {size} button
          </Button>)}
    </>
}`,...(w=(S=d.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var z,k,P;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <>
      {(['pill', 'rounded', 'sharp-corner'] satisfies ButtonProps['shape'][]).map(shape => <Button {...args} shape={shape} key={shape}>
          {shape} button
        </Button>)}
    </>
}`,...(P=(k=u.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var D,F,R;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    icon: <Trash2 />
  },
  render: args => <>
      <Button {...args} />
      <Button {...args} iconDirection="right" />
      <Button {...omit(args, 'children')} />
    </>
}`,...(R=(F=h.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var _,I,L;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    delay: 10000
  },
  render: args => <>
      <Button {...args} />
      <Button {...args} theme="ghost" />
      <Button {...args} theme="clear" />
    </>
}`,...(L=(I=g.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const re=["Default","Theme","Size","Shape","Icon","Delay"];export{p as Default,g as Delay,h as Icon,u as Shape,d as Size,l as Theme,re as __namedExportsOrder,ee as default};
//# sourceMappingURL=index.stories-81dc2911.js.map
