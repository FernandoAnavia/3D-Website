import React from 'react'

const renderContent = {
  1: (
    <h1 className="sm:text-ml sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5"> Hi there! My name is 
    <span className='font-semibold'> Fernando, </span> <br/> a recent graduate in computing and IT <br/><br/> 
    Welcome to my Portfolio and CV website! <br/> Use the left arrow ⬅️,  the right arrow ➡️ <br/> 
    or grab with left click 🖱️ to navigate </h1>
  ),
  2: (
    <h1>2</h1>
  ),
  3: (
    <h1>3</h1>
  ),
  4: (
    <h1>4</h1>
  ),
}

const InfoBox = ({ text, link, btnText}) => (
  <div className="info-box">
    {text}
  </div>
)

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo