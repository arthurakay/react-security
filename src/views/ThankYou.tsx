import React from 'react';

const ThankYou = () => {
    return (
        <header className="Example">
            <p>
                Wow, you've made it this far!
            </p>

            <p>
                Thanks for taking the time to learn about hacking React apps!
            </p>

            <p>
                I'll be launching an online course soon that expands on the content you've just seen.
                Please follow the link below to learn more!
            </p>

            <a
                className="App-link"
                href="https://mailchi.mp/9ef8866e0620/training"
                target="_blank"
                rel="noreferrer"
            >
                "Intro to Hacking Web Applications" by <br />
                Secure Web Solutions, LLC
            </a>
        </header>
    );
};

export default ThankYou;