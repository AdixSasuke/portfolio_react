import React from 'react'
import insta from "./assets/insta.png"
import linkedin from "./assets/linkedin.png"
import github from "./assets/github.png"


function Header() {
  return (
    <div className="navbar">

          <div className="name">

            <h3>Aditya <b>Khandelwal</b></h3>

          </div>

          <div className="socials">

            <a className='atag' href="https://www.instagram.com/nvmaditya/" target="_blank"><img src={insta} className='btn'/></a>
            <a className='atag' href="https://www.linkedin.com/in/adityakhandelwal9/" target="_blank"><img src={linkedin} className='btn'/></a>
            <a className='atag' href="https://github.com/AdixSasuke" target="_blank"><img src={github} className='btn'/></a>

          </div>

    </div>
  )
}

export default Header