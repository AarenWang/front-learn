import {
  Highlight,
  themes,
  type Language,
  type RenderProps,
} from 'prism-react-renderer'

interface CodeBlockProps {
  code: string
  language?: Language
  className?: string
}

export function CodeBlock({ code, language = 'css', className }: CodeBlockProps) {
  const trimmed = code.trim()

  return (
    <Highlight theme={themes.nightOwl} code={trimmed} language={language}>
      {({
        className: inheritedClassName,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }: RenderProps) => (
        <pre
          className={`rounded-2xl border border-slate-700/40 bg-slate-900/90 text-sm leading-relaxed overflow-auto shadow-inner ${
            inheritedClassName ?? ''
          } ${className ?? ''}`}
          style={{ ...style, padding: '1.25rem' }}
        >
          {tokens.map((line, lineIndex) => (
            <div key={lineIndex} {...getLineProps({ line })}>
              {line.map((token, tokenIndex) => (
                <span key={tokenIndex} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
