import React from 'react';
import pfp from '../assets/pfp.png';

const About = () => {
  return (
    <div id='about' className='flex mx-5 my-5 bg-white/20 backdrop-blur-md rounded-3xl mt-32 w-[55%] py-5 px-5 z-0'>
      <div className='flex flex-col items-start'>
        <div>
          <span className='text-4xl font-new font-semibold'>
            Hi, I'm <span className='text-[44px] text- hover:scale-110'>Aditya Khandelwal</span>
          </span>
        </div>
        <div>
          <p className='text-lg font-new'>
          Front-End Developer, specializing in crafting user-centric web interfaces. Passionate about creating seamless and engaging digital experiences. Always exploring new trends in UI/UX and web technologies.
          </p>
        </div>
        <div className='mt-10 hover:scale-110'>
          <h1 className='text-3xl font-bold font-new'>
            ABOUT
          </h1>
        </div>
        <div>
          <p className='font-thin font-new text-[#ffffff]'>
            I am a 2nd-year student of BTech in Computer Science & Engineering at SRM Institute of Science & Technology, Kattankulathur. I enjoy my learning process and enthusiastically strive for new ideas while working collaboratively for innovative solutions.
          </p>
        </div>
      </div>
      <div className=''>
        <img src={pfp} className='w-full rounded-full' />
      </div>
    </div>
  )
}

export default About