import { parseISO, format } from 'date-fns'

export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString)
  try {
    const dateStr = format(date, 'yyyy.MM.dd HH:mm')
    return <time dateTime={dateString}>{dateStr}</time>
  } catch (e) {
    console.error(e)
    return <time dateTime={dateString}>{dateString}</time>  
  }
}
