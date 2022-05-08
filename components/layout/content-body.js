export default function ContentBody({children}) {
  return (
    <div className='mt-6 mb-16 mx-6'>
      <div className="max-w-prose mx-auto">
        {children}
      </div>
    </div>
  )
}
