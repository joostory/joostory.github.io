import { ReactNode } from 'react'
import Footer from './footer'
import Meta from './meta'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({children }: LayoutProps) {
  return (
    <>
      <Meta />
      <main>{children}</main>
      <Footer />
    </>
  )
}
