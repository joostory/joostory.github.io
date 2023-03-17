---
title: 'React Router에서 NEXT.js로'
excerpt: '성경 웹버전을 새롭게 개편했다. 이전에도 github pages를 사용했지만 react-router의 HashRouter대신 NEXT.js가 그 역할을 하도록 했다.'
date: '2023-01-13T21:00:00+0900'
tags: ['nextjs']
author:
  name: Joo
  picture: '/assets/profile.jpg'
ogImage:
  url: 'https://joostory.net/assets/posts/react-router-to-nextjs/cover.png'
---

나의 애증의 프로젝트 성경앱을 또 고쳤다. 이번에는 웹버전에서 사용했던 React Router를 대신해 NEXT.js를 사용하는 것이다.

## Before

변경 전 성경앱은 react + redux로 구성되어 있었다. 예전 스타일로 작성되어 있긴하지만 동작하는데에는 문제는 없었다.

```javascript
const middleware = [createLogger()]
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

createRoot(document.getElementById('root'))
  .render(
    <Provider store={store}>
      <App />
    </Provider>
  )
```

라우팅은 react-router의 HashRouter를 사용했다. `#/:vcode/:bcode/:cnum` 처럼 브라우저 해시를 파싱해서 보여줄 페이지를 판단한다. React 만으로는 정적 페이지 생산없이 구현할 수 없으니 어쩔 수 없는 선택이었다.

```jsx
<HashRouter>
  <div className={classnames('main', {'dark': false})}>
    <header>
      <h1 className="title"><Link to="/">Holybible</Link></h1>
      <ul className="menu">
        <li><a href="https://play.google.com/store/apps/details?id=net.joostory.holybible">Download</a></li>
        <li><a href="https://oh-my-bible.tistory.com">About</a></li>
      </ul>
    </header>
    <section>
      <Routes>
        <Route path="/" exact={true} element={<VersionList />} />
        <Route path="/:vcode" exact={true} element={<BookList />} />
        <Route path="/:vcode/:bcode/*" element={<ChapterList />} />
      </Routes>
    </section>
    <article>
      <Routes>
        <Route path="/:vcode/:bcode/:chapter" element={<VerseList />} />
        <Route path="*" element={<Today />} />
      </Routes>
    </article>
  </div>
</HashRouter>
```

사용할 데이터는 public 폴더에 넣어두고 필요할때마다 axios로 요청해서 가져오도록 했다. 역시 정적 페이지 생산없이 구현할 수 있는 가장 편리한 방법이었다.

```javascript
export function fetchHolybible(store) {
	axios.get('/bible.json')
		.then(r => store.dispatch(receiveHolybible(r.data)))
		.catch(e => console.log(e))
}

export default function App() {
  const versions = useSelector(state => state.holybible.versions)
  // ...
}
```

이대로 유지해도 별 문제없지만 나중을 위해서라도 좀 더 최신의 기술을 사용해서 지속가능하도록 유지하고 싶었다. 나중에 '아니, 이런 걸 썼었네' 하며 한숨쉬며 고치고 싶지 않다는 말이다.


## After

내가 지금 쓸 수 있는 가장 최신의 기술이라는 것은 NEXT.js다. 원하면 지금처럼 동적으로 페이지를 만들어낼 수도 있고 정적인 페이지를 만들어낼 수도 있다. 데이터 관리는 redux를 그대로 두어도 괜찮겠지만 그래도 좀 더 사용하기 편한 recoil을 적용해보기로 했다. 또, 별로 쓰고 싶지 않았는데 어쩔 수 없이 대세가 되어가는 typescript도 써보기로 했다. 이건 내가 쓸 수 있는 건 아니지만 그래도 어렵지 않게 학습이 가능한 것으로 보았다. tailwind, daisyui도 이 참에 더 확실히 익혀보기로 했다. 뭘 어떻게 할지는 정했으니 적용만 해보면 된다.


### NEXT.js, Typescript

가장 먼저 할일은 webpack, react로 구성된 빌드를 NEXT.js로 전환하는 것이었다. 왠지 싫어서 CRA로 사용하지 않고 직접 `webpack.config.js`를 한땀한땀 만들었었다.

```javascript
// webpack.config.js
const config = {
  entry: {
    'holybible': './src/index.js'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].min.js'
  }
}
```

요즘 CRA도 마찬가지지만 NEXT.js는 크게 설정할 것이 없다. 기본적으로 정해진 `components`, `pages`, `public`과 같은 폴더 구조에 적절한 파일을 위치해주면 된다. 내가 해준 것은 기본 root를 `src`로 사용하기 위해서 `tsconfig.js`에 `"baseUrl":"src"` 를 추가해준 것 뿐이다. 나머지는 create next app을 통해 만들어진 것을 그대로 두었다.

```json
{
  "compilerOptions": {
    "baseUrl": "src",
  }
}
```
react-router의 HashRouter가 하던 일은 폴더구조를 통해 해결한다. NEXT.js에서 폴더를 `[version]`과 같은 형태로 만드는 것으로 그 하위의 `index.tsx`에서 `params.version`과 같이 바인딩된 값을 가져올 수 있다.

```
/pages
├─ /_app.tsx
├─ /_document.tsx
├─ /index.tsx
├─ /[version]
├─ └ index.tsx
├─ /[version]/[bible]
├─ └ index.tsx
├─ /[version]/[bible]/[chapter]
│  └ index.tsx
```

여기까지만 하면 이전에 사용하던 코드를 그대로 재사용해도 문제없이 동작한다. 그런데 나는 typescript를 제대로 사용하기로 했기 때문에 언제까지고 typescript를 js 스타일로 사용할 수는 없다. 그래서 type이 없다고 아우성치는 코드에 type을 지정해주기 시작했다.


```typescript
// domain/bible.ts
export interface Version {
  name: string,
  vcode: string
}

export interface Bible {
  bcode: number,
  chapterCount: number,
  name: string,
  type: string,
  vcode: string
}

export interface Verse {
  vcode: string,
  bcode: number,
  cnum: number,
  vnum: number,
  content: string
}

// components/VersionList.tsx
type VersionListProps = {
  versions: Array<Version>
}

export default function VersionList({versions}: VersionListProps) {
  return (
    <ul className="menu p-4">
      {versions.map(v =>
        <li key={v.name}>
          <Link href={`/${v.vcode}`}>{v.name}</Link>
        </li>
      )}
    </ul>
  )
}
```

typescript를 잘 모르니 일단은 이 정도로 하기로 했다. 나중에 복잡한 로직을 다루게 된다면 더 많은 경험을 쌓을 수 있겠지만 여기서는 이 정도밖에 수정할 곳이 없었다. 이렇게만 해도 vscode가 에러와 서제스트를 확실히 해줘서 아주 편했다. 일단 수정할때 오류가 미리 표시되는 점이 편한 것 같다. 물론 js만 사용할 때는 없던 type 코드가 생기긴했지만 그래도 간단한 앱이니까 그리 많다고 느껴지지는 않았다. 


### tailwindcss + daisyui

tailwindcss는 뭔가 bootstrap이 생각나는 방식이라 아직도 그리 좋아하지는 않지만 이거보다 좋은 것이 지금은 없는 것 같다. 아무래도 디자인 능력이 없는 자에게는 미리 만들어진 디자인을 사용할 수 있는 것이 최고인 것 같다. 내가 만든 어떤 것보다 tailwind와 daisyui가 기본 제공해주는 것이 세련되고 심플하고 예쁜 것 같다.

그래서 NEXT.js에 tailwind는 어떻게 적용하느냐? 너무나 간단하다. `postcss.config.js`, `tailwind.config.js`설정하고 기본 css만 import 해주면 된다. 이렇게 `daisyui`까지 설정이 끝난다.

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

// tailwind.css.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui')
  ],
}

// _app.tsx
import 'styles/globals.css'

export default function App() { /* ... */ }

// styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

여전히 class 를 나열하는 건 맘에 안들지만 그래도 별거 하지도 않았는데도 Layout을 비롯해 대부분의 디자인이 끝나버리는 점은 편하다. `md:`와 같은 prefix로 반응형 디자인도 모두 처리해주니 불평이 쏙 들어간다.

```typescript
function Content({ children }: ContentProps) {
  return (
    <div className="absolute inset-0 md:left-60 overflow-y-auto font-serif">
      { children }
    </div>
  )
}

function Sidebar({ children }: SidebarProps) {
  return (
    <div className="absolute inset-0 md:right-auto md:w-60 overflow-y-auto bg-base-200 bg-content">
      { children }
    </div>
  )
}

function Layout({ children }: LayoutProps) {
  const theme = useRecoilValue(themeState)

  return (
    <div className='h-screen flex flex-col' data-theme={theme}>
      <Header />
      <div className='fixed top-16 bottom-0 left-0 right-0'>
        { children }
      </div>
    </div>
  )
}
```

### getStaticProps, getStaticPaths

redux -> recoil로의 전환은 물론 처음에는 했었다. 그런데 내가 잊고 있었던 것이 나는 이 모든 페이지를 정적페이지로 만들어야 한다. 그래서 `[version]`과 같은 바인딩을 사용하는 부분이 렌더링 코드에 들어가면 안된다. 모든 것은 `getStaticProps`를 통해서 만들어져서 component에 전달되고 component는 그저 전달된 값을 사용해야한다.

```typescript
export default function VersionPage() {
  const router = useRouter()
  const vcode: string = router.query.version? router.query.version.toString() : ""
  const versions: Version[] = useRecoilValue(bibleState)
  const version = versions.find(v => v.vcode == vcode)

  return (
    <>...</>
  )
}
```

`/GAE`와 같은 요청을 받아들이려면 정적 사이트는 `/GAE.html`와 같은 파일을 준비하고 있어야 한다. 무슨 `router.query`란 말인가? 이것은 next 서버를 사용할 때나 가능한 방법이다. 정적 페이지로 export하기 위해서는 다음과 같이 서버 사이드 처리가 완료되었다고 가정해야하고 이 서버 사이드처리는 `getStaticProps`가 빌드 단계에서 미리 수행해야한다. `version`뿐만 아니라 `BibleList`에서 사용할 `bibles`까지도 이 단계에서 다 가져와야만 한다.

```typescript
export async function getStaticProps({ params }: any) {
  const version = getVersion(params.version)

  return {
    props: {
      version: version,
      bibles: getBibles(version.vcode)
    }
  }
}

type VersionPageProps = {
  version: Version,
  bibles: Bible[]
}

export default function VersionPage({ version, bibles }: VersionPageProps) {
  return (
    <>...</>
  )
}
```

이런 식의 변경이 완료되자 더이상 recoil이 할 일이 없다. recoil이 할 일은 theme관리 뿐이다. 앞으로 브라우저에 값을 저장하던가 하는 등 뭔가 더 있을 수도 있겠지만 현재로서는 그렇다. 사실 지금은 하는 일이 없다고 봐도 무방하다.


## 마치며

![](/assets/posts/react-router-to-nextjs/holybible_01.jpeg)

언제까지고 이런 static page만 만들지는 않을 것이다. 최근 같이 작업했던 사내 FE 개발자가 NEXT.js로 웹서버를 만드는 것을 보았다. 이전에는 이들을 위해서 내가 서버를 만들어주어야 했다. 그런 걸 할 수 있다면 다른 것도 다 할 수 있겠다는 생각이 들었다. 인증처리만 해결된다면 굳이 별도의 서버없이 NEXT.js 만으로 어드민 서버를 만든다거나 웹서버를 구성하는 것이 가능할 거다. 물론 이미 그게 가능한지는 오래되었지만 내가 이제야 알았고 이제는 그것을 할 맘의 준비가 되었다는 뜻이다.

시간이 가면 갈수록 배워야하는 것이 점점 더 많아지는 것 같다. 예전에는 차근차근하다보면 언젠간 마스터가 될 수 있을거라 생각했는데 지금은 그 길이 점점 멀어지는 것만 같다. 이렇게라도 조금씩 조금씩 따라가는 수밖에... 그리고 이런 기술은 어디까지나 나의 사이드 기술이고 나는 메인 기술인 devops를 지향해야한다. 하고 싶은 것은 많은데 나에게 남은 시간은 점점 줄어가고 나는 또 게임이나 하고 영화나 보고 있다. (주절주절)
