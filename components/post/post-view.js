import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostHeader from './post-header'
import PostBody from './post-body'
import MetaPost from './meta-post'

export default function PostView({
  title, content, summary, ogImage, coverImage, date
}) {
  const router = useRouter()
  if (!router.isFallback && !title) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <MetaPost
        title={title}
        summary={summary}
        ogImage={ogImage}
      />

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
