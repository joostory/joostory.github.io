import { ReactNode } from "react"

type PostTitleProps = {
  children: ReactNode
}

export default function PostTitle({ children }: PostTitleProps) {
  return (
    <h1 className="font-bold tracking-tighter leading-tight mb-6 text-center text-3xl">
      {children}
    </h1>
  )
}
