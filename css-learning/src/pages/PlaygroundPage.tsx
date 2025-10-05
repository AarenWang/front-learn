import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/Button'

const defaultHtml = `
<section class="playground">
  <article class="card">
    <span class="badge">New</span>
    <h1>CSS Playground</h1>
    <p>
      Edit the HTML and CSS to experiment with layout, color systems, typography and modern
      visual effects. Everything updates in real time.
    </p>
    <button class="cta">Start Learning</button>
  </article>
  <article class="card accent">
    <h2>Hot Topics</h2>
    <ul>
      <li>Container queries</li>
      <li>Layered cascade</li>
      <li>CSS variables</li>
      <li>Fluid typography</li>
    </ul>
  </article>
</section>
`

const defaultCss = `
:root {
  color-scheme: light dark;
  font-family: "Inter", "HarmonyOS Sans SC", system-ui;
  --brand: #6366f1;
  --text: #0f172a;
  --subtle: #475569;
  --surface: rgba(255, 255, 255, 0.82);
  --radius: clamp(12px, 2vw, 20px);
  --shadow: 0 20px 60px -25px rgba(79, 70, 229, 0.45);
}

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at 20% 20%, #eef2ff, #f8fafc 45%, #e0f2fe 100%);
}

.playground {
  width: min(960px, 94vw);
  display: grid;
  gap: clamp(1.5rem, 3vw, 3rem);
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  padding: clamp(1.5rem, 3vw, 3rem);
}

.card {
  padding: clamp(1.5rem, 4vw, 3rem);
  background: var(--surface);
  backdrop-filter: blur(18px);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  display: grid;
  gap: 1.25rem;
  color: var(--text);
}

.card h1 {
  font-size: clamp(2rem, 5vw, 2.6rem);
  letter-spacing: -0.04em;
}

.card p {
  color: var(--subtle);
  line-height: 1.65;
}

.badge {
  align-self: start;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--brand);
}

.cta {
  border: none;
  border-radius: calc(var(--radius) / 1.5);
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(120deg, var(--brand), #4338ca);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 35px -20px rgba(99, 102, 241, 0.9);
}

.card.accent {
  background: linear-gradient(160deg, rgba(99, 102, 241, 0.94), rgba(129, 140, 248, 0.78));
  color: white;
}

.card.accent ul {
  display: grid;
  gap: 0.75rem;
  font-weight: 500;
}
`

export function PlaygroundPage() {
  const [html, setHtml] = useState(defaultHtml.trim())
  const [css, setCss] = useState(defaultCss.trim())

  const iframeContent = useMemo(() => {
    return `<!doctype html><html lang="en"><head><style>${css}</style></head><body>${html}</body></html>`
  }, [html, css])

  const handleReset = () => {
    setHtml(defaultHtml.trim())
    setCss(defaultCss.trim())
  }

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <header className="bg-white/90 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary-600">实验室</p>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">CSS 实验游乐场</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl">
              在同一页面同时编写 HTML 与 CSS，并即时预览渲染结果。非常适合调试布局、
              颜色系统、响应式与动效细节。
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="secondary">返回学习路径</Button>
            </Link>
            <Button variant="primary" onClick={handleReset}>
              重置示例代码
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
          <div className="bg-white dark:bg-slate-900/90 rounded-2xl shadow-elevated border border-slate-200/70 dark:border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-5 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200">HTML</h2>
                  <span className="text-xs text-slate-400">支持嵌套、ARIA、语义化结构</span>
                </div>
                <textarea
                  value={html}
                  onChange={event => setHtml(event.target.value)}
                  className="w-full h-[320px] resize-y font-mono text-sm bg-slate-50 dark:bg-slate-900/60 text-slate-800 dark:text-slate-100 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 p-4"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200">CSS</h2>
                  <span className="text-xs text-slate-400">支持变量、@规则、现代函数</span>
                </div>
                <textarea
                  value={css}
                  onChange={event => setCss(event.target.value)}
                  className="w-full h-[320px] resize-y font-mono text-sm bg-slate-50 dark:bg-slate-900/60 text-slate-800 dark:text-slate-100 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 p-4"
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl shadow-elevated border border-slate-800 overflow-hidden">
            <header className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-900/70">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary-200">Live Preview</p>
                <h2 className="text-lg font-semibold text-white">实时预览</h2>
              </div>
              <span className="text-xs text-slate-400">iframe srcDoc</span>
            </header>
            <iframe
              title="CSS Playground Preview"
              sandbox="allow-scripts allow-same-origin"
              className="w-full h-[660px] bg-white"
              srcDoc={iframeContent}
            />
          </div>
        </section>

        <section className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 space-y-4">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">玩法提示</h2>
          <ul className="grid gap-3 text-sm text-slate-600 dark:text-slate-300 md:grid-cols-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary-500"></span>
              使用 <code className="rounded bg-slate-100 dark:bg-slate-800 px-1 py-0.5 text-xs">:root</code> 与 CSS 变量配置主题色，快速切换色彩方案。
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary-500"></span>
              通过 <code className="rounded bg-slate-100 dark:bg-slate-800 px-1 py-0.5 text-xs">clamp()</code>、<code className="rounded bg-slate-100 dark:bg-slate-800 px-1 py-0.5 text-xs">min()</code>、<code className="rounded bg-slate-100 dark:bg-slate-800 px-1 py-0.5 text-xs">max()</code> 感受流式排版。
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary-500"></span>
              尝试添加 <code className="rounded bg-slate-100 dark:bg-slate-800 px-1 py-0.5 text-xs">@layer</code>、<code className="rounded bg-slate-100 dark:bg-slate-800 px-1 py-0.5 text-xs">@supports</code> 等现代特性测试层叠与兼容策略。
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary-500"></span>
              借助 iframe 沙箱安全预览，也可以复制代码至真实项目继续实验。
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}
