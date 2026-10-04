import { TECH_STACK } from '@/lib/constants'

export default function TechStackSection() {
  return (
    <section id="skills" className="py-12 sm:py-16 border-t border-base-300">
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            Skills
          </h2>
          <p className="text-xs sm:text-sm text-base-content/60 mt-1">
            주로 사용해 온 기술입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TECH_STACK.map((group) => (
            <div
              key={group.category}
              className="p-4 sm:p-5 rounded-2xl bg-base-100 border border-base-300"
            >
              <h3 className="font-bold text-xs sm:text-sm tracking-wide text-primary mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 rounded text-xs font-medium bg-base-200/80 text-base-content/80 border border-base-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
