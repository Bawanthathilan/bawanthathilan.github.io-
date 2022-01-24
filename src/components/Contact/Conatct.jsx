import './contact.css'
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'
const Conatct = () => {
  return (
    <div className='contact_container' id='contact'>
      <div className='conatct-info'>
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
