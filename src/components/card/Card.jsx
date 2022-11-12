import React from 'react'
import './card.css'
import qrcode from '../../img/qrcode.png'

const Card = () => {
  return (
    <div className='qrcode-card'>
      <div className='qrcode-image'>
        <img src={qrcode} />
      </div>
      <div className='qrcode-card-container'>
      <h2>Improve your front-end skills by building projects</h2>
      <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
    </div>
  )
}

export default Card