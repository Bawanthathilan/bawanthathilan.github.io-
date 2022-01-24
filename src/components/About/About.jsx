import React, { useEffect } from 'react'
import './about.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

//icon
import {
  FaAws,
  FaCss3,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])
  return (
    <div className='about_container' id='about' data-aos='fade-left'>
      <h1>About Me ./</h1>
      {/* <p>About Me</p> */}
      <article data-aos='fade-up'>
        Hello! I'm Bawantha Thilan, from SriLanka I am a creative, time
        punctual, dedicated, goal-oriented individual with decent moral Values
        and Ethicates along with a high-energy level, honed communication
        skills, strong organizational skills, and meticulous attention to
        detail.
        <div className='tecStack'>
          <h2> My Tech Stack ./ </h2>
          <div className='stack'>
            <FaNodeJs />
            <FaReact />
            <FaAws />
            <DiMongodb />
            <FaGithub />
            <FaCss3 />
            <FaHtml5 />
          </div>
        </div>
      </article>
    </div>
  )
}

export default About
