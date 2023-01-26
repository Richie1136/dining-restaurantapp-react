import './NavBar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from '../../constants/images'

const NavBar = () => {
  return (
    <nav className='app-navbar'>
      <div className='app-navbar-logo'>
        <img src={images.gericht} alt='Gericht logo' />
      </div>
      <ul className='app-navbar-links'>
        <li className='p-opensans'><a href='#home'>Home</a></li>
        <li className='p-opensans'><a href='#about'>About</a></li>
        <li className='p-opensans'><a href='#menu'>Menu</a></li>
        <li className='p-opensans'><a href='#awards'>Awards</a></li>
        <li className='p-opensans'><a href='#contact'>Contact</a></li>

      </ul>
    </nav>
  )
}

export default NavBar