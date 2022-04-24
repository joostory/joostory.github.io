import MoreStories from '@/components/post/more-stories'
import Layout from '@/components/layout/layout'
import { getAllPosts } from '@/lib/api'
import ProfileSummary from '@/components/profile/profile-summary'
import MetaIndex from '@/components/layout/meta-index'
import ContentBody from '@/components/layout/content-body'

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'tags',
    'author',
    'coverImage',
    'excerpt',
  ])

  const posts = allPosts.slice(0, 10)
  return {
    props: { posts },
  }
}

export default function Index({ posts }) {
  return (
    <>
      <Layout>
        <MetaIndex />
        <div className='pt-24 pb-20 border-b-[1px]'>
          <ProfileSummary />
        </div>

        <ContentBody>
          {posts.length > 0 &&
            <MoreStories posts={posts} />
          }
        </ContentBody>
      </Layout>
    </>
  )
}