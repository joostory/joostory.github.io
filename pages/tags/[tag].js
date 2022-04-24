import ContentBody from "@/components/layout/content-body";
import ContentHeader from "@/components/layout/content-header";
import Layout from "@/components/layout/layout";
import MetaIndex from "@/components/layout/meta-index";
import MoreStories from "@/components/post/more-stories";
import { getAllPosts, getAllTags } from "@/lib/api";


export async function getStaticProps({ params }) {
  const tag = params.tag
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'tags',
    'author',
    'coverImage',
    'excerpt',
  ])

  const posts = allPosts.filter(post => post.tags.indexOf(tag) >= 0)

  return {
    props: { tag, posts }
  }
}

export async function getStaticPaths() {
  const tags = getAllTags()

  return {
    paths: tags.map((tag) => {
      return {
        params: {
          tag: tag.tag
        },
      }
    }),
    fallback: false,
  }
}

export default function TagPostList({ tag, posts }) {
  return (
    <>
      <Layout>
        <MetaIndex />
        <ContentHeader>
          <div className="flex justify-center items-center">
            <h1 className="text-3xl font-bold">Tags: {tag} ({posts.length})</h1>
          </div>
        </ContentHeader>

        <ContentBody>
          {posts.length > 0 &&
            <MoreStories posts={posts} />
          }
        </ContentBody>
      </Layout>
    </>
  )
}
