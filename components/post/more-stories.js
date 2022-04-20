import PostPreview from './post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="divide-y">
        {posts.map(post =>
          <div className='py-6' key={post.slug}>
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </div>
        )}
      </div>
    </section>
  )
}
