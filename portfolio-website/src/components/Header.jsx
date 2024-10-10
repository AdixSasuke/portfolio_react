import React from 'react'
import { Link } from 'react-scroll'

const sections = ['About', 'Skills', 'Projects', 'Experience', 'Education']

const Header = () => {
  return (
    <div className='flex justify-center w-full fixed z-10'>
      <nav className='m-5 py-3 px-5 rounded-2xl bg-white/30 backdrop-blur-md w-1/4'>
        <ul className='flex justify-evenly text-center'>
          {sections.map((section, index) => (
            <div key={index}>
              <li>
                <Link
                  to={section.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className='cursor-pointer hover:border-b-[3px] py-2 font-new border-y-blue-500'
                >
                  {section}
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Header
