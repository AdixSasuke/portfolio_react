import React from 'react'
import pfp from "./assets/pfp.png"

function Main_Items() {
  return (
    <div className="main">

          <div class="intro-text">
            <div className="info">
              <h1>Hi, There</h1>
              <h2>I'am <span class="highlight">Aditya</span></h2>
              <h2 className='profiles' >Tech Enthusiast</h2>
            </div>

            <button className="contact"><a href="mailto:adityakhandelwal0271@gmail.com" className="contactme">Contact</a></button>

          </div>
            <img src={pfp} alt="" className="pfp" />

      </div>
  )
}

export default Main_Items