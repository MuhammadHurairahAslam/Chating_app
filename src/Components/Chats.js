import React from 'react'
import gallery from '../Assets/Image/gallery.png'

const Chats = () => {
  return (
    <div className='chats'>
      <div className='userChat'>
        <img src={gallery} alt='' />
        <div className='userChatInfo'>
          <span>Hurairah Aslam</span>
          <p>Hello</p>
        </div>
      </div>
      
    </div>
  )
}

export default Chats
