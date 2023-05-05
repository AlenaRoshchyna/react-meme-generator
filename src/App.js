import { useEffect, useState } from 'react';
import styles from './App.module.css';

export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('');
  const [memeGenerate, setMemeGenerate] = useState(
    `https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.jpg`,
  );

  return (
    <div className={styles.mainContainer}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label>
          Top text
          <input
            value={topText}
            onChange={(event) => {
              setTopText(event.currentTarget.value);
            }}
          />
        </label>
        <label>
          Bottom text
          <input
            value={bottomText}
            onChange={(event) => {
              setBottomText(event.currentTarget.value);
            }}
          />
        </label>
        <label>
          Meme template
          <select name="memeTemplate">
            <option value="banana">Kiwi</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
            <option value="apple">Apple</option>
          </select>
        </label>
      </form>
    </div>
  );
}
