import Head from 'next/head'
import { SITE_NAME, OG_IMAGE_URL, PROFILE, SITE_URL } from '@/lib/constants'

export default function MetaIndex() {
  const description = `${PROFILE.name} - ${PROFILE.shortDescription}`

  return (
    <Head>
      <title>{SITE_NAME}</title>
      <meta name="description" content={description} />
      <meta name="author" content={PROFILE.name} />
      <link rel="canonical" href={SITE_URL} />
      
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:title" content={SITE_NAME} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE_URL} />
      
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@JooStory" />
      <meta name="twitter:title" content={SITE_NAME} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE_URL} />
    </Head>
  )
}
