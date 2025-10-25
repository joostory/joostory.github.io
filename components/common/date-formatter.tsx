import { parseISO, format } from 'date-fns'

type DateFormatterProps = {
  dateString: string
}

export default function DateFormatter({ dateString }: DateFormatterProps) {
  let dateStr = dateString
  try {
    const date = parseISO(dateString)
    dateStr = format(date, 'yyyy.MM.dd HH:mm')
  } catch (e) {
    console.error(e)
  }

  return <time dateTime={dateString}>{dateStr}</time>
}
