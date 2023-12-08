import React, { useEffect, useState } from 'react';

export default function Dogs() {

  const [photo, setPhoto] = useState([])
  const [showInfo, setShowInfo] = useState({'zXi6Z5ugC': false, 'zGnoHL8B8': false, 'yxsOLj-GU': false, 'y6pby3qx8': false, 'xk7F_W6PK': false, 'xQRazPrRB': false, 'xNHN6Vu1e': false});

  const imgId = ['zXi6Z5ugC', 'zGnoHL8B8', 'yxsOLj-GU', 'y6pby3qx8', 'xk7F_W6PK', 'xQRazPrRB', 'xNHN6Vu1e']

  
  useEffect(() => {
    imgId.forEach((e) => {
      fetch(`https://api.thedogapi.com/v1/images/${e}`)
        .then((res) => { return res.json()})
        .then((data) => {
          setPhoto(prev => ([...prev, data]))
      });
    })
    console.log(photo)
  }, [])

    return (
        <>
        <div id="sidebar">
          <h1>Dogs</h1>
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
          {photo.length > 0 && photo.map((e) => (
            <div key={e.id}>
              <img src={e.url} onClick={() => showInfo[e.id] ? setShowInfo({...showInfo, [e.id]: false}) : setShowInfo({...showInfo, [e.id]: true})}></img>
              {showInfo[e.id] && (
                <div>
                  <h1>{e.breeds[0].name}</h1>
                  <p>Temperament: {e.breeds[0].temperament}</p>
                  <p>Life Span: {e.breeds[0].life_span}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </>
    )
}
