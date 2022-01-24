import React from 'react'
import './card.css'

const Card = ({ name, img, url, desc }) => {
  return (
    <div className='project_card'>
      <a href={url}>
        <img src={img} alt='' srcset='' />
        <div className='card-content'>
          <h1 className='name'>{name}</h1>
          <p className='desc'>{desc}</p>
        </div>
      </a>
    </div>
  )
}

export default Card
