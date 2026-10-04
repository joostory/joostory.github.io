import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { FEATURED_PROJECTS } from '@/lib/constants'

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-12 sm:py-16 bg-base-200/40 border-t border-base-300"
    >
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              Projects
            </h2>
            <p className="text-xs sm:text-sm text-base-content/60 mt-1">
              개인적으로 만들고 있는 프로젝트입니다.
            </p>
          </div>
          <Link
            href="https://github.com/joostory?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-primary hover:underline flex items-center gap-1 font-medium self-start sm:self-auto"
          >
            GitHub에서 더 보기
            <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {FEATURED_PROJECTS.map((project) => (
            <Link
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card bg-base-100 hover:bg-base-200/80 border border-base-300 transition-all duration-150 hover:border-primary/60 group flex flex-col justify-between"
            >
              <div className="card-body p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CodeBracketIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    <span className="font-bold text-sm sm:text-base group-hover:text-primary transition-colors">
                      {project.name}
                    </span>
                  </div>
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 text-base-content/40 group-hover:text-primary transition-colors" />
                </div>

                <p className="text-xs sm:text-sm text-base-content/70 mt-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-3.5 pt-2.5 border-t border-base-200">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="badge badge-xs sm:badge-sm badge-ghost text-[11px] font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
