import React, { useEffect, useState } from 'react';

export default function Cats() {
    const [photo, setPhoto] = useState([])

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    .then(res => { return res.json()})
    .then(data => {
      console.log(data)
      setPhoto(data)
    });
  }, [])

    return (
        <>
        <Helmet>
          <title>PWA React</title>
          <link rel="manifest" href="/manifest.json"/>
          <meta name="theme-color" content="#700000"/>
        </Helmet>
        <div id="sidebar">
          <h1>Cats</h1>
          <nav>
            <ul>
              <li>
                <a href={`/`}>Index</a>
              </li>
              <li>
                <a href={`/dogs`}>Dogs</a>
              </li>
              <li>
                <a href={`/teste`}>Cats</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
          {photo.length > 0 && photo.map((e) => (
            <img src={e.url}></img>
          ))}
        </div>
      </>
    )
}

