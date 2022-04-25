import Link from "next/link"

export default function PostBody({ content, tags }) {
  return (
    <div className='pt-10 pb-10 mx-auto'>
      <article
        dangerouslySetInnerHTML={{__html: content}}
        className='prose'
      />

      <div className='flex items-center space-x-2 mt-10'>
        {tags.map(tag =>
          <Link as={`/tags/${tag}`} href='/tags/[tag]' key={tag}>
            <a className='group'>
              <span key={tag} className='text-sm text-slate-500 group-hover:text-yellow-400'>#{tag}</span>
            </a>
          </Link>
        )}
      </div>
    </div>
  )
}
