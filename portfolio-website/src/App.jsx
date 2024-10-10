import React from 'react'
import Header from './components/Header.jsx'
import About from './components/About'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'


const App = () => {
  return (
    <div className='flex justify-center flex-col items-center'>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App