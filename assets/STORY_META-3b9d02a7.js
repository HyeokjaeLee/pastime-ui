import{j as e}from"./jsx-runtime-4ca860c5.js";const n={table:{disable:!0}},a={options:["small","medium","large"],control:"radio",description:`The size of the component.

컴포넌트의 크기`,table:{defaultValue:{summary:"medium"},type:{summary:'"small" | "medium" | "large"'}}},s={description:`The options to provide.

제공할 옵션`,control:"object"},l={control:"boolean",description:`Whether multiple selection is possible or not.

다중 선택이 가능한지 여부`,table:{defaultValue:{summary:!1}}},r={control:"boolean",description:`Whether it is possible to cancel by re-selecting the already selected option.

이미 선택된 옵션을 다시 선택하여 취소할 수 있는지 여부`},i={options:["bottom","top"],control:"radio",description:"The location where the `Option` component will be displayed.\n\n옵션 컴포넌트가 표시될 위치",table:{defaultValue:{summary:"bottom"}}},c=[t=>e.jsx("article",{className:"select-used-container",children:e.jsx(t,{})})],u={control:!1,description:"The `argument` of the function is the input value, and the return value becomes the error message. If `undefined` is returned, it is considered to have passed the validation.\n\n함수의 `argument`는 입력값이며, 리턴값이 에러 메시지가 됩니다. `undefined`를 리턴하면 검증을 통과한 것으로 간주됩니다."},d={description:`The placeholder of the component.

컴포넌트의 placeholder`,control:"text",table:{type:{summary:"string"}}},p={description:`Whether the input is disabled or not.

입력이 비활성화되었는지 여부`,options:["readonly",!0,!1],control:{type:"radio"},table:{type:{summary:'boolean | "readonly"'},defaultValue:{summary:!1}}},m={description:`The content to display on the right inside the component.

컴포넌트 내부 우측에 표시할 내용`,control:"text",table:{type:{summary:"React.ReactNode"}}},h={description:`The label text of the component.

컴포넌트의 라벨 텍스트`,control:"text",table:{type:{summary:"string"}}},b={description:`Whether to reverse the position of the children.

children의 위치를 반전시킬지 여부`,control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},y={description:`Whether the input is required or not.

입력이 필수인지 여부`,control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},f={description:`Whether the input is readonly or not.

입력이 읽기전용인지 여부`,control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},E={description:`Whether the component is opened or not.

컴포넌트가 열려있는지 여부`,control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},C={description:`
  #### Inner State usage example
  <pre>
    <code>
      const handleChange = (e) => {
        inputValues.value = e.value;
      };
    </code>
  </pre>
  #### preventInnerStateChange usage example
  <pre>
    <code>
      const handleChange = (e) => {
        e.preventInnerStateChange();
        setValue(e.value);
      };
    </code>
  </pre>
  Component's Change handler supports inner State, and you can deactivate the inner State by calling the preventInnerStateChange function.
  
  컴포넌트의 Change 핸들러는 내부 State를 지원하며, preventInnerStateChange 함수를 호출하여 내부 State를 비활성화할 수 있습니다.`,control:!1},L={description:`
  #### preventDefaultClose usage example
  <pre>
    <code>
      const handleClose = (e) => {
        e.preventDefaultClose();
        setOpened(false);
      };
    </code>
  </pre>
  Component's Close handler supports inner State, and you can deactivate the inner State by calling the preventDefaultClose function.
  
  컴포넌트의 Close 핸들러는 내부 State를 지원하며, preventDefaultClose 함수를 호출하여 내부 State를 비활성화할 수 있습니다.`,control:!1,table:{}},S={description:`Whether to allow background scrolling when the component is opened.

컴포넌트가 열려있을 때, 백그라운드 스크롤을 허용할지 여부`,control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},T={description:`The z-index of the component, including the background layer.

백그라운드 레이어를 포함한 컴포넌트의 z-index`,control:"number",table:{defaultValue:{summary:100},type:{summary:"number"}}},g={description:`Whether to display the close button.

닫기 버튼을 표시할지 여부`,table:{defaultValue:{summary:!1},type:{summary:"boolean"}}},D={description:`Whether to blur the background layer.

백그라운드 레이어를 흐리게 할지 여부`,table:{defaultValue:{summary:!0}}};export{n as H,b as I,T as M,E as O,a as S,u as V,p as a,m as b,d as c,C as d,h as e,f,y as g,s as h,i,r as j,l as k,c as l,L as m,D as n,S as o,g as p};
//# sourceMappingURL=STORY_META-3b9d02a7.js.map
