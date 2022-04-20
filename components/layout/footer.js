import Container from './container'
import { EXAMPLE_PATH } from '../../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-accent-2 mt-6">
      <div className="py-4 flex flex-col items-center justify-center text-xs text-slate-500">
        <a href="https://twitter.com/@JooStory">@JooStory</a>
      </div>
    </footer>
  )
}
