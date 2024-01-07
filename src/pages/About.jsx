import React from 'react'
import { skills, experiences } from '../constants'
import 'react-vertical-timeline-component/style.min.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import CTA from '../Components/CTA'
import ScrollToTop from '../Components/ScrollToTop'

const About = () => {
  return (
    <section className='max-container'>

      <ScrollToTop />

      <h1 className='head-text'>
        Hello, I am <span className='blue-gradient_text font-semibold drop-shadow'> Fernando Gonzalez </span>
      </h1>

      <div>
        <p className='mt-5 flex flex-col gap-3 text-slate-600'>
        A recent graduate in Computing and IT, I am from Mexico but I am currently based in Ireland with a visa valid until October 2024. 
        <br /><br /> I am looking for a job in the IT sector, even though it is a large field with a great variety of positions I would love to work 
        in the: <span className='font-semibold' style={{ display: 'inline' }}> Gaming industry, Data science & analytics, Artificial intelligence & Machine learning or Web development.</span>


          I know I still have a lot to learn through this innovating carrer, but I can asure you that I always go the extra mile to improve and succeed in 
          any position.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'> My skills </h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div key={skill.name} className='block-container w-20 h-28'>
              <div className='btn-back rounded-xl bg-blue-300'/>
              <div className='btn-front rounded-xl flex flex-col justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain mb-2'
                >
                </img>
                <div className='bar-container'>
                  <div
                    className='bar'
                    style={{ width: skill.level, backgroundColor: skill.background }}
                  />
                </div>
                <p className='text-center text-xs mt-2'>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3  className='subhead-text'> Work Experience </h3>
        <div>
        <p className='mt-5 flex flex-col gap-3 text-slate-600'>
          Even though I have not worked in this field yet, I have got some valauble experience in my previous jobs 
          which can be useful in management, administration, organization, etc.  
        </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline layout={ '1-column-left' }>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-[75%] h-[75%] object-contain'
                  />
                </div>}
                iconStyle={{background: experience.iconBg}}
                contentStyle={{
                  borderBottom: '15px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.company_name}
                  </h3>
                  {experience.roles.map((role, index) => (
                      <div key={`role-${index}`}>
                        <p className='text-black-500 font-medium font-base' style={{margin: 0, fontSize: '17px'}}>
                          {role.title}
                        </p>
                        <p className='text-black-500 font-base' style={{margin: 0, fontSize: '12px' }}>
                          {role.subDate}
                        </p>
                        <ul className='my-2 list-disc ml-5 space-y-2'>
                          {role.points.map((point, index) => (
                            <li key={`point-${index}`} className='text-black-500/80 font-normal pl-1 text-sm'>
                              {point}                            
                            </li>
                          ))}
                        </ul>
                      </div>
                  ))}
                </div>
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