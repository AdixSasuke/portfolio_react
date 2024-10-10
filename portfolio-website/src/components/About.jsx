import React from 'react';
import pfp from '../assets/pfp.png';

const About = () => {
  return (
    <div id='about' className='mx-5 my-5 bg-white/30 backdrop-blur-md rounded-3xl grid grid-cols-6 gap-4 mt-32 w-[55%] py-5 px-5 z-0'>
      <div className='col-span-4 flex flex-col items-start'>
        <div>
          <h1 className='text-[30px] font-new font-semibold'>
            Hi, I'm <span className='text-[36px] text-[#001640]'>Aditya Khandelwal</span> 👋
          </h1>
        </div>
        <div>
          <p className='text-xl'>
          Front-End Developer, specializing in crafting user-centric web interfaces. Passionate about creating seamless and engaging digital experiences. Always exploring new trends in UI/UX and web technologies.
          </p>
        </div>
        <div className='mt-10'>
          <h1 className='text-2xl font-bold font-new text-[#001640]'>
            ABOUT
          </h1>
        </div>
        <div>
          <p className='font-thin font-new'>
            I am a 2nd-year student of BTech in Computer Science & Engineering at SRM Institute of Science & Technology, Kattankulathur. I enjoy my learning process and enthusiastically strive for new ideas while working collaboratively for innovative solutions.
          </p>
        </div>
      </div>
      <div className='col-span-2'>
        <img src={pfp} className='w-full rounded-full' />
      </div>
    </div>
  )
}

export default About