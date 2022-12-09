import React from 'react'
import gallery from '../Assets/Image/gallery.png'
const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src={gallery} alt="" />
        <span>Just Now</span>
      </div>
      <div className='messageContent'>
        <p>Muhammad Hurairah Aslam Bcsm-f19-191</p>
      </div>

    </div>
  )
}

export default Message
