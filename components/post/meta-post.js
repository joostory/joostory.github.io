import Head from 'next/head'

export default function MetaPost({title, summary, ogImage}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={summary} />

      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={summary} />
      <meta property="og:image" content={ogImage.url} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={summary} />
      <meta property="twitter:image" content={ogImage.url} />
    </Head>
  )
}
