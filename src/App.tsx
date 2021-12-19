import React from 'react';
import { createBrowserHistory } from 'history';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Start from './views/Start';
import XssDefault from './views/XSS-Default';
import XssVulnerable from './views/XSS-Vulnerable';
import XssFixed from './views/XSS-Fixed';
import XssLink from './views/XSS-Link';
import XssLinkFixed from './views/XSS-LinkFixed';

import Architecture from './views/Architecture';
import AttackDirectInteraction from './views/Attack-DirectInteraction';
import AttackUrlParams from './views/Attack-UrlParams';
import AttackBrowserStorage from './views/Attack-BrowserStorage';
import AttackAPI from './views/Attack-API';
import AttackPostMessage from './views/Attack-PostMessage';

import CSP from './views/CSP';
import ThankYou from './views/ThankYou';

const history = createBrowserHistory();

const path = (/#!(\/.*)$/.exec(window.location.hash) || [])[1];
if (path) {
  history.replace(path);
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/xss-default" element={<XssDefault />} />
          <Route path="/xss-vulnerable" element={<XssVulnerable />} />
          <Route path="/xss-fixed" element={<XssFixed />} />
          <Route path="/xss-link" element={<XssLink />} />
          <Route path="/xss-link-fixed" element={<XssLinkFixed />} />

          <Route path="/architecture" element={<Architecture />} />
          <Route path="/attack-directinteraction" element={<AttackDirectInteraction />} />
          <Route path="/attack-urlparams" element={<AttackUrlParams />} />
          <Route path="/attack-browserstorage" element={<AttackBrowserStorage />} />
          <Route path="/attack-apis" element={<AttackAPI />} />
          <Route path="/attack-postmessage" element={<AttackPostMessage />} />

          <Route path="/csp" element={<CSP />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/" element={<Start />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
