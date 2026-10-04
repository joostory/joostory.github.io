import Link from 'next/link'
import { CAREER_HISTORY } from '@/lib/constants'
import { BriefcaseIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export default function CareerSection() {
  return (
    <section id="career" className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Career</h2>
            <p className="text-xs sm:text-sm text-base-content/60 mt-1">
              지금까지 일해온 경험입니다.
            </p>
          </div>
          <Link
            href="https://www.linkedin.com/in/hyeokjoo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-primary hover:underline flex items-center gap-1 font-medium self-start sm:self-auto"
          >
            LinkedIn에서 이력 보기
            <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-6">
          {CAREER_HISTORY.map((item, idx) => (
            <div key={idx} className="card bg-base-100 border border-base-300">
              <div className="card-body p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3.5 border-b border-base-200">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-primary/15 text-primary">
                      <BriefcaseIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold">{item.company}</h3>
                      <p className="text-xs text-base-content/60 font-mono">{item.role}</p>
                    </div>
                  </div>
                  <span className="badge badge-neutral text-xs font-mono self-start sm:self-auto mt-1 sm:mt-0">
                    {item.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-base-content/80 mt-3.5 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-5">
                  <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-base-content/50 mb-2.5">
                    주요 서비스 & 업무
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {item.services.map((service, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3.5 rounded-xl bg-base-200/40 border border-base-200 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-baseline justify-between gap-1 mb-1">
                            <span className="font-medium text-xs sm:text-sm text-base-content">
                              {service.name}
                            </span>
                            {service.period && (
                              <span className="text-[11px] font-mono text-base-content/50 shrink-0">
                                {service.period}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-base-content/70 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
