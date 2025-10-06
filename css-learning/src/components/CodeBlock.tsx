import { Fragment } from 'react'
import Highlight, { defaultProps, type Language } from 'prism-react-renderer'
import { themes } from 'prism-react-renderer'

interface CodeBlockProps {
  code: string
  language?: Language | string
  title?: string
}

export function CodeBlock({ code, language = 'css', title }: CodeBlockProps) {
  const trimmed = code.trimEnd()

  const highlightLanguage = (language as Language) ?? 'css'

  return (
    <div className="rounded-2xl border border-slate-200/80 dark:border-slate-700/70 bg-slate-900 text-slate-100 shadow-inner overflow-hidden">
      {title ? (
        <div className="px-4 py-2 text-xs font-medium tracking-wide uppercase text-slate-200/80 bg-slate-800 border-b border-slate-700/60">
          {title}
        </div>
      ) : null}
      <Highlight {...defaultProps} code={trimmed} language={highlightLanguage} theme={themes.nightOwl}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} m-0 p-4 overflow-x-auto text-sm leading-relaxed`} style={style}>
            <code>
              {tokens.map((line, i) => (
                <Fragment key={i}>
                  <span className="select-none pr-4 text-xs text-slate-400">{String(i + 1).padStart(2, '0')}</span>
                  <span {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </span>
                  {'\n'}
                </Fragment>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  )
}
