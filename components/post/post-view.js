import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostHeader from './post-header'
import PostBody from './post-body'
import MetaPost from './meta-post'
import PostComment from './post-comment'
import ContentBody from '../layout/content-body'

export default function PostView({
  title, content, tags, summary, ogImage, coverImage, date
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

      <PostHeader
        title={title}
        date={date}
        coverImage={coverImage}
        author={({
          name: 'Joo'
        })}
      />

      <div className='divider' />

      <ContentBody>
        <PostBody
          tags={tags}
          content={content}
        />

        <PostComment />
      </ContentBody>
    </>
  )
}
