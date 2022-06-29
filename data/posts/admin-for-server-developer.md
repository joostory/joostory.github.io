---
title: '서버개발자를 위한 운영툴 개발'
excerpt: '백엔드 개발자가 만드는 풀스택 서비스, 운영툴. 그동안 운영툴 개발을 하면서 고민했던 부분들에 대한 이야기를 나누어 보고자 합니다.'
date: '2022-06-30T10:00:00+0900'
tags: ['React', 'GraphQL', 'UX']
author:
  name: Joo
  picture: '/assets/profile.jpg'
ogImage:
  url: 'https://joostory.net/assets/posts/admin-for-server-developer/admin-for-server-developer.png'
---

(사내 테크톡에서 발표한 내용을 블로그에도 작성)

안녕하세요. 카카오 N TF에서 서버 개발을 담당하고 있는 Joo 입니다.  
저는 다음에서 한때 한메일 익스프레스였던 다음메일 개발을 시작으로 브런치, 티스토리, My구독을 거쳐 최근에는 N TF에서 새로운 서비스를 개발하고 있는데요. 서비스 개발을 10여년, 운영툴 개발도 10여년 한 것 같습니다.

“서버 개발자를 위한 운영툴 개발”이라는 주제로 그동안 운영툴 개발을 하면서 고민했던 부분들에 대한 이야기를 나누어 보고자 합니다.


## 운영툴 어떻게 만들고 계신가요?

몇달을 고생해서 드디어 서비스를 오픈합니다. 서비스를 오픈했다는 기쁨도 잠시, 바로 운영이슈가 쏟아지기 시작합니다. “공지사항 수정해주세요.” “배너 다른 이미지로 교체해주세요.” “OOO 통계 뽑아주실 수 있나요?”, “이 사용자 정보 확인해주세요.” 운영 이슈만 있는 것도 아닙니다. 미처 발견하지 못했던 자잘한 버그들도 수정해야하고 서비스 로직 수정이 바로 필요한 경우도 생기게 됩니다.

![](/assets/posts/admin-for-server-developer/admin-for-server-developer01.png)

이 때 잘 만든 운영툴이 있다면 수많은 운영이슈를 개발자가 직접 처리하지 않아도 됩니다. 운영자(보통은 기획자)도 운영이슈를 직접 처리할 수 있어 빠르게 해결할 수 있습니다. 운영툴은 운영-개발 사이의 커뮤니케이션 비용을 줄이는 데 큰 역할을 합니다. 운영 속도는 빨라지고, 개발자는 운영이슈를 직접 처리하지 않아도 되어 서비스 개선 이슈에 집중할 수 있습니다. 잘만들면 잘 만들수록 커뮤니케이션 비용은 낮아지고 개발자의 시간은 늘어납니다.

### 어떤 운영툴이 좋은 운영툴일까요?

먼저 서비스 기획단계에서 만들어진 운영툴 기획안의 요구사항을 충족해야합니다. 운영툴 기획안이 없다면 운영 요구사항을 파악하고 추가되는 요구사항을 충족하도록 해야합니다. 거기다 사용하기 편한 UX, UI를 가진다면 더 좋겠습니다.

이것은 마치 하나의 서비스를 만드는 것과 비슷합니다. 운영자를 위한 서비스를 개발하는 것입니다. 조금 너그러운 사용자를 위한 풀스택 개발자가 되었다는 생각으로 운영툴을 만든다면 좋은 운영툴이 만들어지리라 생각합니다. 여기서 말하는 풀스택은 기획, 디자인, 프론트엔드 개발, 백엔드 개발 모두를 포함합니다.

그럼 프론트엔드 개발, 백엔드 개발, 사용하기 편리한 UX를 만드는 과정으로 나눠 저의 경험을 토대로 이야기를 나눠보겠습니다.


## 프론트엔드

먼저 프론트엔드 프레임워크의 선택과 UI 디자인에 대해 이야기 해보려고 합니다. 운영툴을 잘 만들자고 했지만 운영툴에 많은 시간을 투자할 수는 없습니다. 최소한의 노력으로 최대의 효과를 얻는 방법을 찾아봐야합니다.

### 프론트엔드 프레임워크 선택

![](/assets/posts/admin-for-server-developer/admin-for-server-developer04.png)

운영툴 만들때 많이 사용하는 방법이 운영툴 서버를 mvc로 만드는 것입니다. 템플릿엔진을 통해서 값을 전달하고 jQuery로 브라우저에 표시된 UI를 조작하고 css로 UI를 디자인합니다. 여기서 주목해볼 점은 jQuery인데요. jQuery는 파편화된 브라우저 API를 추상화해서 제공하기 위해 만들어져 한때 프론트엔드 개발의 표준언어처럼 사용되었습니다.

![](/assets/posts/admin-for-server-developer/admin-for-server-developer05.png)
(https://gs.statcounter.com/browser-market-share/all/south-korea)

하지만 이제는 브라우저의 파편화는 거의 사라졌다고 할 정도로 다양한 브라우저가 표준화된 API를 지원하고 있습니다. 또한 대부분 webkit 엔진, 크롬을 베이스로 하고 있어서 거의 차이가 없다고 볼 수 있습니다. 파편화의 주범인 IE의 점유율이 1% 미만으로 떨어졌습니다. 더이상 jQuery를 사용할 필요가 없어졌습니다.

그럼 어떤 프론트엔드 프레임워크를 사용해야할까요? 사용하지 않아도 된다지만 그래도 편리한 jQuery? 아니면 브라우저가 지원하는 표준화된 Javascript를 사용할 수도 있겠죠. 이런 것은 어떨까요? UI를 컴포넌트 단위로 관리하는 [React](https://reactjs.org/), [Vuejs](https://vuejs.org/), [Angular](https://angularjs.org/), [Svelte](https://svelte.dev/)와 같은 프레임워크가 있습니다. 먼저 프론트엔드 프레임워크가 얼마나 사용되고 있는지 살펴봅시다.

![](/assets/posts/admin-for-server-developer/admin-for-server-developer06.png)
(https://www.npmtrends.com/react-vs-jquery-vs-vue-vs-@angular/core-vs-svelte)

jQuery가 아직도 사용되고 있긴하지만 React가 압도적으로 가장 많이 사용되고 있습니다. 이것을 근거로 저는 React를 선택했습니다. 가장 많이 사용된다는 것은 가장 많은 정보가 있다는 것이고 가장 많은 정보가 있다는 것은 문제가 생기면 도움을 얻기 쉽다는 것이기도 하기 때문입니다.

### React를 사용한 운영툴 개발환경

![](/assets/posts/admin-for-server-developer/admin-for-server-developer07.png)

그럼 React를 사용한 운영툴 서버 구성에 대해서 살펴보겠습니다. 먼저 운영툴 서버는 API만 제공하고 static 리소스를 제공하는 프론트엔드 서버에서 이 API를 사용하도록 구성합니다. 이런 구성을 쉽게 할 수 있도록 react는 create-react-app이라는 툴체인을 제공합니다. create-react-app으로 앱을 생성한 후에 start를 실행하면 3000포트로 node 서버가 react 앱을 실행합니다.

```shell
> brew install node # node 설치

> npx create-react-app admin-ui # ui앱 생성
> cd admin-ui
> npm run start # 개발환경 앱 실행
localhost:3000...
```

이 앱은 hot reload가 적용되어 있어서 코드를 수정하면 즉시 앱에 반영해줍니다. 운영툴 서버 API에 접근할 수 있도록 운영툴 서버에 CORS 설정만 적용해주면 됩니다.

이대로 운영툴 서버를 운영해도 물론 문제는 없겠지만 그래도 프로덕션으로 배포를 하는 방법도 알아보겠습니다.

![](/assets/posts/admin-for-server-developer/admin-for-server-developer08.png)

```shell
> npm run build
> cp -R build ../src/main/resource/static
```

create-react-app에서 미리 만들어둔 빌드스크립트를 사용하면 되는데요. 빌드 스크립트를 수행하면 모든 static 리소스가 build 디렉토리에 만들어집니다. 이 디렉토리를 운영툴의 static 리소스에 그대로 복사하면 완료입니다.

```jsx
// index.js
import React from 'react'
import { createRoot } from 'react-dom
import App from './container/App'

const root = createRoot(document.getElementById('root'))
root.render(
	<App />
)

// /container/App.js
function App() {
	return (
		<div>Hello, World!</div>
	)
}
```

가장 귀찮고 어려운 개발환경설정이 완료되었습니다. 이제 React Component로 운영툴 UI를 만들어가면 됩니다.

### UI 디자인 프레임워크 선택

React가 디자인을 해결해주진 않습니다. 단지 UI를 컴포넌트 단위로 관리하기 편하게 만들어줄 뿐이죠. 이왕 만드는거 조금 더 보기 좋게 만들고 싶은데 디자이너도 없고 마크업 개발자도 없습니다. 결국 쉽게 사용할 수 있는 디자인 템플릿을 찾아야 한다는 결론에 이르렀습니다.

![](/assets/posts/admin-for-server-developer/admin-for-server-developer09.png)
(https://www.npmtrends.com/bootstrap-vs-tailwindcss-vs-@material-ui/core-vs-@mui/material-vs-antd)

프론트엔드 프레임워크와 달리 UI 디자인을 제공하는 프레임워크는 절대 강자가 존재하지 않았습니다. 물론 부트스트랩이 여전히 가장 많이 사용되긴 하지만 tailwind 의 사용자도 만만치 않습니다. 그래서 하나씩 살펴보면서 어떤 것을 사용하는게 좋을지 살펴보겠습니다.

![](/assets/posts/admin-for-server-developer/admin-for-server-developer10.png)

[bootstrap](https://getbootstrap.com/)은 반응형 웹디자인을 위한 css 추상화를 목표로 개발되었습니다. 컴포넌트 단위의 class를 제공해서 html에 class만 지정하면 원하는 디자인을 만들 수 있습니다. 주로 jQuery와 같이 사용되었지만 지금은 관계가 끝어지고 있고 React를 위한 버전도 존재합니다.

![](/assets/posts/admin-for-server-developer/admin-for-server-developer11.png)

다음은 [tailwind](https://tailwindcss.com/)입니다. tailwind는 모던 웹디자인을 위한 css 추상화를 제공합니다. bootstrap과 유사하게 html에 class를 지정하는 것으로 디자인을 만듭니다. 다른 점은 컴포넌트 단위의 디자인을 외부에 위임했다는 것입니다. tailwind는 css 단위의 기능만 제공합니다. 그리고 빌드 결과물에 bootstrap이 모든 css파일을 포함했다면 tailwind는 사용한 css만 포함해 결과물 용량을 절약할 수 있습니다.

![](/assets/posts/admin-for-server-developer/admin-for-server-developer12.png)

[Material Design](https://material.io/)에 대해서는 들어보셨을겁니다. 구글이 만든 디자인 가이드라인인데요. 대부분의 구글 프로덕트에 사용되고 있죠. [Material UI](https://mui.com/)는 이 디자인의 React 구현체입니다. 컴포넌트 단위로 디자인을 제공하고 이를 배치만 하면 됩니다. html과 css는 거의 몰라도 되고 Material UI에서 제공하는 방식을 알아야합니다.

![](/assets/posts/admin-for-server-developer/admin-for-server-developer13.png)

마지막으로 [Ant Design](https://ant.design/)에 대해서 알아보겠습니다. Ant Design은 알리페이를 만든 중국의 앤트그룹이 만든 디자인 가이드입니다. 같은 이름으로 React 구현체를 제공하고 있습니다. Material UI와 마찬가지로 컴포넌트 단위의 디자인을 제공합니다. 특이한 점은 디자인 뿐만 아니라 데이터 처리에 대한 인터페이스도 제공을 하고 있습니다. 테이블 컴포넌트에 데이터 소스만 제공하면 테이블 UI가 만들어지는 식입니다.

![](/assets/posts/admin-for-server-developer/admin-for-server-developer14.png)

이제 어떤 UI 프레임워크를 사용해야할지 선택을 해야합니다. bootstrap, tailwind는 직접 디자인을 해야합니다. Material UI는 styled component 방식이라 학습이 어렵습니다. 최소한의 노력으로 최대의 효과를 보고자 한다면 아무래도 디자인 템플릿을 제공하고 사용이 편리한 Ant Design이 좋다는 생각입니다. 물론 서비스 프론트엔드 개발을 한다면 tailwind가 더 좋지 않을까 하는 생각이 있습니다.

### And Design

Ant Design의 사용에 대해 간략히 알아보겠습니다.

```shell
> npm i antd @ant-design/icons
```

And Design을 사용하려면 antd와 icons 모듈을 설치합니다. 이제 간단한 UI를 만들어보겠습니다.

![](/assets/posts/admin-for-server-developer/admin-for-server-developer15.png)

```jsx
export default function AdminLayout({children}) {
  return (
    <Layout>
      <Layout.Header>
        <div style={{ color:'#fff' }}>
          운영툴
        </div>
      </Layout.Header>
      <Layout>
        <Layout.Sider>
          <AdminSideMenus />
        </Layout.Sider>
        <Layout>
          <Layout.Content style={{ margin: '24px 16px 0' }}>
            {children}
          </Layout.Content>
          <Layout.Footer style={{ textAlign:'center'}}>
            N TF
          </Layout.Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}
```

먼저 레이아웃을 만들어보았는데요. 운영툴에서 흔히 사용하게 되는 GNB, LNB, 컨텐츠, 푸터가 있는 레이아웃을 Layout이라는 컴포넌트로 제공합니다.

```jsx
const ADMIN_MENU = [
  {
    key: 'members-group',
    icon: <UserOutlined />,
    label: '회원',
    children: [
      {
        key: '/members',
        label: <NavLink to={"/members"}>회원관리</NavLink>
      }
    ]
  }
]

export default function AdminSideMenus() {
  const location = useLocation()
  const [selectedKey, setSelectedKey] = useState("/")

  useEffect(() => {
    function handleLocationChange(pathname) {
      let names = pathname.split("/")
      setSelectedKey((names != null) ? `/${names[1]}` : '/')
    }

    handleLocationChange(location.pathname)
  }, [location])

  return (
    <Menu
      mode='inline' selectedKeys={[selectedKey]}
      items={ADMIN_MENU}
    />
  )
}
```

LNB의 메뉴도 Menu라는 컴포넌트에 메뉴 데이터와 선택된 메뉴 키를 넘겨주는 것만으로 만들 수 있습니다.

```jsx
function MemberList() {
  const [members, setMembers] = useState([])
  useEffect(() => {
    graphQlQuery(`
      query {
        members {
          id
          name
        }
      }
    `)
      .then(data => setMembers(data.data.members))
  }, [])


  return (
    <Table dataSource={members} pagination={false} rowKey={'id'}>
      <Table.Column title={'id'} dataIndex={'id'} />
      <Table.Column title={'name'} dataIndex={'name'} />
    </Table>
  )
}
```

본문에 사용된 컴포넌트도 살펴보겠습니다. 서버로부터 회원 데이터를 요청해서 Table 컴포넌트에 그대로 넘겨주면 회원 테이블 표시도 완료됩니다. 간략하게 살펴봤지만 코드 몇줄로 그럴듯한 UI가 만들지는 것을 알 수 있습니다. 이런 쉬운 사용이 Ant Design의 장점입니다.

## API

프론트엔드와 디자인은 프레임워크의 도움을 받아 해결했으니 이제 API에 대해서 알아보겠습니다. API의 선택은 서버 개발자에게는 너무나 쉬운 선택입니다. REST API를 사용하고 Gateway나 프록시 설정을 하는 것입니다.

Rest API로 운영툴을 개발하는 과정은 UI 컴포넌트 개발, CRUD API 개발의 반복입니다. UI 에서 표시하는 값을 바꾸면 그에 따라 API도 바꾸고 연관된 값을 표시하기 위해서 API를 추가하고, 또 UI를 추가하고 또 API를 추가하고… 이렇게 계속 반복하다보니 문득 “누가 UI에 맞게 API 만들어주면 좋겠다"라는 생각이 들었습니다.

이 부분을 GraphQL이 해결해줄 수 있겠다는 생각이 들었습니다.

### GraphQL

![](/assets/posts/admin-for-server-developer/admin-for-server-developer16.png)

[GraphQL](https://graphql.org/)은 Facebook이 2012년 개발해서 2015년에 공개한 query language입니다. 주요한 특징으로 필요한 데이터만 받아올 수 있다는 점과 한번에 필요한 데이터를 모두 요철할 수 있다는 점이 있습니다.

GraphQL을 운영툴에 사용해보면 어떨까요? 운영툴 기능이 추가/변경되어도 API를 추가하거나 변경하지 않아도 될 수 있습니다. 그리고 하나의 엔드포인트로 데이터 제공이 가능해서 API Gateway를 위한 여러 설정을 하지 않아도 됩니다. 게다가 때마침 GraphQL Java를 베이스로 한 [Spring for GraphQL의 1.0 릴리즈가 개발](https://spring.io/projects/spring-graphql)되어 도입을 해보았습니다.

### GraphQL의 사용

```graphql
type Query {
    searchProfile(q: String, size: Int, pivot: Int): SearchProfileResponse
    profile(sid: String): Profile
    profileByUserName(userName: String): Profile
    room(roomSid: String): Room
    startedRooms(profileSid: String, from: DateTime, to: DateTime): [Room]
    profileBadges: [ProfileBadge]
    profileBadge(profileBadgeNid: Int): ProfileBadge
}

type Mutation {
    attachRelatedProfile(profileBadgeNid: Int, profileSid: String): Profile
    detachRelatedProfile(profileBadgeNid: Int, profileSid: String): Profile
}

scalar DateTime

type Profile {
    profileNid: Int
    profileSid: ID
    userNid: Int
    userName: String
    displayName: String
    badges: [ProfileBadge]
    createdAt: DateTime
}

type ProfileBadge {
    profileBadgeNid: Int
    description: String
    keyword: String
    createdAt: DateTime
    profiles: [Profile]
}
```

그럼 간단히 Spring for GraphQL로 API를 만든 과정을 소개하겠습니다. GraphQL API를 제공하기 위해서는 먼저 스키마 정의를 해야합니다. .graphqls 파일에 Query, Mutation, Scalar, Type을 정의합니다. Query, Mutation 타입은 하나만 존재해야하는데 모든 요청의 시작점이 됩니다.


```kotlin
@QueryMapping("profile")
fun profile(@Argument sid: String): InternalProfileResponse {
    val profile = profileService.getProfile(sid)
    val restriction = BanDTO(bannedUserChecker.isBannedUser(profile.userNid))
    val involvedList: List<Room> = profileScheduleService.getInvolvedRoomList(sid)
    val supportResponse = IntegrationSupportResponse(supportReceiverUtils.isSupportReceiver(profile), profile.supports)
    return InternalProfileResponse.from(profile, restriction, involvedList, supportResponse)
}
```

Query와 Mutation 타입은 각각 QueryMapping, MutationMapping으로 구현과 연결합니다.

```graphql
type Profile {
    profileNid: Int
    profileSid: ID

    badges: [ProfileBadge] # Profile Entity/DTO에는 존재하지 않는다.

    createdAt: DateTime
}
```

```kotlin
@SchemaMapping(typeName = "Profile", field = "badges")
fun profileBadgesByProfile(profile: InternalProfileResponse): List<ProfileBadge> {
    return profileBadgeService.getProfileBadgeListByProfileSid(profile.profileSid).badgeList
}
```

REST API와의 비교에서 보여드렸던 것 처럼 각 스키마를 연결할 수 있는 있는데요. SchemaMapping으로 Entity변경이나 DTO 추가없이 type을 연결할 수 있습니다. 클라이언트가 해당 필드를 요청하면 연결된 메소드가 호출되게 됩니다.

```graphql
scalar DateTime
```

```kotlin
private val scalarDateTimeFormat: DateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")
private val scalarDateTimeZoneId: ZoneId = ZoneId.of("Asia/Seoul")
 
private class DateTimeCoercing : Coercing<ZonedDateTime, String> {
    // ZonedDateTime -> String
    override fun serialize(value: Any): String? = when(value) {
        is ZonedDateTime -> value.format(scalarDateTimeFormat)
        else -> null
    }
 
    // String -> ZonedDateTime
    override fun parseValue(value: Any): ZonedDateTime = parseLiteral(value)
 
    override fun parseLiteral(value: Any): ZonedDateTime = when(value) {
        is StringValue -> LocalDateTime.parse(value.value, scalarDateTimeFormat).atZone(scalarDateTimeZoneId)
        else -> throw CoercingParseLiteralException("Unknown Literal")
    }
}
 
@Component
class CustomScalarConfigurer : RuntimeWiringConfigurer {
    override fun configure(builder: RuntimeWiring.Builder) {
        builder.scalar(GraphQLScalarType.newScalar() // scalar의 coercing등록
                        .name("DateTime")
                        .coercing(DateTimeCoercing()).build())
    }
}
```

GraphQL에서 기본 제공하는 Scalar type은 Int, Float, String, Boolean, ID입니다. ZonedDateTime과 같은 값을 사용하기 위해서는 custom scalar로 정의해서 사용했습니다.

![](/assets/posts/admin-for-server-developer/admin-for-server-developer17.png)

GraphQL API도 swagger와 같은 API 문서 및 테스트 도구가 있습니다. GraphiQL 이라는 GraphQL IDE 입니다. 쿼리 요청도 가능하고 schema 탐색기능은 문서화 기능으로도 활용할 수 있습니다.

### 이렇게 좋은 GraphQL 왜 서비스에 사용하지 않나요?

GraphQL이 클라이언트에서 사용하기 좋고 적용하기도 어렵지 않다면서도 서비스에서 사용하지 않은 이유가 있습니다. 먼저 한번도 써본 적이 없기 때문입니다. 어떻게 구성하면 더 효율적일지 성능은 어느 정도일지에 대한 경험치가 전혀 없습니다. 그리고 Spring for GraphQL도 이제 막 1.0 버전이 되었습니다.

운영툴에 먼저 적용한 이유가 바로 이 이유입니다. 서비스에 사용하기에는 조금 불안하지만 운영툴에 적용해보면서 익숙해지는 시간을 가져보는 것이죠.

## UX

기술적인 내용은 모두 다룬 것 같습니다. 이제 UX, 그러니까 편리한 운영툴을 만들기 위해서 노력했던 부분에 대한 경험을 나눠보려고 합니다.

운영툴은 필요하긴 하지만 우선순위는 낮습니다. 그래서 디자인이나 UX에 소홀해지기 쉽습니다. 조금 불편하더라도 운영을 할 수 있기는 하다고 넘어가게 됩니다. 그리고 회원관리는 테이블로, 대화방은 카드로, 일관되지 않은 방식으로 만들어 지기도 하죠. 만들때도 어떻게 만들어야 하나 고민을 하게 되고 사용하는 분들도 어떻게 사용해야하는지를 문의하기도 합니다.

그래서 좀 더 일관되고 유지보수가 쉬운 운영툴을 만들기 위해 UX 가이드를 만들었습니다.

![](/assets/posts/admin-for-server-developer/admin-for-server-developer02.png)

UX 가이드에는 이런 내용을 담았습니다. 공통 레이아웃인 GNB에는 어떤 내용이 담겨야하는지, LNB의 메뉴는 어떤 기준으로 그룹핑하는지, depth는 어디까지 허용할 것인지. 컨텐츠의 Body는 1단으로 할지, 2단으로 할지. 테이블로 표시할 내용이 있다면 페이징은 어떤 식으로 구성할 것인지 각 로우를 수정할때 수정버튼은 어디에 위치할 것인지와 같은 세부적인 내용을 담았습니다.

URL 설계에 대한 가이드도 작성했는데요. 퍼머링크 URL을 사용해 같은 URL이면 같은 화면이 보여야 한다는, 심지어 무엇인가가 선택되어 있었다면 그런 부분도 똑같이 보여야 한다고 정해두었습니다. 이 부분은 운영 데이터에 대한 URL로 커뮤니케이션을 할때 편리하게 사용했던 것 같습니다. 또, 메뉴 이름 기반으로 url segment depth를 설계해 url만 봐도 어떤 기능인지 짐작 가능하도록 가이드를 했습니다.

## 마치며

운영툴은 서비스 발전의 동력이라고 생각합니다. 개발자와 운영자 사이에서 커뮤니케이션을 돕고 서로의 시간을 절약해줍니다. 운영자를 위한 최고의 서비스를 개발한다는 마음으로 개발한다면 그만큼 서비스 운영에 큰 힘이 될거라 생각합니다.

서버 개발자에게는 운영툴을 개발하면서 얻는 또다른 좋은 점이 있습니다. 바로 프론트엔드 기술을 익힐 수 있는 기회가 된다는 것입니다. 대부분의 서비스는 프론트엔드 개발자 서버개발자로 나누어 었어서 프론트엔드 개발이 어떤 식으로 이뤄지는지 잘 알지 못할텐데요. 프론트엔드 개발을 통해서 더 나은 API 설계에 대해 생각해볼 기회도 될 것입니다. 그리고 GraphQL과 같은 잘 써보지 않았던 기술을 적용해 검증을 해볼 수 있다는 것도 아주 좋은 것 같습니다.

이렇게 그동안 운영툴 개발을 통해 경험했던 부분에 대한 생각을 프론트엔드, API, UX관점에서 정리해보았는데요. 이런 부분에서 고민을 했던 분들이 계시다면 도움이 되었으면 좋겠습니다.

감사합니다.
