import React from 'react';

const Architecture = () => {
    return (
        <header className="Example">
            <p>
                Let's back up and talk for a moment about 
                application architecture and threat models.
            </p>

            <p>
                Most React apps are SPAs (single-page applications), which means the 
                HTML/CSS/JavaScript returned by the web server are usually "dumb" 
                (i.e. static files, no server-side logic involved).
            </p>

            <p>
                To an attacker this architecture rules out several attack patterns,
                but it will also focus them on others. For most React applications              
                there are five approaches to creating an injection or 
                scripting attack:
            </p>

            <ul>
                <li>direct interaction (mouse/keyboard)</li>
                <li>URL parameters</li>
                <li>polluting browser storage</li>
                <li>polluting API/websocket responses</li>
                <li>cross-window communication (postMessage)</li>
            </ul>

            <p>
                The key to protecting your SPAs (whether it's built with React or not)
                is to deeply understand how an attacker can pass malicious payloads into
                your web application.
            </p>

            <a
                className="App-link"
                href="/attack-directinteraction"
            >
                Let's dig a bit deeper.
            </a>
        </header>
    );
};

export default Architecture;