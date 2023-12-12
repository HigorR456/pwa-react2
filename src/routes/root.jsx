import React, { useEffect, useState } from 'react';

import {Helmet} from "react-helmet";

export default function Root() {
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', (e) => {
      deferredPrompt = e;
  });

  const installApp = async () => {
    if (deferredPrompt !== null) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            deferredPrompt = null;
        }
    }
  };

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js', { scope: '/' })
        .then((registration) => console.log('scope is: ', registration.scope));
    }
  }, []);

    return (
      <>
      <Helmet>
        <title>PWA React</title>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="theme-color" content="#700000"/>
      </Helmet>
        <div id="sidebar">
          <h1>React Router Index</h1>
          <button onClick={() => installApp()}>Install App</button>
          <span style={{"background": "red", "color": "black"}}>
            Obs: feature experimental, não tem suporte no Safari e Firefox
          </span>
          <nav>
            <ul>
              <li>
                <a href={`/`}>Index</a>
              </li>
              <li>
                <a href={`/dogs`}>Dogs</a>
              </li>
              <li>
                <a href={`/cats`}>Cats</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
          <img src="/dog-working.jpg"></img>
        </div>
      </>
    );
  }
