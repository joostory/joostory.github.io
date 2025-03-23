---
title: Create React App
excerpt: 'React앱을 만들려면 Create React App(CRA)을 사용해야했는데 이제 CRA는 사용할 수 없다. 이제 어떤 방법이 있는지 찾아보았다.'
date: '2025-03-23T16:00:00+0900'
tags: ['React']
author:
  name: Joo
  picture: '/assets/profile.jpg'
ogImage:
  url: 'https://joostory.net/assets/posts/hello-world/cover.png'
---

Create React App은 오랜동안


## React Router with Vite
React Router v7부터는 서버라우팅을 지원하는 것 같다. Vite와 React Router 공식문서를 봤을때 create-vite를 사용하는 것이 좀 더 편리한 방법으로 보인다.
create-vite를 사용하면 react-router까지 한번에 설치할 수 있다. 도중에 옵션을 선택할 수 있는데 이때 React Router를 선택하면 된다.

```shell
❯ npm create vite@latest vite-test-app
Need to install the following packages:
create-vite@6.3.1
Ok to proceed? (y) 


> npx
> create-vite vite-test-app

│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  React Router v7 ↗
Need to install the following packages:
create-react-router@7.4.0
Ok to proceed? (y) 


> npx
> create-react-router vite-test-app


         create-react-router v7.4.0
      ◼  Directory: Using vite-test-app as project directory

      ◼  Using default template See https://github.com/remix-run/react-router-templates for more
      ✔  Template copied

   git   Initialize a new git repository?
         Yes

  deps   Install dependencies with npm?
         Yes

      ✔  Dependencies installed

      ✔  Git initialized

  done   That's it!

         Enter your project directory using cd ./vite-test-app
         Check out README.md for development and deploy instructions.

         Join the community at https://rmx.as/discord

```

package.json를 보니 실제 실행은 react-router를 통해서 실행된다. 

```json
  "scripts": {
    "build": "react-router build",
    "dev": "react-router dev",
    "start": "react-router-serve ./build/server/index.js",
    "typecheck": "react-router typegen && tsc"
  },
```

구조는 nextjs와 유사하다. app/routes.ts 에 react router의 라우팅 설정이 있고 root.tsx는 layout을 나타낸다.
신기한 점은 Dockerfile도 만들어준다.

```
- app
  - routes
    - home.tsx
  - app.css
  - root.tsx
  - routes.ts
- public
- Dockerfile
- package.json
- react-router.config.ts
- tsconfig.json
- vite.config.ts
```

routing은 [Framework Mode의 Routing문서](https://reactrouter.com/start/framework/routing)를 참조해서 추가하면 된다.
처음엔 `/`를 표시하는 index만 추가되어 있는데 `/about` 페이지를 추가하려고 하면 다음과 같이 하면 된다.

```tsx
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
] satisfies RouteConfig;
```
