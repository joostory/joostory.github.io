import { ReactNode } from "react"

type ContentHeaderProps = {
  children: ReactNode
}


export default function ContentHeader({children}: ContentHeaderProps) {
  return (
    <div className="hero pt-36 pb-24">
      {children}
    </div>
  )
}
