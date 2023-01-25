import MoreStories from '@/components/post/more-stories'
import Layout from '@/components/layout/layout'
import { getAllPosts, Post } from '@/lib/api'
import MetaIndex from '@/components/layout/meta-index'
import ContentBody from '@/components/layout/content-body'
import IndexProfile from '@/components/profile/index-profile'

export async function getStaticProps() {
  const allPosts = getAllPosts()
  const posts = allPosts.slice(0, 10)
  return {
    props: { posts },
  }
}

type IndexProps = {
  posts: Post[]
}

export default function Index({ posts }: IndexProps) {
  return (
    <>
      <Layout>
        <MetaIndex />
        
        <IndexProfile />

        <div className='divider' />

        <ContentBody>
          {posts.length > 0 &&
            <MoreStories posts={posts} />
          }
        </ContentBody>
      </Layout>
    </>
  )
}
