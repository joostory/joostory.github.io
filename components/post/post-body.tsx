import Link from "next/link"
import PostContent from "@/components/post/post-content"

type PostBodyProps = {
  content: string,
  tags: string[]
}

export default function PostBody({ content, tags }: PostBodyProps) {
  return (
    <div className='pt-2 pb-10'>
      <PostContent content={content} />

      <div className='flex items-center space-x-2 mt-10'>
        {tags.map(tag =>
          <Link as={`/tags/${tag}`} href='/tags/[tag]' key={tag} className='group'>
            <span key={tag} className='text-sm text-slate-500 group-hover:text-yellow-400'>#{tag}</span>
          </Link>
        )}
      </div>
    </div>
  )
}
