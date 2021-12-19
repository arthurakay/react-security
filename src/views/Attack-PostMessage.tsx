import React from 'react';

const AttackPostMessage = () => {
    return (
        <header className="Example">
            <p>
                Not many "modern" apps still rely on cross-window (or cross-frame) communication
                via the postMessage() API... but it's still a potential weakness in our threat model.
            </p>

            <a
                className="App-link"
                href="/csp"
            >
                Is there a magic bullet to prevent all of this?
            </a>
        </header>
    );
};

export default AttackPostMessage;