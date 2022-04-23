import Head from 'next/head'
import { SITE_NAME, OG_IMAGE_URL, PROFILE_DESCRIPTION } from '../../lib/constants'

export default function MetaIndex() {
  return (
    <Head>
      <title>{SITE_NAME}</title>
      <meta name="description" content={PROFILE_DESCRIPTION} />
      
      <meta property="og:type" content="website" />
      <meta property="og:title" content={SITE_NAME} />
      <meta property="og:description" content={PROFILE_DESCRIPTION} />
      <meta property="og:image" content={OG_IMAGE_URL} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={SITE_NAME} />
      <meta name="twitter:description" content={PROFILE_DESCRIPTION} />
      <meta property="twitter:image" content={OG_IMAGE_URL} />
    </Head>
  )
}
