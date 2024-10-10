import React from 'react'
import pfp from '../assets/pfp.png'

const About = () => {
  return (
    <div id='about' className='mx-5 my-5 bg-white/30 backdrop-blur-md rounded-3xl flex justify-around mt-32 w-[55%] py-5 z-0'>
        <div className='w-[65%] flex flex-col items-start'>
            <div>
                <h1 className='text-[36px] font-new font-semibold'>
                    Hi, I'm Aditya Khandelwal 👋
                </h1>
            </div>
            <div>
                <p className='text-xl'>
                Front-End Developer, specializing in crafting user-centric web interfaces. Passionate about creating seamless and engaging digital experiences. Always exploring new trends in UI/UX and web technologies.
                </p>
            </div>
            <div className='mt-10'>
                <h1 className='text-2xl font-bold'>
                    About
                </h1>
            </div>
            <div>
                <p className='font-thin'>
                    I am a 2nd-year student of BTech in Computer Science & Engineering at SRM Institute of Science & Technology, Kattankulathur. I enjoy my learning process and enthusiastically strive for new ideas while working collaboratively for innovative solutions.
                </p>
            </div>
        </div>
        <div>
            <img src={pfp} className='w-52 rounded-full' />
        </div>
    </div>
  )
}

export default About