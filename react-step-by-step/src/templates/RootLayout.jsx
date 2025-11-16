import { NavLink, Outlet } from 'react-router-dom';
import { lessons } from '../data/lessons';
import Logo from '../components/Logo';
import './RootLayout.css';

export default function RootLayout() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <Logo />
        <nav className="app-nav">
          <NavLink to="/" end>
            课程导航
          </NavLink>
          {lessons.map((lesson) => (
            <NavLink key={lesson.slug} to={`/${lesson.slug}`}>
              {lesson.title}
            </NavLink>
          ))}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="app-footer">
        React Step-by-Step · 通过小课题慢慢积累肌肉记忆
      </footer>
    </div>
  );
}
