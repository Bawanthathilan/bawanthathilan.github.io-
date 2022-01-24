import React, { useEffect } from 'react'
import './contact.css'
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Conatct = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='contact_container' id='contact'>
      <div className='conatct-info' data-aos='slide-up'>
        <h1>Let's do something amazing !</h1>
        <h2>
          <a href='mailto:bawantharathnayaka@gmail.com'>
            Bawantharathnayaka@gmail.com <BsFillArrowUpRightCircleFill />
          </a>
        </h2>
      </div>
    </div>
  )
}

export default Conatct
