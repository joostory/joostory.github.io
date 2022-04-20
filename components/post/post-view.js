import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostHeader from './post-header'
import PostBody from './post-body'

export default function PostView({
  title, content, summary, ogImage, coverImage, date
}) {
  const router = useRouter()
  if (!router.isFallback && !title) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={summary} />
        <meta property="og:image" content={ogImage} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={summary} />
        <meta property="twitter:image" content={ogImage} />
      </Head>
      <div className=''>
        <PostHeader
          title={title}
          date={date}
          coverImage={coverImage}
          author={({
            name: 'Joo'
          })}
        />

        <PostBody
          content={content}
        />
      </div>
    </>
  )
}
