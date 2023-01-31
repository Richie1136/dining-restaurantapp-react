import './Header.css'
import { images } from '../../constants'
import SubHeading from '../../components/subheading/SubHeading'

const Header = () => (
  <div className='app-header app-wrapper section-padding' id='home'>
    <div className='app-wrapper-info'>
      <SubHeading title="Chase the new flavor" />
      <h1 className='app-header-h1'>
        The Key to Fine Dining
      </h1>
      <p className='p-opensans' style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
      <button className='custom-button' type='button'>Explore Menu</button>
    </div>
    <div className='app-wrapper-img'>
      <img src={images.welcome} alt='Welcome img' />
    </div>
  </div>
)

export default Header