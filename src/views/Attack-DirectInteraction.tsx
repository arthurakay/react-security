import React from 'react';

const AttackDirectInteraction = () => {
    return (
        <header className="Example">
            <p>
                In the examples you've already seen, an attacker uses an &lt;input /&gt;
                tag to provide an attack payload.
            </p>

            <a
                className="App-link"
                href="/attack-urlparams"
            >
                (social engineering / pass a link to someone else)
            </a>
        </header>
    );
};

export default AttackDirectInteraction;