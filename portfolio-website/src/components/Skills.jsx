import React from 'react';
import javascript from '../assets/js.png';
import python from '../assets/py.png';
import cpp from '../assets/cpp.png';
import java from '../assets/java.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import git from '../assets/giticon.png';
import github from '../assets/githubicon.png';
import html from '../assets/html.png';
import css from '../assets/css.png';

const skill = [
  { name: 'javascript', logo: javascript },
  { name: 'python', logo: python },
  { name: 'cpp', logo: cpp },
  { name: 'java', logo: java },
  { name: 'react', logo: react },
  { name: 'tailwind', logo: tailwind },
  { name: 'git', logo: git },
  { name: 'github', logo: github },
  { name: 'html', logo: html },
  { name: 'css', logo: css },
];

const Skills = () => {
  return (
    <section id='skills' className="mb-12 w-[55%] mx-5 my-5 bg-white/30 backdrop-blur-md rounded-3xl flex justify-around flex-col px-5 py-5 z-0 pb-10 h-">
      <h2 className="text-2xl font-bold mb-4 flex justify-center items-center text-[#001640] font-new">SKILLS</h2>
      <div className="flex flex-wrap justify-center items-center gap-5 marquee">
        {skill.map((skill, index) => (
          <span key={index} className="px-2 py-2 border border-white/20 backdrop-blur-md shadow-xl rounded-3xl hover:scale-110 hover:shadow-slate-700-30">
            <img src={skill.logo} alt={skill.name} className="w-20 h-20" />
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;