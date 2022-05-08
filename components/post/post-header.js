import DateFormatter from '../common/date-formatter'
import PostTitle from './post-title'

export default function PostHeader({ title, date, tags }) {
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
