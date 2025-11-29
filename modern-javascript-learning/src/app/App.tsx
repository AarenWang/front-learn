import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'
import { DysonSpherePage } from '@/pages/DysonSpherePage'
import { LessonPage } from '@/pages/LessonPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dyson-sphere" element={<DysonSpherePage />} />
        <Route path="/lessons/:lessonSlug" element={<LessonPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  )
}

export default App
