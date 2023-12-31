import React from 'react'
import { skills, experiences } from '../constants'
import 'react-vertical-timeline-component/style.min.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import CTA from '../Components/CTA'

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I am <span className='blue-gradient_text font-semibold drop-shadow'> Fernando </span>
      </h1>
      <div>
        <p className='mt-5 flex flex-col gap-3 text-slate-600'>
          A recent graduate in Computing and IT, I am from Mexico but I am currently based in Ireland with a visa 1G valid until October 2024
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'> My skills </h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl bg-blue-300'/>
              <div className='btn-front rounded-xl flex justify-center items center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                >
                </img>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3  className='subhead-text'> Work Experience </h3>
        <div>
        <p className='mt-5 flex flex-col gap-3 text-slate-600'>
          Even though I have not worked in this field yet, I have got some valauble experience in my previous jobs, such as 
        </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </div>}
                iconStyle={{background: experience.iconBg}}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`}
                    className='text-black-500/80 font-normal pl-1 text-sm'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-500'/>
      
      <CTA />
    </section>
  )
}

export default About