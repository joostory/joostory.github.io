import Link from 'next/link'
import DateFormatter from '../common/date-formatter'
import PostTitle from './post-title'

export default function PostHeader({ title, date, tags }) {
  return (
    <div className='pt-40 pb-36 px-20 border-b-[1px] relative'>
      <PostTitle>{title}</PostTitle>
      <div className="flex justify-center">
        <em className="text-sm">
          <DateFormatter dateString={date} />
        </em>
      </div>
      <div className='flex justify-center space-x-2'>
        {tags.map(tag =>
          <Link as={`/tags/${tag}`} href='/tags/[tag]'>
            <a className='group'>
              <span key={tag} className='text-xs text-slate-500 group-hover:text-yellow-400'>{tag}</span>
            </a>
          </Link>
        )}
      </div>
    </div>
  )
}
