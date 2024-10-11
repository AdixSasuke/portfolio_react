import React from 'react'

const projectsData = [
  {
    title: 'Weather API',
    description: 'The Weather API project fetches real-time weather data for any city using the OpenWeatherMap API, displaying current conditions and forecasts.',
    visitLink: 'https://weather-api-theta-five.vercel.app/',
    repoLink: 'https://github.com/AdixSasuke/Weather-API'
  },
  {
    title: 'School Website',
    description: 'A comprehensive school website that showcases information about the institution, including announcements, events, and resources for students and staff.',
    visitLink: 'https://schoolwebsite-adixsasuke.vercel.app/',
    repoLink: 'https://github.com/AdixSasuke/schoolwebsite'
  },
  {
    title: 'Random Quote Generator',
    description: 'A web-based application that generates random quotes on demand, helping users find inspiration or entertainment with a single click.',
    visitLink: 'https://random-quote-gen-iota.vercel.app/',
    repoLink: 'https://github.com/AdixSasuke/Random-Quote-Gen'
  },
  {
    title: 'Pomodoro Timer',
    description: 'A productivity tool that implements the Pomodoro technique, helping users stay focused by breaking tasks into timed intervals with short breaks.',
    visitLink: 'https://pomodoro-timer-flax-ten.vercel.app/',
    repoLink: 'https://github.com/AdixSasuke/Pomodoro-Timer'
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase projects, skills, and contact information, providing a professional online presence.',
    visitLink: 'https://adixsasuke.vercel.app/',
    repoLink: 'https://github.com/AdixSasuke/portfolio_react/tree/main/portfolio-website'
  }
];


const Projects = () => {
  return (
    <div id='projects' className='bg-white/20 backdrop-blur-md rounded-2xl px-10 py-5 w-[55%] flex flex-col items-center'>
      <div className='pb-5'>
        <h1 className='text-3xl font-bold'>
          PROJECTS
        </h1>
      </div>
      <div>
        <ul className='list-disc'>
          {projectsData.map((project, index) => (
            <li key={index} className='mb-5'>
              <h1 className='text-2xl font-semibold font-new py-2'>{project.title}</h1>
              <p className='py-2'>{project.description}</p>
              <div className='flex gap-2 py-2 '>
                <a href={project.visitLink} target="_blank" rel="noopener noreferrer" className='border py-1 px-3 rounded-xl bg-white/10 backdrop-blur-md transform transition-all hover:scale-110'><button>Visit</button></a>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className='border py-1 px-3 rounded-xl bg-white/10 backdrop-blur-md transform transition-all hover:scale-110'><button>Repo</button></a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Projects
