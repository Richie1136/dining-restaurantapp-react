import './Intro.css'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal } from '../../constants'
import { useRef, useState } from 'react'

const Intro = () => {

  const [playVideo, setPlayVideo] = useState(false)

  const videoRef = useRef()

  const handleVideo = () => {
    setPlayVideo((prev) => !prev)

    if (playVideo) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
  }

  return (
    <div className='app-video'>
      <video src={meal} ref={videoRef} type="video/mp4" loop controls="false" muted />
      <div className='app-video-overlay flex-center'>
        <div className='app-video-overlay-circle flex-center' onClick={handleVideo}>
          {playVideo ? <BsPauseFill color='#fff' fontSize={30} /> : <BsFillPlayFill color='#fff' fontSize={30} />}
        </div>
      </div>
    </div>
  )
}

export default Intro