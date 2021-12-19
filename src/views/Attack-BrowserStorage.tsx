import React from 'react';

const AttackBrowserStorage = () => {
    return (
        <header className="Example">
            <p>
                localstorage, sessionstorage, cookies, etc
            </p>

            <a
                className="App-link"
                href="/attack-apis"
            >
                React apps are data-driven -- so what happens if we blindly trust that the API is secure?
            </a>
        </header>
    );
};

export default AttackBrowserStorage;