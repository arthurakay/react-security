import React, { useState } from 'react';

function XSSVulnerable() {
  const [ userInput, setUserInput ] = useState('<img src="" onError="alert(42)" />');

  return (
      <header className="Example">
        
        <p>
          Sometimes developers need to bypass React's default security controls using:
        </p>

        <p>
            dangerouslySetInnerHTML()
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
            <span dangerouslySetInnerHTML={{ __html: userInput }} />
        </p>
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
            User-supplied, unsanitized content: <span dangerouslySetInnerHTML={{ __html: userInput }} />
        </p>
        <a
          className="App-link"
          href="/xss-link"
        >
          So... you really shouldn't do that.
        </a>
      </header>
  );
}

export default XSSVulnerable;
