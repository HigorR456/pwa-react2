import React, { useEffect, useState } from 'react';

export default function Root() {
  
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js', { scope: '/dogs' })
        .then((registration) => console.log('scope is: ', registration.scope));
    }
  }, []);

    return (
      <>
        <div id="sidebar">
          <h1>React Router Index</h1>
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
