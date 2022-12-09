import React from 'react'
import gallery from '../Assets/Image/gallery.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat</span>
      <div className='user'>
        <img src={gallery} alt='' />
        <span>Hurairah</span>
        <button>Logout</button>
      </div>     
     
    </div>
    
  )
}

export default Navbar
