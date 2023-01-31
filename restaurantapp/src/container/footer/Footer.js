import './Footer.css'
import { Newsletter, FooterOverlay } from '../../components'
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi'


const Footer = () => {
  return (
    <div className='app-footer section-padding'>
      <FooterOverlay />
      <Newsletter />
    </div>
  )
}

export default Footer