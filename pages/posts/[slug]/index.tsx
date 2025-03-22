import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from '@/components/layout/layout'
import { getPostBySlug, getAllPosts, Post } from '@/lib/api'
import PostView from '@/components/post/post-view'


export async function getStaticProps({ params }: any) {
  const post = getPostBySlug(params.slug)

  return {
    props: {
      post: post
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

type PostPageProps = {
  post: Post
}

export default function PostPage({ post }: PostPageProps) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <PostView
        title={post.title}
        content={post.content}
        excerpt={post.excerpt}
        ogImage={post.ogImage}
        tags={post.tags}
        date={post.date}
      />
    </Layout>
  )
}
