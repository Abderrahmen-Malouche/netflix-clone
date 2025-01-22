import React from 'react'

function Logo({reduced , width, height}) {
  return (
    <img src={reduced?"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png":"https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"} alt="logo" width={width} height={height}/>
  )
}

export default Logo