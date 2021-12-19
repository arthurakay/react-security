import React from 'react';

const URLParams = () => {
    return (
        <header className="Example">
            <p>
                If XSS attacks can abuse URL params...
            </p>

            <a
                className="App-link"
                href="/attack-browserstorage"
            >
                What about data stored locally in the browser?
            </a>
        </header>
    );
};

export default URLParams;