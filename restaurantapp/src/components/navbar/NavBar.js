import './NavBar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from '../../constants/images'
import { useState } from 'react'

const ItemList = () => (
  <>
    <li className='p-opensans'><a href='#home'>Home</a></li>
    <li className='p-opensans'><a href='#about'>About</a></li>
    <li className='p-opensans'><a href='#menu'>Menu</a></li>
    <li className='p-opensans'><a href='#awards'>Awards</a></li>
    <li className='p-opensans'><a href='#contact'>Contact</a></li>
  </>
)

const NavBar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='app-navbar'>
      <div className='app-navbar-logo'>
        <img src={images.gericht} alt='Gericht logo' />
      </div>
      <ul className='app-navbar-links'>
        <ItemList />
      </ul>
      <div className='app-navbar-login'>
        <a href='#login' className='p-opensans'>Log In / Register</a>
        <div></div>
        <a href='/' className='p-opensans'>Book Table</a>
      </div>
      <div className='app-navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className='app-navbar-smallscreen-overlay flex-center slide-bottom'>
            <MdOutlineRestaurantMenu className='overlay-close' onClick={() => setToggleMenu(false)} fontSize={27} />
            <ul className='app-navbar-smallscreen-links'>
              <ItemList />
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar