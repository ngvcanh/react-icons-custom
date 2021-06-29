import React from 'react';
import logo from './logo.svg';
import './App.css';

import Icons from '@kensoni/react-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="kensoni-react-icons">
          <div>
            <a href="https://github.com/ngvcanh/react-icons-custom">@kensoni/react-icons</a>
            {" "}
            custom from
            {" "}
            <a href="https://github.com/react-icons/react-icon">react-icons</a>
          </div>
          <Icons.Icon Icon={ Icons.DiGoogleCloudPlatform } />
          <div>Icons.DiGoogleCloudPlatform</div>
        </div>
        <div className="kensoni-code">
          <div className="kensoni-code-title">Installation</div>
          <div className="kensoni-code-command">
            <span className="ks-yellow">npm</span>
            {" "}
            <span className="ks-white">i</span>
            {" "}
            <span className="ks-gray">--save</span>
            {" "}
            <span className="ks-white">@kensoni/react-icons</span>
          </div>
          <div className="kensoni-code-title">Import</div>
          <div className="kensoni-code-command cm1">
            <span className="ks-pink">import</span>
            {" "}
            <span className="ks-var">Icons</span>
            {" "}
            <span className="ks-pink">from</span>
            {" "}
            <span className="ks-str">'@kensoni/react-icons'</span>
            <span className="ks-white">;</span>
          </div>
          <div className="kensoni-code-title">Render</div>
          <div className="kensoni-code-command cm1">
            <span className="ks-tag">&lt;</span>
            <span className="ks-green">Icons.Icon</span>
            {" "}
            <span className="ks-var">Icon</span>
            <span className="ks-white">=</span>
            <span className="ks-tagname">{"{"}</span>
            {" "}
            <span className="ks-obj">Icons</span>
            <span className="ks-white">.</span>
            <span className="ks-fn">DiGoogleCloudPlatform</span>
            {" "}
            <span className="ks-tagname">{"}"}</span>
            {" "}
            <span className="ks-tag">/&gt;</span>
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
