import Image from 'next/image'
import DateFormatter from '../common/date-formatter'
import Link from 'next/link'


type PostPreviewProps = {
  title: string
  coverImage?: string
  date: string
  excerpt: string
  slug: string
}

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: PostPreviewProps) {
  return (
    <div>
      <Link as={`/posts/${slug}`} href="/posts/[slug]" className='group flex space-x-5'>
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
              width={100}
              height={100}
            />
          </div>
        }
      </Link>
      <div className="text-xs mt-4">
        <em className='text-slate-500'>
          <DateFormatter dateString={date} />
        </em>
      </div>
    </div>
  )
}
