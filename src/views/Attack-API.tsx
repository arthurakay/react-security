import React from 'react';

const AttackAPI = () => {
    return (
        <header className="Example">
            <p>
                APIs provide the data that (dumb) React apps need in order to be useful.
            </p>

            <p>
                Normally React apps interact with one (or a small number) of APIs via HTTP/S.
                But some will also rely on WebSockets.
            </p>

            <p>
                When it comes to application architecture, remember that React is only <em>displaying</em>
                the data. SPAs typically use a centralized "state" library; this client-side "data layer"
                (e.g. Redux, MobX, etc) could just as easily be polluted.
            </p>

            <a
                className="App-link"
                href="/attack-postmessage"
            >
                There's still one more way an app might receive data...
            </a>
        </header>
    );
};

export default AttackAPI;