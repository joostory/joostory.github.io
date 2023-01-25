import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

type CoverImageProps = {
  title: string
  src: string
  slug: string
  height: number
  width: number
}

export default function CoverImage({ title, src, slug, height, width }: CoverImageProps) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm', {
        'hover:shadow-md transition-shadow duration-200': slug,
      })}
      layout="responsive"
      width={width}
      height={height}
    />
  )
  return (
    <div className="">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
