import Giscus from '@giscus/react'

export default function PostComment() {
  return (
    <div className='pt-0 pb-20 mx-auto'>
      <Giscus
        id="comments"
        repo="joostory/joostory.github.io"
        repoId="MDEwOlJlcG9zaXRvcnkxOTk2MjkxNQ=="
        category="General"
        categoryId="DIC_kwDOATCcI84COuRD"
        mapping="pathname"
        reactionsEnabled="0"
        emitMetadata="0"
        inputPosition="bottom"
        theme="light"
        lang="ko"
        loading="lazy"
        crossOrigin="anonymous"
        async />
    </div>
  )
}
