import React, { useState } from 'react';
import DOMPurify from 'dompurify';

function XSSFixed() {
  const [ userInput, setUserInput ] = useState('<img src="" onError="alert(42)" />');
  const cleanHtml = DOMPurify.sanitize(userInput);


  return (
      <header className="Example">
        <p>
            Any time React needs to render user-supplied input -- particularly when using
            dangerouslySetInnerHTML() -- you should use a XSS sanitized like DOMPurify.
        </p>

        <code>
            <pre>{`
import DOMPurify from 'dompurify';
// ...

const [ userInput, setUserInput ] = useState('<img src="" onError="alert(42)" />');
const cleanHtml = DOMPurify.sanitize(userInput);

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
            User-supplied, unsanitized content: 
        </p>

        <div
            className="example-output"
            dangerouslySetInnerHTML={{ __html: cleanHtml }}
        />

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
            User-supplied, unsanitized content: 
        </p>

        <div
            className="example-output"
            dangerouslySetInnerHTML={{ __html: cleanHtml }}
        />

        <a
          className="App-link"
          href="/xss-link"
        >
          Now user-supplied content can be trusted, even inside code that bypasses React's
          builtin security features.
        </a>
      </header>
  );
}

export default XSSFixed;
