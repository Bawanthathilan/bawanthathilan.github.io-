import React, { useEffect } from 'react'
import './work.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='work_container' data-aos='fade-up' id='work'>
      <div class='column-1'>
        <h2>My Experience ./</h2>
        <table class='table-style' data-aos='fade-right'>
          <tr>
            <td>Associate Software Engineer</td>
            <td>OREL IT</td>
            <td>2021 - Current</td>
          </tr>
          <tr>
            <td>Intern Software Engineer</td>
            <td>Apium Innovations</td>
            <td>2019 - 2020</td>
          </tr>
          <tr>
            <td>SLIIT FOSS Community</td>
            <td>Vice President</td>
            <td>2020-2021</td>
          </tr>
          <tr>
            <td>SLIIT MS CLUB OF SLIIT</td>
            <td>Tresurer</td>
            <td>2020-2021</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Work
