import React, { useState } from 'react';

// import styles from './App.module.css';

export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('');
  const [memeGenerate, setMemeGenerate] = useState(
    `https://api.memegen.link/images/made/Deal with it/Naaaa dankee.jpg`,
  );
  let urlChange = `https://api.memegen.link/images/${memeTemplate}.jpg`;
  function generateUrl(event) {
    event.preventDefault();

    if (topText) {
      urlChange = `https://api.memegen.link/images/${memeTemplate}/${topText}.jpg`;
    }
    if (bottomText) {
      urlChange = `https://api.memegen.link/images/${memeTemplate}/_/${bottomText}.jpg`;
    }
    if (topText && bottomText) {
      urlChange = `https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.jpg`;
    }
    setMemeGenerate(urlChange);
  }

  return (
    <div>
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
        <button onClick={generateUrl}>Generate</button>
      </form>
    </div>
  );
}
