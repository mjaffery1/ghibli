import React from 'react'
import ghibli_header from '../img/ghibli_header.jpeg'

const Header = () => {
  return (
      <div className='header-container'>
    <header className='header'> 
    <img className='header-image' src={ghibli_header} alt="Studio Ghibli Logo" />
    </header>
    </div>
  )
}

export default Header
