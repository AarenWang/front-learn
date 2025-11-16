import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { lessons } from '../data/lessons';
import Playground from '../sections/Playground';
import './LessonPage.css';

export default function LessonPage() {
  const { lessonSlug } = useParams();
  const lesson = useMemo(() => lessons.find((item) => item.slug === lessonSlug), [lessonSlug]);
  const [note, setNote] = useState('');

  if (!lesson) {
    return (
      <div className="lesson-page">
        <div className="lesson-content">
          <h1>未找到对应的 Lesson</h1>
          <p>
            请检查地址是否正确，或者返回 <a href="/">课程导航</a>。
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page">
      <article className="lesson-content">
        <p className="lesson-slug">/{lesson.slug}</p>
        <h1>{lesson.title}</h1>
        {lesson.content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <label className="note-label">
          <span>学习笔记</span>
          <textarea
            placeholder="写下今天学到的知识点..."
            value={note}
            onChange={(event) => setNote(event.target.value)}
          />
        </label>
      </article>
      <Playground lessonSlug={lesson.slug} />
    </div>
  );
}
