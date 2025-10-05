import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'
import { S0BasicsPage } from '@/pages/s0/S0BasicsPage'
import { S1HooksPage } from '@/pages/s1/S1HooksPage'
import { S2EventsFormsPage } from '@/pages/s2/S2EventsFormsPage'
import { S3RoutingPage } from '@/pages/s3/S3RoutingPage'
import { S4DataFetchingPage } from '@/pages/s4/S4DataFetchingPage'
import { S5GlobalStatePage } from '@/pages/s5/S5GlobalStatePage'
import { S6AdvancedFormsPage } from '@/pages/s6/S6AdvancedFormsPage'
import { S7StylingPage } from '@/pages/s7/S7StylingPage'
import { S8TestingPage } from '@/pages/s8/S8TestingPage'
import { S9PerformanceA11yPage } from '@/pages/s9/S9PerformanceA11yPage'
import { S10DeploymentPage } from '@/pages/s10/S10DeploymentPage'
import { S11NextjsPage } from '@/pages/s11/S11NextjsPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/s0-basics" element={<S0BasicsPage />} />
        <Route path="/s1-hooks" element={<S1HooksPage />} />
        <Route path="/s2-events-forms" element={<S2EventsFormsPage />} />
        <Route path="/s3-routing" element={<S3RoutingPage />} />
        <Route path="/s4-data-fetching" element={<S4DataFetchingPage />} />
        <Route path="/s5-global-state" element={<S5GlobalStatePage />} />
        <Route path="/s6-advanced-forms" element={<S6AdvancedFormsPage />} />
        <Route path="/s7-styling" element={<S7StylingPage />} />
        <Route path="/s8-testing" element={<S8TestingPage />} />
        <Route path="/s9-performance-a11y" element={<S9PerformanceA11yPage />} />
        <Route path="/s10-deployment" element={<S10DeploymentPage />} />
        <Route path="/s11-nextjs" element={<S11NextjsPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  )
}

export default App
