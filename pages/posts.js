import MoreStories from '@/components/post/more-stories'
import Layout from '@/components/layout/layout'
import { getAllPosts } from '@/lib/api'
import ProfileSummary from '@/components/profile/profile-summary'
import MetaIndex from '@/components/layout/meta-index'

export async function getStaticProps() {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'tags',
    'author',
    'coverImage',
    'excerpt',
  ])

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

        <div className='max-w-3xl mx-auto mt-6 mb-16'>
          {posts.length > 0 &&
            <MoreStories posts={posts} />
          }
        </div>
      </Layout>
    </>
  )
}
