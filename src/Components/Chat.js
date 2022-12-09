import React from 'react'
import more from '../Assets/Image/more.png'
import video from '../Assets/Image/video.png'
import add from '../Assets/Image/add.png'
import Messages from './Messages'
import Input from '../Components/Input'
const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Hurairah</span>
        <div className='chatIcons'>
          <img src={video} alt='' />
          <img src={add} alt='' />
          <img src={more} alt='' />
        </div>
      </div>
      <Messages />
      <Input/>
      
    </div>
  )
}

export default Chat
