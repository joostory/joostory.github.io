import MoreStories from '../components/post/more-stories'
import Layout from '../components/layout/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import ProfileSummary from '../components/profile/profile-summary'

export default function Index({ allPosts }) {
  const morePosts = allPosts
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>

        <div className='pt-24 pb-20 border-b-[1px]'>
          <ProfileSummary />
        </div>

        <div className='max-w-3xl mx-auto mt-6 mb-16'>
          {morePosts.length > 0 &&
            <MoreStories posts={morePosts} />
          }
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
