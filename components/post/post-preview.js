import Image from 'next/image'
import DateFormatter from '../common/date-formatter'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <div>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a className='group flex space-x-5'>
          <div className='flex-1'>
            <strong className="group-hover:text-yellow-600 text-xl leading-8 text-slate-300 block">{title}</strong>
            <p className="text-md leading-relaxed text-slate-400">{excerpt}</p>
          </div>
          
          {coverImage &&
            <div className="w-32">
              <Image
                src={coverImage}
                alt={`Cover Image for ${title}`}
                layout="responsive"
                width={'100vw'}
                height={'100vh'}
              />
            </div>
          }
        </a>
      </Link>
      <div className="text-xs mt-4">
        <em className='text-slate-500'>
          <DateFormatter dateString={date} />
        </em>
      </div>
    </div>
  )
}
