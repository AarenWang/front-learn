import type { CardProps } from '@/types'

export function Card({ title, children, className = '' }: CardProps) {
  return (
    <div
      className={`bg-white dark:bg-slate-900 rounded-2xl shadow border border-slate-200 dark:border-slate-800 ${className}`}
    >
      {title && (
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  )
}
