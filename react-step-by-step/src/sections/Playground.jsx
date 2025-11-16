import { useState } from 'react';
import './Playground.css';

export default function Playground({ lessonSlug }) {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(['React', 'JSX', 'Hooks']);

  return (
    <aside className="playground">
      <div className="playground-header">
        <div>
          <p className="playground-label">Playground</p>
          <h2>Lesson 实验区</h2>
          <p className="playground-subtitle">当前 lesson：{lessonSlug}</p>
        </div>
        <button type="button" onClick={() => setCount((current) => current + 1)}>
          点我 +1 ({count})
        </button>
      </div>
      <div className="playground-body">
        <p>用来练手的小工具，方便随时验证想法：</p>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const value = formData.get('item');
            if (!value) return;
            setItems((current) => Array.from(new Set([...current, value])));
            event.currentTarget.reset();
          }}
        >
          <label>
            添加关键词
            <input type="text" name="item" placeholder="例如：Context、Suspense" />
          </label>
          <button type="submit">添加</button>
        </form>
      </div>
    </aside>
  );
}
