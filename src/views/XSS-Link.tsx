import React, { useState } from 'react';

function XSSLink() {
  const [ userInput, setUserInput ] = useState('javascript:alert(42)');
  return (
      <header className="Example">
        
        <p>
            Remember when I said "most XSS attacks are blocked by default" in React?
        </p>

        <p>
            That's not entirely true.
        </p>

        <p>
            Some XSS injections can easily occur in specific places -- like links!
        </p>

        <code>
            <pre>{`
const [ userInput, setUserInput ] = useState('javascript:alert(42)');

return (
    <>
        <p>
            <input
                type="text"
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
            />
        </p>

        <p>
            Click <a href={userInput}>here</a>
            if phishing didn't make you terrified of clicking links already...
        </p>

        <button
            onClick={e => {
                e.preventDefault();
                window.location.href = userInput;
            }}
        >
            Buttons are used like links too, via event handlers!
        </button>
    </>
);
            `}</pre>
        </code>

        <p className="example-input">
            <input
                type="text"
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
            />
        </p>

        <p>
            Click <a href={userInput}>here</a>
            if phishing didn't make you terrified of clicking links already...
        </p>

        <p>
            <button
                onClick={e => {
                    e.preventDefault();
                    window.location.href = userInput;
                }}
            >
                Buttons are used like links too, via event handlers!
            </button>
        </p>

        <a
          className="App-link"
          href="/xss-link-fixed"
        >
          So... how can we prevent XSS attacks like this?
        </a>
      </header>
  );
}

export default XSSLink;
