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
        <br /><br /> I am actively seeking employment in the IT sector. As a young professional, I am highly motivated and eager to learn and challenge my existing limitations and, 
        I would love to apply the theoretical knowledge I have gained in a practical setting.

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
        <h3  className='subhead-text'> Education </h3>
        <div>
        <p className='mt-5 flex flex-col gap-3 text-slate-600'>
        - CCT College (Sep 2021 - Sep 2023) Bachelor of Science (Honours) in Computing and IT. Level 8 NFQ.
        </p>
        <p className='mt-5 flex flex-col gap-3 text-slate-600'>
        - Dorset College (Feb 2018 - Sep 2021) Bachelor of Science in Computing. Level 7 NFQ
        </p>
        </div>
        <br/>
        <h3  className='subhead-text'> Work Experience </h3>
        <div>
        <p className='mt-5 flex flex-col gap-3 text-slate-600'>
        While I have not yet worked in the IT field, I have got valuable experience in my previous roles. This experience has equipped me 
        with skills in management, administration, organization, and more, which I believe can be beneficial in a new professional setting.
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