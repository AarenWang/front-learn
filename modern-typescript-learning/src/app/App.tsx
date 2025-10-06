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
  const rawBase = import.meta.env.BASE_URL || '/'
  const normalizedBase =
    rawBase === './'
      ? '/'
      : rawBase.replace(/\/+$/, '') || '/'

  const routerProps: BrowserRouterProps =
    normalizedBase === '/'
      ? {}
      : {
          basename: normalizedBase
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
