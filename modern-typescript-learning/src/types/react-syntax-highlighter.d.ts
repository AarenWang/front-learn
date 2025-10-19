declare module 'react-syntax-highlighter' {
  import type { ComponentType } from 'react'

  export interface SyntaxHighlighterProps {
    language?: string
    style?: Record<string, unknown>
    customStyle?: Record<string, unknown>
    codeTagProps?: Record<string, unknown>
    showLineNumbers?: boolean
    wrapLongLines?: boolean
    lineNumberStyle?: Record<string, unknown>
    children?: string
  }

  export const Prism: ComponentType<SyntaxHighlighterProps>
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/night-owl' {
  const style: Record<string, unknown>
  export default style
}
