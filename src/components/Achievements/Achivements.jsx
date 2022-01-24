import React, { useEffect } from 'react'
import './achivements.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Achivements = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='achivements_container' id='Achievements' data-aos='fade-up'>
      <h1>Achievements./</h1>

      <section id='timeline'>
        <div className='tl-item'>
          <div
            className='tl-bg'
            style={{
              backgroundImage:
                'url(https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/271647057_3169088516660719_5087529649843524493_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=79524b&_nc_ohc=Cc0ObrhzlnQAX-jfjvp&_nc_ht=scontent.fcmb1-2.fna&oh=00_AT9GVwlIhnwTorkgYxK2PbRiPtUsDV7G_q0Eo3reSUG8LQ&oe=61F26405)',
            }}
          />
          <div className='tl-year'>
            <p className='f2 heading--sanSerif'>2021</p>
          </div>
          <div className='tl-content'>
            <h3>Published First Research paper</h3>
            <p>
              Our research paper on A Realtime AR Based Tool for Media
              Production (LUMOZ) is awarded as the Best Paper in the
              Human-Computer Interaction and Information Systems Track in The
              International Conference on Advancements in Computing 2021
            </p>
            <a href='https://ieeexplore.ieee.org/document/9671102?fbclid=IwAR3WkmzRmBpW-6LceDEHumnAISDYMi4os8TRCmEA1KSWwqRZC4oJu7OUmrA'>
              LINK
            </a>
          </div>
        </div>
        <div className='tl-item'>
          <div
            className='tl-bg'
            style={{
              backgroundImage:
                'url(https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/272310492_3182773401942168_6031204516532847652_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=0vy1m1XCkmUAX_Tzvfv&_nc_ht=scontent.fcmb1-2.fna&oh=00_AT8rA8GF4RD_xOgkGUKr6bGLJfZx67K3OFUiFb3cuai07g&oe=61F1CA60)',
            }}
          />
          <div className='tl-year'>
            <p className='f2 heading--sanSerif'>2021</p>
          </div>
          <div className='tl-content'>
            <h3 className='f3 text--accent ttu'>Won NBQSA Merit Award</h3>
            <p>
              We won the Merit Award 🥳🏆 for Business Category of National Best
              Quality Software Awards (NBQSA) 2021 for Real-Time AR Based Tool
              for Digital Media Production (Lumoz)
            </p>
          </div>
        </div>
        <div className='tl-item'>
          <div
            className='tl-bg'
            style={{
              backgroundImage:
                'url(https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/p180x540/270233331_3168070376745804_5299374108749798116_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=79524b&_nc_ohc=_BBB70nX6jsAX8Bg0gw&_nc_ht=scontent.fcmb1-2.fna&oh=00_AT9dEGzfzxaqmvNJZ6FuJ70-58jdI9DRQ8dl1Ebym4QBzg&oe=61F29343)',
            }}
          />
          <div className='tl-year'>
            <p className='f2 heading--sanSerif'>2021</p>
          </div>
          <div className='tl-content'>
            <h3 className='f3 text--accent ttu'>
              Awarded as the Best Track Paper in HCI and Information Systems in
              The International Conference on Advancements in Computing (ICAC)
            </h3>
            <p>
              Our research paper on A Realtime AR Based Tool for Media
              Production (LUMOZ) is awarded as the Best Paper in the
              Human-Computer Interaction and Information Systems Track in The
              International Conference on Advancements in Computing 2021.
            </p>
          </div>
        </div>
        <div className='tl-item'>
          <div
            className='tl-bg'
            style={{
              backgroundImage:
                'url(https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/p180x540/270233331_3168070376745804_5299374108749798116_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=79524b&_nc_ohc=_BBB70nX6jsAX8Bg0gw&_nc_ht=scontent.fcmb1-2.fna&oh=00_AT9dEGzfzxaqmvNJZ6FuJ70-58jdI9DRQ8dl1Ebym4QBzg&oe=61F29343)',
            }}
          />
          <div className='tl-year'>
            <p className='f2 heading--sanSerif'>2021</p>
          </div>
          <div className='tl-content'>
            <h3 className='f3 text--accent ttu'>
              Shortlisted top 25 Final Year Research Project at SLIIT
            </h3>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Achivements
