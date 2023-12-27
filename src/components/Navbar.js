import React from 'react'
import R from "../images/R.jpeg"

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className='logo-container'>
        <img src={R} alt='name' className='logo'></img>
        <div className='logo-text'>itesh Wadhwani</div>
        </div>
        <div>
        <ul className='nav-items'>
        <li className="text-[20px] font-medium cursor-pointer hover:font-bold"><a href='/'>Home</a></li>
          <li className="text-[20px] font-medium cursor-pointer hover:font-bold"><a href='/projects'>Project</a></li>
          <li  className="text-[20px] font-medium cursor-pointer hover:font-bold"><a href='/skills'>Skills</a></li>
          <li  className="text-[20px] font-medium cursor-pointer hover:font-bold"><a href="/contactme">Contact Me</a></li>
        </ul>
        </div>
    </div>
  )
}
