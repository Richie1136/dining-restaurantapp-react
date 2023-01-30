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
            {data.wines.map(({ title, price }) => (
              <p>{title}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu