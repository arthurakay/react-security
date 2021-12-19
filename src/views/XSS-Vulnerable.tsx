import React, { useState } from 'react';

function XSSVulnerable() {
  const [ userInput, setUserInput ] = useState('<img src="" onError="alert(42)" />');

  return (
      <header className="Example">
        <p>
            Did you notice the JavaScript alert?
        </p>

        <p>
          Sometimes developers think they need to bypass React's default security controls using
          a utility function built into React:
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
        </p>

        <div
            className="example-output"
            dangerouslySetInnerHTML={{ __html: userInput }}
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
            dangerouslySetInnerHTML={{ __html: userInput }}
        />

        <p>
            Needless to say... you really shouldn't do that.
        </p>


        <a
          className="App-link"
          href="/xss-fixed"
        >
          So how can we fix this problem?
        </a>
      </header>
  );
}

export default XSSVulnerable;
