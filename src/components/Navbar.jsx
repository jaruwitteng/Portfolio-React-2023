import React from 'react'
import {Person, Mail} from '@material-ui/icons'
import './Navbar.scss'

function Navbar({menuOpen,setMenuOpen}) {
  return (
    <div className={'navbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
            <a href="#intro" className='logo'>
              <p>Jaruwit.T</p>
            </a>
            <div className="itemContainer">
              <Person className='icon'/>
              <span>080-7628742</span>
            </div>
            <div className="itemContainer">
              <Mail className='icon'/>
              <span>Jaruwitteng@kkumail.com</span>
            </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>

        </div>
      </div>
      </div>
  )
}

export default Navbar