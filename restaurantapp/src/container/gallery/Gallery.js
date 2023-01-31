import './Gallery.css'
import { images } from '../../constants'
import { SubHeading } from '../../components'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { useState, useRef } from 'react'

const Gallery = () => {

  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef
    if (direction === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
    }
  }

  const photo = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

  return (
    <div className='app-gallery flex-center'>
      <div className='app-gallery-content'>
        <SubHeading title="Instagram" />
        <h1 className='headtext-cormorant'>Photo Gallery</h1>
        <p className='p-opensans' style={{ color: '#AAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type='button' className='custom-button'>View More</button>
      </div>
      <div className='app-gallery-images'>
        <div className='app-gallery-images-container' ref={scrollRef}>
          {photo.map((image, index) => (
            <div className='app-gallery-images-card flex-center' key={`gallery-image-${index}`}>
              <img src={image} alt='img' />
            </div>
          ))}
        </div>
        <div className='app-gallery-images-arrows'>
          <BsArrowLeftShort className='gallery-arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery-arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  )
}

export default Gallery