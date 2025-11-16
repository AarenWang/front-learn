import { Link } from 'react-router-dom';
import { lessons } from '../data/lessons';
import './Home.css';

export default function Home() {
  return (
    <section className="home">
      <div className="intro">
        <p>👋 欢迎来到个人 React 学习场。每节课都是一个可单独访问的路由。</p>
        <p>
          只需要在 <code>src/data/lessons.js</code> 里追加配置，就可以快速创建新的 lesson 页面并在导航上自动出现。
        </p>
        <p>
          右侧的 playground 区域可以自由组合任何组件，方便把教程里的知识马上动手练习。
        </p>
      </div>
      <div className="lesson-grid">
        {lessons.map((lesson) => (
          <article key={lesson.slug} className="lesson-card">
            <div className="lesson-meta">
              <h3>{lesson.title}</h3>
              <p>{lesson.summary}</p>
            </div>
            <Link className="lesson-link" to={`/${lesson.slug}`}>
              进入 Lesson
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
