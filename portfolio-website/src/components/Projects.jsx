import React from 'react';
import ph1 from '../assets/ph1.jpeg';
import ph2 from '../assets/ph2.jpeg';
import ph3 from '../assets/ph3.jpeg';
import ph4 from '../assets/ph4.jpeg';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of Project One...',
    image: ph1,
    link: 'https://github.com/AdixSasuke/schoolwebsite-mlsa',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A brief description of Project Two...',
    image: ph4,
    link: 'https://github.com/AdixSasuke/Weather-API',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A brief description of Project Three...',
    image: ph2,
    link: 'https://github.com/AdixSasuke/Random-Quote-Gen',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'A brief description of Project Four...',
    image: ph3,
    link: 'https://github.com/AdixSasuke/pomodoro-timer',
  },
];

const Projects = () => {
  return (
    <div id='projects' className=" container mx-auto my-20 px-4 w-[55%]">
      <h1 className="text-4xl font-bold text-center mb-20 font-new">PROJECTS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div key={project.id} className="bg-white/30 backdrop-blur-md p-5 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 text-center">
            <img src={project.image} alt={project.title} className="w-full object-cover" />
            <div className="">
              <h2 className="text-xl font-semibold ">{project.title}</h2>
              <p className="text-gray-600 ">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className='text-black '>View Repo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
