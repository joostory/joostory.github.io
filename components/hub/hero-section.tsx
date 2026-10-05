import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { PROFILE } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section id="about" className="pt-12 pb-10 sm:pt-24 sm:pb-16">
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
          <div className="avatar shrink-0 self-start">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden">
              <Image
                src={PROFILE.avatar}
                alt={PROFILE.name}
                width={144}
                height={144}
                priority
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {PROFILE.name}
              </h1>
              <span className="badge badge-primary badge-outline text-xs font-mono">
                {PROFILE.title}
              </span>
            </div>

            <p className="text-base sm:text-lg text-base-content/85 font-medium mb-3">
              {PROFILE.shortDescription}
            </p>

            <p className="text-sm sm:text-base text-base-content/70 leading-relaxed mb-5 max-w-xl">
              {PROFILE.bio}
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs sm:text-sm text-base-content/60">
              <Link
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                <EnvelopeIcon className="w-4 h-4" />
                <span>{PROFILE.email}</span>
              </Link>
              <div className="flex items-center gap-1.5">
                <MapPinIcon className="w-4 h-4" />
                <span>{PROFILE.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
