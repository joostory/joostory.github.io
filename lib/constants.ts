export const SITE_NAME = 'JooStory'
export const SITE_URL = 'https://joostory.net'
export const OG_IMAGE_URL = 'https://joostory.net/assets/og.png'

export const PROFILE = {
  name: 'Joo',
  title: 'Software Engineer',
  avatar: '/assets/profile.jpg',
  email: 'joo@joostory.net',
  location: 'Seoul, South Korea',
  bio: '소프트웨어 개발을 하고 있습니다. 카카오에서 오픈채팅, 블로그, 웹메일 등의 서비스를 개발해 왔습니다. 주로 백엔드와 웹 기술을 다루며, 안정적인 서비스 운영과 좋은 개발 환경에 관심이 있습니다.',
  shortDescription: '소프트웨어 개발자 Joo입니다.',
}

export const CHANNELS = [
  {
    title: "Blog",
    name: "blog.joostory.net",
    url: 'https://blog.joostory.net',
    description: '개발 경험과 생각, 일상을 기록하는 블로그',
    badge: 'Blog',
  },
  {
    title: 'LinkedIn',
    name: 'linkedin.com/in/hyeokjoo',
    url: 'https://www.linkedin.com/in/hyeokjoo/',
    description: '이력 및 프로필',
    badge: 'Career',
  },
  {
    title: 'GitHub',
    name: 'github.com/joostory',
    url: 'https://github.com/joostory',
    description: '개인 프로젝트와 코드 저장소',
    badge: 'Code',
  },
  {
    title: 'X',
    name: '@JooStory',
    url: 'https://x.com/JooStory',
    description: '짧은 생각과 테크 소식 메모',
    badge: 'Social',
  },
]

export const CAREER_HISTORY = [
  {
    company: '카카오 (Kakao Corp.)',
    role: 'Software Engineer',
    period: '2008.01 ~ 현재',
    description: '오픈채팅, 구독, 블로그, 웹메일 등 다양한 서비스의 백엔드 시스템을 개발하고 운영해 왔습니다.',
    services: [
      {
        name: '오픈채팅 / 오픈링크',
        period: '2023.01 ~ 현재',
        description: '오픈채팅 및 오픈링크 백엔드 개발 및 운영',
      },
      {
        name: 'My구독 & 신규 서비스',
        period: '2019.10 ~ 2022.12',
        description: 'My구독 개발, 북미 대상 신규 서비스 WARPNOW 및 MM 서비스 개발',
      },
      {
        name: '티스토리 & 브런치스토리',
        period: '2014.10 ~ 2019.10',
        description: '블로그 및 콘텐츠 퍼블리싱 플랫폼 개발, OpenAPI 연동',
      },
      {
        name: 'Daum 한메일 & 캘린더',
        period: '2008.01 ~ 2014.09',
        description: '한메일 Back-end 운영/개발, 다음캘린더 및 메일 앱 개발',
      },
    ],
  },
]

export const FEATURED_PROJECTS = [
  {
    name: 'Tistory Editor',
    description: '티스토리 API를 사용해 글을 작성하고 관리하는 에디터',
    url: 'https://github.com/joostory/tistory-editor',
    tech: ['TypeScript', 'React'],
  },
  {
    name: 'Habit Trophy',
    description: '30일 동안 작은 습관을 만들어갈 수 있도록 돕는 PWA 앱',
    url: 'https://github.com/joostory/habit-trophy',
    tech: ['JavaScript', 'PWA'],
  },
  {
    name: 'Holy Bible',
    description: '가볍게 읽고 찾아볼 수 있는 웹 성경',
    url: 'https://github.com/joostory/holybible',
    tech: ['TypeScript', 'Next.js'],
  },
  {
    name: 'Boardgame Helper',
    description: '보드게임 점수 계산과 진행을 돕는 유틸리티',
    url: 'https://github.com/joostory/boardgame',
    tech: ['TypeScript'],
  },
]

export const TECH_STACK = [
  {
    category: 'Backend',
    items: ['Java', 'Kotlin', 'Spring Boot', 'Node.js', 'PHP'],
  },
  {
    category: 'Databases & Infra',
    items: ['MySQL', 'Redis', 'Linux', 'Docker'],
  },
  {
    category: 'Frontend & Others',
    items: ['JavaScript', 'TypeScript', 'React', 'Electron', 'Android'],
  },
]
