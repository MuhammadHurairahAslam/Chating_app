import React from 'react'
import send from '../Assets/Image/send.png'
import attach from '../Assets/Image/attach.png'
import pimage from '../Assets/Image/pimage.png'
const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder="Type Something....." />
      <div className='send'>
        <img src={attach} alt='' />
        <input type="file" id="pfile" style={{ display: "none" }} />
        <label htmlFor="pfile">
          <img src={pimage} alt=""/>
        </label>
        <input type="file" id="pfile" style={{ display: "none" }} />
        <label htmlFor="pfile">
          <span>Send</span>
          <img src={send} alt="" />
          
        </label>
      </div>
      
    </div>
  )
}

export default Input
