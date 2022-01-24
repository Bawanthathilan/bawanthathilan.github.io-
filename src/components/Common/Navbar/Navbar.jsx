import React, { useEffect, useRef, useState } from 'react'
import './navbar.css'
import { RiMenu2Line, RiCloseLine, RiMenu3Line } from 'react-icons/ri'
import Logo from '../../../assets/logo.png'

const Menu = () => (
  <>
    <p>
      <a href='#home'>Home</a>
    </p>
    <p>
      <a href='#about'>About</a>
    </p>
    <p>
      <a href='#projects'>Projects</a>
    </p>
    <p>
      <a href='#work'>Experience</a>
    </p>
    <p>
      <a href='#Achievements'>Achievements</a>
    </p>
    <p>
      <a href='https://bawantharathnayaka.medium.com/'>Blog</a>
    </p>
  </>
)

const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState(false)
  return (
    <div className='header__navbar'>
      <div className='header__navbar-links'>
        <div className='header__navbar-links_logo'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='header__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='header__navbar-sign'>
        <a href='mailto:bawantharathnayaka@gmail.com'>
          <button type='button'>Contact</button>
        </a>
      </div>
      <div className='header__navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='var(--primary-color)'
            size={27}
            onClick={() => settoggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='var(--primary-color)'
            size={27}
            onClick={() => settoggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className='header__navbar-menu_container scale-up-center'>
            <div className='header__navbar-menu_container-links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
