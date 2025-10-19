import { useEffect, useState, type HTMLAttributes } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import nightOwl from 'react-syntax-highlighter/dist/esm/styles/prism/night-owl'
import prettier from 'prettier/standalone'
import pluginBabel from 'prettier/plugins/babel'
import pluginEstree from 'prettier/plugins/estree'
import pluginTypescript from 'prettier/plugins/typescript'
import pluginHtml from 'prettier/plugins/html'
import pluginPostcss from 'prettier/plugins/postcss'
import pluginMarkdown from 'prettier/plugins/markdown'
import pluginYaml from 'prettier/plugins/yaml'
import type { BuiltInParserName, Plugin } from 'prettier'

interface CodeDisplayProps extends HTMLAttributes<HTMLDivElement> {
  code: string
  language?: string
  title?: string
}

type FormatterConfig = {
  parser: BuiltInParserName
  plugins: Plugin[]
}

const LANGUAGE_ALIASES: Record<string, string> = {
  js: 'javascript',
  jsx: 'jsx',
  ts: 'typescript',
  tsx: 'tsx',
  md: 'markdown',
  sh: 'bash',
  shell: 'bash',
  yml: 'yaml',
}

const PRETTIER_LANGUAGE_MAP: Record<string, FormatterConfig> = {
  javascript: { parser: 'babel', plugins: [pluginEstree, pluginBabel] },
  jsx: { parser: 'babel', plugins: [pluginEstree, pluginBabel] },
  json: { parser: 'json', plugins: [pluginEstree, pluginBabel] },
  typescript: { parser: 'typescript', plugins: [pluginEstree, pluginTypescript] },
  tsx: { parser: 'typescript', plugins: [pluginEstree, pluginTypescript] },
  html: { parser: 'html', plugins: [pluginEstree, pluginHtml] },
  xml: { parser: 'html', plugins: [pluginEstree, pluginHtml] },
  css: { parser: 'css', plugins: [pluginEstree, pluginPostcss] },
  scss: { parser: 'scss', plugins: [pluginEstree, pluginPostcss] },
  less: { parser: 'less', plugins: [pluginEstree, pluginPostcss] },
  markdown: { parser: 'markdown', plugins: [pluginEstree, pluginMarkdown] },
  bash: { parser: 'babel', plugins: [pluginEstree, pluginBabel] },
  shell: { parser: 'babel', plugins: [pluginEstree, pluginBabel] },
  yaml: { parser: 'yaml', plugins: [pluginEstree, pluginYaml] },
}

const DEFAULT_LANGUAGE = 'typescript'

function normalizeLanguage(language?: string) {
  if (!language) return undefined
  const normalized = language.trim().toLowerCase()
  if (!normalized) return undefined
  return LANGUAGE_ALIASES[normalized] ?? normalized
}

async function formatCode(code: string, languageKey: string) {
  const trimmedCode = code.trim()
  if (!trimmedCode) {
    return ''
  }

  const formatter = PRETTIER_LANGUAGE_MAP[languageKey] ?? PRETTIER_LANGUAGE_MAP[DEFAULT_LANGUAGE]

  try {
    const result = await prettier.format(trimmedCode, {
      parser: formatter.parser,
      plugins: formatter.plugins,
      singleQuote: true,
      semi: false,
      trailingComma: 'es5',
      tabWidth: 2,
      bracketSpacing: true,
      printWidth: 80,
    })

    return result.trimEnd()
  } catch (error) {
    console.warn('CodeDisplay: failed to format code snippet', error)
    return trimmedCode
  }
}

export function CodeDisplay({
  code,
  language,
  title = '代码展示',
  className = '',
  ...rest
}: CodeDisplayProps) {
  const normalizedLanguage = normalizeLanguage(language) ?? DEFAULT_LANGUAGE

  const [formattedCode, setFormattedCode] = useState(() => code.trim())

  useEffect(() => {
    let isActive = true

    formatCode(code, normalizedLanguage)
      .then((result) => {
        if (isActive) {
          setFormattedCode(result)
        }
      })
      .catch((error) => {
        console.warn('CodeDisplay: failed to format code snippet', error)
        if (isActive) {
          setFormattedCode(code.trim())
        }
      })

    return () => {
      isActive = false
    }
  }, [code, normalizedLanguage])

  return (
    <div
      className={`overflow-hidden rounded-xl border border-slate-200 bg-slate-950 text-slate-100 shadow-sm dark:border-slate-700 dark:bg-slate-900 ${className}`.trim()}
      {...rest}
    >
      <div className="flex items-center justify-between border-b border-slate-800/60 bg-slate-900/60 px-4 py-2 text-xs uppercase tracking-widest text-slate-300">
        <span>{title}</span>
        {language ? (
          <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-semibold text-slate-200">
            {normalizedLanguage.toUpperCase()}
          </span>
        ) : null}
      </div>
      <div className="max-h-[480px] overflow-auto">
        <SyntaxHighlighter
          language={normalizedLanguage}
          style={nightOwl}
          customStyle={{
            margin: 0,
            padding: '12px 16px',
            background: 'transparent',
            fontSize: '0.75rem',
            lineHeight: 1.6,
            textAlign: 'left',
          }}
          codeTagProps={{
            style: {
              fontFamily:
                'var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace)',
              display: 'block',
            },
          }}
          showLineNumbers
          wrapLongLines
          lineNumberStyle={{
            color: 'rgba(148, 163, 184, 0.7)',
            marginRight: '16px',
            textAlign: 'right',
            minWidth: '2.5em',
          }}
        >
          {formattedCode}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
