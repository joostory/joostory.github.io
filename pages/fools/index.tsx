import { Single_Day } from 'next/font/google'
import Head from 'next/head'

const font = Single_Day({
  weight: '400',
})

export default function FoolPage() {
  const title = "오픈채팅, 글로벌 열풍 속 사상 최대 실적 달성!"
  const description = `오픈채팅, 글로벌 열풍 속 사상 최대 실적 달성! 50개국 이상에서 성공적으로 사용되며, AI 통합 기능으로 폭발적 성장. IPO 소문까지 화제!`
  const imageUrl = "/assets/fools/fools_og.png"

  return (
    <>
      <Head>
        <title>{'만우절 농담'}</title>
        <meta name="description" content={'농담이지롱!'} />
        
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
          <span className={font.className}>오늘도 좋은 하루 되세요!</span>
        </p>
      </div>
    </>
  )
}
