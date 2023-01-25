import { Post } from '@/lib/api'
import PostPreview from './post-preview'

type MoreStoriesProps = {
  posts: Post[]
}

export default function MoreStories({ posts }: MoreStoriesProps) {
  return (
    <section>
      <div>
        {posts.map(post =>
          <div className='py-6' key={post.slug}>
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </div>
        )}
      </div>
    </section>
  )
}
