export default function PostTitle({ children }) {
  return (
    <h1 className="font-bold tracking-tighter leading-tight md:leading-none mb-10 text-center text-3xl">
      {children}
    </h1>
  )
}