![header](https://capsule-render.vercel.app/api?type=rect&color=0:EEFF00,100:a82da8&fontColor=FFFFFF&height=100&section=header&text=Pastime%20UI&fontSize=40&fontAlign=50&fontAlignY=50)

![Node.js](https://img.shields.io/badge/Node-339933?style=flat-square&logo=Node.js&logoColor=white) ![Pnpm](https://img.shields.io/badge/Pnpm-F69220?style=flat-square&logo=pnpm&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) ![Typescript](https://img.shields.io/badge/Typescript-3178c6?style=flat-square&logo=typescript&logoColor=white) ![SCSS](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white) ![CSS_Modules](https://img.shields.io/badge/CSS%20Modules-000000?style=flat-square&logo=CSS%20Modules&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

> It is a React component library for toy projects.

## 📚 How to use

**Install package**

```bash
npm i @hyeokjaelee/pastime-ui
```

**Import style**

After installing the package, import the style file in your React based app.

패키지 설치 후 React 기반 앱에서 style 파일을 import 해줍니다.

```javascript
//ex: main.tsx (React), _app.tsx (Next.js)
import '@hyeokjaelee/pastime-ui/style.css';
```

## 🧩 Features

- Components that receive user input can render at the component level without affecting the external state value by using their internal state value.<br/><br/>
  사용자의 입력을 받는 컴포넌트들은 내부 상태값을 이용해 외부 상태값에 영향을 주지 않고 컴포넌트 단위의 렌더링이 가능합니다.

- Components that take user input support convenient HOCs and hooks like validationObserver and useValidation for intrinsic validation. Similarly, since these features do not affect external state values, re-rendering can be minimized.<br/><br/>
  사용자의 입력을 받는 컴포넌트들은 자체적으로 유효성 검사와 이를 확인할 수 있는 validationObserver, useValidation등의 편의성 HOC, hook을 지원합니다. 마찬가지로 해당 기능들은 외부 상태값에 영향을 주지 않기 때문에 재렌더링을 최소화 할 수 있습니다.

- It supports dark mode. By default, it follows the device value, and you can change it with the class value of the html tag.<br/><br/>다크모드를 지원합니다. 기본적으로 디바이스 값을 따르며 html 태그의 class값으로 변경할 수 있습니다.<br/><br/>
  ex: `<html lang="en" class="dark">` or `<html lang="en" class="light">`.

### [Storybook](https://hyeokjaelee.github.io/pastime-ui)

For more detailed usage, please check the Storybook.

그외 자세한 사용법은 스토리북을 확인해 주세요.

### [Github](https://github.com/HyeokjaeLee/pastime-ui)

![npm](https://img.shields.io/npm/dm/@hyeokjaelee/pastime-ui.svg?style=flat-square&logo=npm&logoColor=white)
