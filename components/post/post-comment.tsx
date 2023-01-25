import Giscus from '@giscus/react'

export default function PostComment() {
  return (
    <div className='p-0'>
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
        theme="dark"
        lang="ko"
        loading="lazy"
      />
    </div>
  )
}
