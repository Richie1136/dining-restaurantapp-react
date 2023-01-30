import './Chef.css'
import { images } from '../../constants'
import { SubHeading } from '../../components'

const Chef = () => {
  return (
    <div className='app-bg app-wrapper section-padding'>
      <div className='app-wrapper-img app-wrapper-img-reverse'>
        <img src={images.chef} alt='chef' />
      </div>
    </div>
  )
}

export default Chef