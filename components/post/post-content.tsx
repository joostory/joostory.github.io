import ReactMarkdown from 'react-markdown'
import { Kode_Mono, Roboto_Mono } from 'next/font/google'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from '@/lib/synctaxHighrightStyle'

const font = Kode_Mono()

export default function PostContent({content}: {content: string}) {
  return (
    <div className="prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({node, className, children, style, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <SyntaxHighlighter
                style={materialDark}
                className={font.className}
                language={match[1]}
                PreTag="pre"
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
