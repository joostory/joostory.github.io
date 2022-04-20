import DateFormatter from '../common/date-formatter'
import PostTitle from './post-title'

export default function PostHeader({ title, date }) {
  return (
    <div className='pt-40 pb-36 px-20 border-b-[1px] relative'>
      <PostTitle>{title}</PostTitle>
      <div className="flex justify-center">
        <em className="text-sm">
          <DateFormatter dateString={date} />
        </em>
      </div>
    </div>
  )
}
