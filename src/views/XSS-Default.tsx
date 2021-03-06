import React, { useState } from 'react';

function XSSDefault() {
  const [ userInput, setUserInput ] = useState('<img src="" onError="alert(42)" />');

  return (
      <header className="Example">
        
        <p>
          Generally speaking, React treats all user-supplied content as a string
          (rather than raw HTML).
        </p>

        <p>
            This is a deliberate security feature in React.
        </p>

        <p>
            As a result, most XSS attacks are blocked by default. 
        </p>

        <code>
            <pre>{`
const [ userInput, setUserInput ] = useState('<img src="" onError="alert(42)" />');
// try "<script>alert(42)</script>" and other XSS attempts too

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

        <div className="example-output">
            {userInput}
        </div>
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

        <div className="example-output">
            {userInput}
        </div>

        <p>
            Notice that the XSS payload remains intact -- it's just not treated as raw HTML/JavaScript, 
            so the payload is not executed.
        </p>

        <a
          className="App-link"
          href="/xss-vulnerable"
        >
          So... what's the problem?
        </a>
      </header>
  );
}

export default XSSDefault;
