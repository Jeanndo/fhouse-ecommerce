import React from 'react'
import Currency from './Currency'
import './slideShow.css'

const Slider = () => {
  return (
    <div className="slide-container">
      <Currency />
      <div class="slide">
        <div className="slide-image image-1"></div>
        <div className="slide-image image-2"></div>
        <div className="slide-image image-3"></div>
        <div className="slide-image image-4"></div>
        <div className="slide-image image-5"></div>
      </div>
    </div>
  )
}

export default Slider
