import Footer from './footer'
import Meta from './meta'

export default function Layout({children }) {
  return (
    <>
      <Meta />
      <main>{children}</main>
      <Footer />
    </>
  )
}
