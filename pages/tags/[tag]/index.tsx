import ContentBody from "@/components/layout/content-body";
import ContentHeader from "@/components/layout/content-header";
import Layout from "@/components/layout/layout";
import MetaIndex from "@/components/layout/meta-index";
import MoreStories from "@/components/post/more-stories";
import { getAllPosts, getAllTags, Post } from "@/lib/api";


export async function getStaticProps({ params }: any) {
  const tag = params.tag
  const allPosts = getAllPosts()
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

type TagPostListProps = {
  tag: string,
  posts: Post[]
}

export default function TagPostList({ tag, posts }: TagPostListProps) {
  return (
    <>
      <Layout>
        <MetaIndex />
        <ContentHeader>
          <div className="flex justify-center items-center">
            <h1 className="text-3xl font-bold">Tags: {tag} ({posts.length})</h1>
          </div>
        </ContentHeader>

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
