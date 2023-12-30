import React from 'react'
import { Link } from 'react-router-dom'

const InfoBox = ({ text, link, btnText}) => (
  <div className="info-box" style={{ maxWidth: '400px' }}>
    <p className='font-medium sm:text-ml text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className="sm:text-ml sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5"> Hi there! My name is 
    <span className='font-semibold'> Fernando, </span> <br/> a recent graduate in computing and IT <br/><br/> 
    Welcome to my Portfolio and CV website! <br/> Use the right arrow key  ➡️, left arrow key ⬅️ <br/> 
    or grab with left click 🖱️ to navigate </h1>
  ),
  2: (
    <InfoBox
      text="I Learnt some skills in Game coding & design, data manipulation & visualization, AI & Machine Learning, among others"
      link="/about"
      btnText="Learn more" 
    />
  ),
  3: (
    <InfoBox
    text="Still learning and polishing my skills, but you can see some of my projects here"
    link="/projects"
    btnText="Visit my portfolio" 
  />
  ),
  4: (
    <InfoBox
      text="Please get in touch for more info"
      link="/contact"
      btnText="Contact me" 
    />
  ),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo