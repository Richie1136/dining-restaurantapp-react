import './MenuItem.css'

const MenuItem = ({ title, price, tags }) => {
  return (
    <div className='app-menuitem'>
      <div className='app-menuitem-head'>
        <div className='app-menuitem-name'>
          <p className='p-cormorant' style={{ color: '#DCCA87' }}>{title}</p>
        </div>
        <div className='app-menuitem-dash' />
        <div className='app-menuitem-price'>
          <p className='p-cormorant'>{price}</p>
        </div>
      </div>
    </div>
  )
}

export default MenuItem