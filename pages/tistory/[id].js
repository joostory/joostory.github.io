import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getTistoryPost, getTistoryPostIds } from '../../lib/tistory-api'
import PostView from '../../components/post/post-view'
import Layout from '../../components/layout/layout'

export default function TistoryPost({ post }) {
  const router = useRouter()
  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <Layout>
        <Head>
          <link rel="canonical" href={`https://blog.joostory.net/${post.id}`} />
        </Head>
        <PostView
          title={post.title}
          content={post.content}
          summary={post.summary}
          ogImage={post.image}
          date={post.date}
        />
      </Layout>
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = await getTistoryPost(params.id)

  return {
    props: {
      post: post
    }
  }
}

export async function getStaticPaths() {
  const ids = await getTistoryPostIds()

  return {
    paths: ids.map(id => ({
      params: {
        id: id
      }
    })),
    fallback: false
  }
}
