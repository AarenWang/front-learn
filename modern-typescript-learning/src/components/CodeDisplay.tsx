import type { HTMLAttributes } from 'react'

interface CodeDisplayProps extends HTMLAttributes<HTMLDivElement> {
  code: string
  language?: string
  title?: string
}

export function CodeDisplay({
  code,
  language,
  title = '代码展示',
  className = '',
  ...rest
}: CodeDisplayProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-slate-200 bg-slate-900/95 text-slate-100 shadow-sm dark:border-slate-700 dark:bg-slate-900 ${className}`.trim()}
      {...rest}
    >
      <div className="flex items-center justify-between border-b border-slate-800/60 bg-slate-900/60 px-4 py-2 text-xs uppercase tracking-widest text-slate-300">
        <span>{title}</span>
        {language ? (
          <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-semibold text-slate-200">
            {language.toUpperCase()}
          </span>
        ) : null}
      </div>
      <pre className="overflow-auto px-4 py-3 text-xs leading-relaxed sm:text-sm">
        <code>{code.trimEnd()}</code>
      </pre>
    </div>
  )
}
