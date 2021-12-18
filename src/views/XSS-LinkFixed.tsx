import React, { useState } from 'react';

function XSSLink() {
  const [ userInput, setUserInput ] = useState('javascript:alert(42)');

  const sanitizeUrl = (url: string) => {
    const sanitizedUrl = new URL(url);

    return sanitizedUrl.protocol === 'https'
        ? sanitizedUrl.toString()
        : new URL('https://www.securewebsolutions.io').toString();
}

  return (
      <header className="Example">
        
        <p>
            Every user input needs to be property sanitized!
        </p>

        <p>
            URLs can be fixed easily using <em>new URL()</em>
        </p>

        <code>
            <pre>{`
const [ userInput, setUserInput ] = useState('javascript:alert(42)');

const sanitizeUrl = (url) => {
    const sanitizedUrl = new URL(userInput);

    return sanitizedUrl.protocol === 'https'
        ? sanitizedUrl.toString()
        : new URL('https://www.securewebsolutions.io').toString();
}

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
            Click <a href={sanitizeUrl(userInput)}>here</a> 
            if phishing didn't make you terrified of clicking links already...
        </p>

        <button
            onClick={e => {
                e.preventDefault();
                window.location.href = sanitizeUrl(userInput);
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
            Click <a href={sanitizeUrl(userInput)}>here</a> if phishing didn't make you terrified of clicking links already...
        </p>

        <p>
            <button
                onClick={e => {
                    e.preventDefault();
                    window.location.href = sanitizeUrl(userInput);
                }}
            >
                Buttons are used like links too, via event handlers!
            </button>
        </p>

        <a
          className="App-link"
          href="/architecture"
        >
          What other things should I be worried about?
        </a>
      </header>
  );
}

export default XSSLink;
