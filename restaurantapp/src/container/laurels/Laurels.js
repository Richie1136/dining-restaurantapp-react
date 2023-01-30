import './Laurels.css'
import { images, data } from '../../constants'
import { SubHeading } from '../../components'

const AwardCard = ({ imgUrl, title, subtitle }) => {
  return (
    <div className='app-laurels-awards-card'>
      <img src={imgUrl} alt='award img' />
      <div className='app-laurels-awards-card-content'>
        <p className='p-cormorant' style={{ color: '#DCCA87' }}>{title}</p>
        <p className='p-cormorant'>{subtitle}</p>

      </div>
    </div>
  )
}

const Laurels = () => {
  return (
    <div className='app-bg app-wrapper section-padding' id='awards'>
      <div className='app-wrapper-info'>
        <SubHeading title="Awards & Recognition" />
        <h1 className='headtext-cormorant'>
          Our Laurels
        </h1>
        <div className='app-laurels-awards'>
          {data?.awards.map(({ imgUrl, title, subtitle }) => (
            <AwardCard imgUrl={imgUrl} title={title} subtitle={subtitle} />
          ))}
        </div>
      </div>
      <div className='app-wrapper-img'>
        <img src={images.laurels} alt='laurels img' />
      </div>
    </div>
  )
}

export default Laurels