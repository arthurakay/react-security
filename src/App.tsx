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
import XssLink from './views/XSS-Link';
import XssLinkFixed from './views/XSS-LinkFixed';
import Architecture from './views/Architecture';
import CSP from './views/CSP';

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
          <Route path="/xss-link" element={<XssLink />} />
          <Route path="/xss-link-fixed" element={<XssLinkFixed />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/csp" element={<Architecture />} />
          <Route path="/" element={<Start />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
