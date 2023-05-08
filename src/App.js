import { useState } from 'react';
import styles from './App.module.css';

export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('awesome-awkward');
  const [memeGenerate, setMemeGenerate] = useState(
    `https://api.memegen.link/images/${memeTemplate}/Hello/World.jpg`,
  );

  return (
    <div className={styles.mainContainer}>
      <img alt="Meme" src={memeGenerate} />
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
          Meme Template
          <input
            value={memeTemplate}
            onChange={(event) => {
              setMemeTemplate(event.currentTarget.value);
            }}
          />
        </label>
        <button
          onClick={() =>
            setMemeGenerate(
              `https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.jpg`,
            )
          }
        >
          Generate
        </button>
      </form>
    </div>
  );
}
