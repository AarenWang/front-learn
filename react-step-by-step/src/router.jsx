import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from './templates/RootLayout';
import Home from './pages/Home';
import LessonPage from './pages/LessonPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path=":lessonSlug" element={<LessonPage />} />
    </Route>
  )
);

export default router;
