import { images } from '../../constants'
import { SubHeading } from '../../components'

const FindUs = () => (
  <div className='app-bg app-wrapper section-padding' id='contact'>
    <div className='app-wrapper-info'>
      <SubHeading title="Contact" />
      <h1 className='headtext-cormorant' style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className='app-wrapper-content'>
        <p className='p-opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p className='p-cormorant' style={{ color: '#DCCA*&', margin: '2rem 0' }}>Opening Hours</p>
        <p className='p-opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className='p-opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button className='custom-button' style={{ marginTop: '2rem' }}>
        Visit Us
      </button>
    </div>
    <div className='app-wrapper-img'>
      <img src={images.findus} alt='findus' />
    </div>
  </div>
)

export default FindUs