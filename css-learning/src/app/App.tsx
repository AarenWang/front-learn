import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'
import { LessonPage } from '@/pages/LessonPage'
import { PlaygroundPage } from '@/pages/PlaygroundPage'
import { TailwindLearningPage } from '@/pages/TailwindLearningPage'
import { DashboardLayoutPage } from '@/pages/DashboardLayoutPage'
import { EcommerceProductPage } from '@/pages/EcommerceProductPage'
import { LoginAuthPage } from '@/pages/LoginAuthPage'
import { SaasLandingPage } from '@/pages/SaasLandingPage'
import { MobileAppPage } from '@/pages/MobileAppPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lessons/:lessonSlug" element={<LessonPage />} />
        <Route path="/playground" element={<PlaygroundPage />} />
        <Route path="/tailwind-learning" element={<TailwindLearningPage />} />
        <Route path="/project/dashboard" element={<DashboardLayoutPage />} />
        <Route path="/project/ecommerce" element={<EcommerceProductPage />} />
        <Route path="/project/login" element={<LoginAuthPage />} />
        <Route path="/project/saas" element={<SaasLandingPage />} />
        <Route path="/project/mobile" element={<MobileAppPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  )
}

export default App
