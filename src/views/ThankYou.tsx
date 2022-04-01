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
                This website is included as part of my online course (link below). If you're 
                interested in learning much more about web application security, hacker theory,
                threat modeling and more... check it out!
            </p>

            <a
                className="App-link"
                href="https://securewebsolutions.teachable.com/p/intro-to-hacking-web-applications"
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