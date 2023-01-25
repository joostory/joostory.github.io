import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostHeader from '@/components/post/post-header'
import PostBody from '@/components/post/post-body'
import MetaPost from '@/components/post/meta-post'
import PostComment from '@/components/post/post-comment'
import ContentBody from '@/components/layout/content-body'
import { OgImage, Post } from '@/lib/api'

type PostViewProps = {
  title: string
  excerpt: string
  date: string 
  tags: string[]
  content: string
  ogImage?: OgImage
}

export default function PostView({
  title, content, tags, excerpt, ogImage, date
}: PostViewProps) {
  const router = useRouter()
  if (!router.isFallback && !title) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <MetaPost
        title={title}
        summary={excerpt}
        ogImage={ogImage!!}
      />

      <PostHeader
        title={title}
        date={date}
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
