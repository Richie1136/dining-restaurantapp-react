import './Menu.css'
import { images, data } from '../../constants'
import { SubHeading, MenuItem } from '../../components'

const Menu = () => {
  return (
    <div className='app-specialMenu flex-center section-padding' id='menu'>
      <div className='app-specialMenu-title'>
        <SubHeading title="Menu That Fits Your Palatte" />
        <h1 className='headtext-cormorant'>Today's Special</h1>
      </div>
      <div className='app-specialMenu-mwnu'>
        <div className='app-specialMenu-menu-wine flex-center'>
          <p className='app-specialMenu-mwnu-heading'>Wine & Beer</p>
          <div className='app-specialMenu-mwnu-items'>
            {data.wines.map(({ title, price, tags, index }) => (
              <MenuItem key={index + 1} title={title} price={price} tags={tags} />

            ))}
          </div>
        </div>
        <div className='app-specialMenu-mwnu-img'>
          <img src={images.menu} alt='img of the menu' />
        </div>
        <div className='app-specialMenu-menu-cocktails flex-center'>
          <p className='app-specialMenu-mwnu-heading'>Cocktails</p>
          <div className='app-specialMenu-mwnu-items'>
            {data.cocktails.map(({ index, title, price, tags }) => (
              <MenuItem key={index + 1} title={title} price={price} tags={tags} />
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: '15px' }}>
        <button type='button' className='custom-button'>View More</button>
      </div>
    </div>
  )
}

export default Menu