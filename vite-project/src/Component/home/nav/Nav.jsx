import React from 'react'
import './Nav.css';
import logo from "../../../../images/logo.svg"

function Nav() {
  return (
    <>
     <nav>
        <div>
            <img src={logo} alt="" />
        </div>
        <ul>
            <li>How we work</li>
            <li>Blog</li>
            <li>Account</li>
        </ul>
        <button className='btn1'>View plans</button>
     </nav>
    </>
  )
}

export default Nav