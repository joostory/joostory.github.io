import { ReactNode } from "react"

type ContainerProps = {
  children: ReactNode
}

export default function Container({ children }: ContainerProps) {
  return <div className="container mx-auto">{children}</div>
}
