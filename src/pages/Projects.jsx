import React from 'react'
import {projects} from '../constants'
import { Link } from 'react-router-dom'
import CTA from '../Components/CTA'

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow'> Projects </span>
      </h1>
      <div>
        <p className='mt-5 flex flex-col gap-3 text-slate-600'>
          These are the main projects I worked on during my path through my Bachelor degree 
        </p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full'key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`}/>
              <div className='btn-front rounded-xl flex justify-center items-center'> 
                <img 
                  src={project.iconUrl}
                  alt='Project Icon'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-700'>
                {project.description}
              </p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live link
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-500' />
      <CTA />

    </section>
  )
}

export default Projects