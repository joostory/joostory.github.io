import DateFormatter from '@/components/common/date-formatter'
import PostTitle from '@/components/post/post-title'

type PostHeaderProps = {
  title: string
  date: string
}

export default function PostHeader({ title, date }: PostHeaderProps) {
  return (
    <div className='pt-40 pb-32 px-20 relative'>
      <PostTitle>{title}</PostTitle>
      <div className="flex justify-center">
        <em className="text-sm text-slate-500">
          <DateFormatter dateString={date} />
        </em>
      </div>
    </div>
  )
}
