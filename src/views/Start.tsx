import React from 'react';
import logo from '../logo.svg';

function Start() {
  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Security Vulnerabilities in ReactJS
        </p>
        <a
          className="App-link"
          href="/xss-default"
        >
          Let's go!
        </a>
      </header>
  );
}

export default Start;
