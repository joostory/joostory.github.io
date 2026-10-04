import { PROFILE } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-10 px-5 text-center border-t border-base-300 bg-base-200/50">
      <p className="text-xs text-base-content/50 font-mono">
        © {currentYear} {PROFILE.name}. All rights reserved.
      </p>
    </footer>
  )
}
