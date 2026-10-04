import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function ProfileRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/')
  }, [router])

  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0; url=/" />
      </Head>
      <div className="flex items-center justify-center min-h-screen text-sm text-base-content/60">
        홈으로 이동 중입니다...
      </div>
    </>
  )
}
