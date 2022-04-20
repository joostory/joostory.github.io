
export default function PostBody({ content }) {
  return (
    <div className='w-[650px] pt-10 pb-20 mx-auto'>
      <article
        dangerouslySetInnerHTML={{__html: content}}
        className='prose'
      />
    </div>
  )
}
