import {
  BrowserRouter as Router,
  type BrowserRouterProps,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import { HomePage } from '@/pages/HomePage'
import { ModulePage } from '@/pages/ModulePage'
import { NotFoundPage } from '@/pages/NotFoundPage'

function App() {
  let routerProps: BrowserRouterProps = {}

  if (typeof window !== 'undefined') {
    const rawBase = import.meta.env.BASE_URL || '/'

    try {
      const resolvedPath = new URL(rawBase, window.location.href).pathname
      const normalizedPath = resolvedPath.replace(/\/+$/, '') || '/'

      if (normalizedPath !== '/') {
        routerProps = { basename: normalizedPath }
      }
    } catch {
      const sanitizedBase = rawBase.replace(/\/+$/, '') || '/'

      if (sanitizedBase !== '/') {
        routerProps = { basename: sanitizedBase.startsWith('/') ? sanitizedBase : `/${sanitizedBase}` }
      }
    }
  }

  return (
    <Router {...routerProps}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lesson/:lessonId" element={<ModulePage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  )
}

export default App
