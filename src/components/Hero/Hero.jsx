import React, { useEffect, useRef } from 'react'
import './hero.css'
import CV from '../../assets/Bawantha_Rathnayaka.pdf'

import {
  FaBeer,
  FaCodepen,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitch,
  FaTwitterSquare,
} from 'react-icons/fa'

const Hero = () => {
  const pathRef = useRef()

  useEffect(() => {
    let path = pathRef.current
    let pathLength = path.getTotalLength()

    path.style.strokeDasharray = pathLength + ' ' + pathLength
    path.style.strokeDashoffset = pathLength

    window.addEventListener('scroll', () => {
      var scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)

      var drawLength = pathLength * scrollPercentage

      path.style.strokeDashoffset = pathLength - drawLength
    })
  })
  return (
    <div className='hero_container' id='home'>
      <div className='line_container'>
        <svg
          width='698'
          height='1748'
          viewBox='0 0 698 1748'
          fill='none'
          preserveAspectRatio='xMidYMax meet'
        >
          <path
            ref={pathRef}
            d='M472.309 1C540.975 197.346 637.109 617.009 472.309 724.894C266.309 859.749 475.809 358.494 669.809 410.655C863.809 462.816 -80.1915 545.087 7.80853 857.205C95.8085 1169.32 475.809 1588.31 131.309 1745.64'
            stroke='#29053d'
            stroke-width='3'
          />
        </svg>
      </div>

      <div className='hero_header'>
        <div className='hero_contents'>
          <h1>Hi I'm Bawantha</h1>
          <p>Software Developer | Designer | Traveller | Blogger</p>
          <div className='social-icons'>
            <a href='https://www.facebook.com/bawanthathilan'>
              <FaFacebook />
            </a>
            <a href='https://twitter.com/ThilanBawantha'>
              <FaTwitterSquare />
            </a>
            <a href='https://www.instagram.com/bawwa_/'>
              <FaInstagram />
            </a>
            <a href='https://github.com/Bawanthathilan'>
              <FaGithub />
            </a>
            <a href='https://codepen.io/bawantharathnayakasliit'>
              <FaCodepen />
            </a>
          </div>
          <a href={CV} target='_blank'>
            <button className='resume'>Resume</button>
          </a>
        </div>

        <div className='hero_image'>
          <img
            src='https://avatars.githubusercontent.com/u/38850236?v=4'
            alt=''
            srcset=''
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
