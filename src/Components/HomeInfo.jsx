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
    <h1 className="sm:text-ml sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5"> Hi there! I am 
    <span className='font-semibold'> Fernando, </span> <br/> a recent graduate in computing and IT. <br/><br/> 
    Welcome to my Portfolio and CV website! <br/> Use the right arrow key  ➡️, left arrow key ⬅️ or <br/> 
    click and grab with the left mouse button 🖱️ to navigate </h1>
  ),
  2: (
    <InfoBox
      text="During my time in college, I acquired skills in Game Development & Design 🎮, Data Manipulation & Visualization 📈, Artificial Intelligence & Machine Learning 🤖, Web Design 🌐, among others areas"
      link="/about"
      btnText="Find more info" 
    />
  ),
  3: (
    <InfoBox
    text="I am continually learning and refining my skills 🌌, and you can explore some of my projects here"
    link="/projects"
    btnText="Visit my portfolio" 
  />
  ),
  4: (
    <InfoBox
      text="New projects and functionalities will be added regularly, so be sure to visit again! 🐲 In the meantime, feel free to get in touch for more information."
      link="/contact"
      btnText="Contact me" 
    />
  ),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo