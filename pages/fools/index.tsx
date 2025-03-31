import { Single_Day } from 'next/font/google'
import Head from 'next/head'

const font = Single_Day({
  weight: '400',
})

export default function FoolPage() {
  const title = "오픈채팅, 글로벌 열풍 속 사상 최대 실적 달성!"
  const description = `오늘 오픈채팅이 자사의 공식 블로그를 통해 2024년 연간 실적 보고서를 발표하며 놀라운 성과를 공개했습니다. 회사는 국내외 사용자 급증과 함께 사상 최대 매출을 기록했다고 전했습니다. 무엇보다도 올해 초, 오픈채팅은 글로벌 서비스 확장에 성공하며 현재 전 세계 50개국 이상에서 활발히 사용되고 있습니다.
회사는 이 과정에서 'AI 비서 통합 기능'을 도입해 사용자들이 실시간 번역, 자동 응답, 비서형 채팅 도우미 등을 활용할 수 있도록 지원했습니다. 이 기능은 해외 사용자들로부터 폭발적인 반응을 얻었으며, 특히 라틴 아메리카와 동유럽에서 급격한 성장을 기록하며 새로운 시장을 개척했다고 합니다.
오픈채팅 대표는 "이 모든 성과는 사용자들의 신뢰와 사랑 덕분입니다. 앞으로도 더욱 새롭고 혁신적인 서비스를 제공해 전 세계인의 마음을 사로잡겠습니다"라고 밝혔습니다.
한편, 업계에서는 "오픈채팅이 다음 분기 중 IPO를 준비 중"이라는 소문까지 돌며 큰 주목을 받고 있습니다.`
  const imageUrl = "/assets/fools/fools_og.png"

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="twitter:image" content={imageUrl} />
      </Head>
      <div className="flex flex-col items-center justify-center h-screen px-4 max-w-[640px] mx-auto">
        <img src="/assets/fools/fools.png" alt="Fool" className="rounded-xl" />

        <p className="text-4xl font-bold text-center mt-10 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text">
          <span className={font.className}>좋은 하루 되세요!</span>
        </p>
      </div>
    </>
  )
}
