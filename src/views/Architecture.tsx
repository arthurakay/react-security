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
                The key to protecting your SPAs (whether it's built with React or not)
                is to deeply understand how an attacker can pass malicious payloads into
                your web application.
            </p>

            <img src="/img/architecture.png" alt="Web Application Attack Vectors" />

            <a
                className="App-link"
                href="/thank-you"
            >
                What's next?
            </a>
        </header>
    );
};

export default Architecture;