import './Intro.css'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal } from '../../constants'
import { useRef, useState } from 'react'

const Intro = () => {

  const [playVideo, setPlayVideo] = useState(false)

  const vidRef = useRef()

  return (
    <div className='app-video'>
      <video src={meal} ref={vidRef} type="video/mp4" loop controls="false" muted />
      <div className='app-video-overlay flex-center'>
        <div className='app-video-overlay-circle flex-center'>

        </div>
      </div>
    </div>
  )
}

export default Intro