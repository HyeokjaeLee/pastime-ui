import{j as e}from"./index-dff3f2f9.js";import{r as x}from"./index-8db94870.js";import{O as i}from"./index-33770247.js";import{T as g}from"./index-658b84cf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-1fc0ca9a.js";import"./index-fca72f7e.js";const y={title:"atoms/Options",component:i,argTypes:{opened:{control:"boolean"},float:{options:["top","bottom"],control:"radio"},options:{control:"object"},theme:{options:["light","dark"],control:"radio"}},args:{opened:!0,options:Array.from({length:100},(o,t)=>({label:`Test label ${t}${t%7===0?" is long text: aurora sunrise eunoia vanilla iris adorable kitten laptop lucid sunrise shine banana adorable moonlight melody haze sunrise vanilla girlish blossom":""}`,value:`${t}번 옵션이 선택`})),float:"bottom"},decorators:[o=>e.jsx("article",{style:{position:"relative",height:650,padding:"10px 0"},children:e.jsx("div",{style:{margin:"300px auto",position:"relative",width:"400px"},children:e.jsx(o,{})})})]},r={render:o=>{const[t,a]=x.useState();return e.jsxs(e.Fragment,{children:[e.jsx(g,{value:JSON.stringify(t),theme:o.theme}),e.jsx(i,{...o,value:t,onSelect:s=>{a(s)}})]})}},n={args:{multiple:!0},render:o=>{const[t,a]=x.useState();return e.jsxs(e.Fragment,{children:[e.jsx(g,{value:JSON.stringify(t)}),e.jsx(i,{...o,value:t,onSelect:s=>{a(s)}})]})}};var l,p,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = createState<Option | Option[]>();
    return <>
        <Textbox value={JSON.stringify(value)} theme={props.theme} />
        <Options {...props} value={value} onSelect={option => {
        setValue((option as Option | Option[] | undefined));
      }} />
      </>;
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,m,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    multiple: true
  },
  render: props => {
    const [value, setValue] = createState<Option | Option[]>();
    return <>
        <Textbox value={JSON.stringify(value)} />
        <Options {...props} value={value} onSelect={option => {
        setValue((option as Option | Option[] | undefined));
      }} />
      </>;
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const T=["Default","Multiple"];export{r as Default,n as Multiple,T as __namedExportsOrder,y as default};
//# sourceMappingURL=index.stories-57ff50fb.js.map
