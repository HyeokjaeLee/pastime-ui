import{j as s}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{v as k,w as z,x as D}from"./useGetter-e0894edc.js";import{c as q}from"./index-97f3e2bc.js";const N="_button_1sjo2_553",V="_primary_1sjo2_654",B="_secondary_1sjo2_687",L="_success_1sjo2_720",M="_warning_1sjo2_753",S="_danger_1sjo2_786",C="_clear_1sjo2_819",R="_dark_1sjo2_858",E="_ghost_1sjo2_897",I="_icon_1sjo2_646",T="_delaying_1sjo2_950",e={button:N,"delayed-button":"_delayed-button_1sjo2_558","size-small":"_size-small_1sjo2_574","children-type-icon":"_children-type-icon_1sjo2_579","children-type-text":"_children-type-text_1sjo2_584","children-type-both":"_children-type-both_1sjo2_589","size-medium":"_size-medium_1sjo2_594","size-large":"_size-large_1sjo2_614","shape-sharp-corner":"_shape-sharp-corner_1sjo2_634","shape-rounded":"_shape-rounded_1sjo2_638","shape-pill":"_shape-pill_1sjo2_642","icon-direction-left":"_icon-direction-left_1sjo2_646","icon-direction-right":"_icon-direction-right_1sjo2_650",primary:V,"delay-bar":"_delay-bar_1sjo2_670",secondary:B,success:L,warning:M,danger:S,clear:C,dark:R,ghost:E,"button-content":"_button-content_1sjo2_931",icon:I,delaying:T,"fade-in-bottom":"_fade-in-bottom_1sjo2_1","fade-in-top":"_fade-in-top_1sjo2_1","fade-in":"_fade-in_1sjo2_1","fade-out-bottom":"_fade-out-bottom_1sjo2_1","fade-out-top":"_fade-out-top_1sjo2_1","fade-out":"_fade-out_1sjo2_1","scale-in-center":"_scale-in-center_1sjo2_1","scale-in-top":"_scale-in-top_1sjo2_1","scale-out-top":"_scale-out-top_1sjo2_1","scale-up-center":"_scale-up-center_1sjo2_1","shake-horizontal":"_shake-horizontal_1sjo2_1","slide-in-bottom":"_slide-in-bottom_1sjo2_1","slide-in-fwd-center":"_slide-in-fwd-center_1sjo2_1","slide-in-left":"_slide-in-left_1sjo2_1","slide-in-right":"_slide-in-right_1sjo2_1","slide-in-top":"_slide-in-top_1sjo2_1","slide-out-bottom":"_slide-out-bottom_1sjo2_1","slide-out-left":"_slide-out-left_1sjo2_1","slide-out-right":"_slide-out-right_1sjo2_1","slide-out-top":"_slide-out-top_1sjo2_1","swing-in-top-fwd":"_swing-in-top-fwd_1sjo2_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_1sjo2_1"},c=({delay:t,size:p="medium",theme:l="primary",shape:m="rounded",iconDirection:_="left",icon:o,loading:n=!1,fixedDarkMode:f,type:r="button",children:a,disabled:d,className:j,onClick:y,...h})=>{const{isDelayButton:i,isDelaying:g}=k({delay:t,disabled:d}),u=(()=>o&&a?"both":o?"icon":"text")(),v=d||i,{isDarkMode:b}=z(f),{leftLoadingSpinner:$,rightLoadingSpinner:w,iconLoadingSpinner:x}=D({loading:n,childrenType:u,iconDirection:_});return s.jsxs("button",{...h,onClick:n?void 0:y,type:n&&r==="submit"?"button":r,className:q(`${i?e["delayed-button"]:e.button} ${e[`shape-${m}`]} ${e[`size-${p}`]} ${e[`icon-direction-${_}`]} ${e[`children-type-${u}`]} ${e[l]} ${b&&l==="clear"&&e.dark} ${j}`),disabled:v,children:[t&&i?s.jsx("div",{className:`${e["delay-bar"]} ${g&&e.delaying}`,style:{transition:`transform ${t/1e3}s linear`}}):null,$,a&&s.jsx("div",{className:e["button-content"],children:a}),o?x??s.jsx("div",{className:`${e["button-content"]} ${e.icon}`,children:o}):null,w]})};try{c.displayName="Button",c.__docgenInfo={description:"",displayName:"Button",props:{delay:{defaultValue:null,description:"",name:"delay",required:!1,type:{name:"number"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},theme:{defaultValue:{value:"primary"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"clear"'},{value:'"ghost"'},{value:'"unset"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},iconDirection:{defaultValue:{value:"left"},description:"",name:"iconDirection",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},shape:{defaultValue:{value:"rounded"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"sharp-corner"'},{value:'"rounded"'},{value:'"pill"'}]}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},fixedDarkMode:{defaultValue:null,description:"",name:"fixedDarkMode",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}}}}}catch{}export{c as B};
//# sourceMappingURL=index-9cde3c27.js.map
