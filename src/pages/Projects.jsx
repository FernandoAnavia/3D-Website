import {useState} from 'react'
import {projects} from '../constants'
import { Link } from 'react-router-dom'
import CTA from '../Components/CTA'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ScrollToTop from '../Components/ScrollToTop';


const Projects = () => {

  const [showImagePopup, setShowImagePopup] = useState(Array(projects.length).fill(null));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setShowImagePopup((prev) => prev.map((_, i) => (i === index ? true : false)));
    setCurrentImageIndex(0);
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentImageIndex(newIndex),
  };


  return (
    <section className='max-container'>
      <ScrollToTop />
      <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow'> Projects </span>
      </h1>
      <div>
        <p className='mt-5 flex flex-col gap-3 text-slate-600'>
        Throughout my studies, I engaged in various projects. Below, you will find the most relevant ones. 
        It is highly probable that there is room for improvement, so please feel free to contribute if you have any suggestions. 
        <br/><br/>
        I am committed to continuously enhancing these projects and will undoubtedly add more in the near future.
        </p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project, index) => (
          <div className='lg:w-[400px] w-full'key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`}/>
              <div className='btn-front rounded-xl flex justify-center items-center'> 
                <img 
                  src={project.iconUrl}
                  alt='Project Icon'
                  className='w-3/4 h-3/4 object-contain'
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
                  className='font-semibold text-blue-600 mr-20'
                >
                  GitHub link
                </Link>
                <span
                  role="button"
                  className="image-trigger ml-20"
                  onClick={() => handleImageClick(index)}
                >
                  🖼️📷
                  <p> Gallery </p>
                </span>
              </div>

              {showImagePopup[index] && (
                <div className="image-popup">
                  <Slider {...settings}>
                    {project.images.map((image, imageIndex) => (
                      <div key={imageIndex}>
                        <img src={image} alt={`Pic ${imageIndex + 1}`} />
                      </div>
                    ))}
                  </Slider>
                  <button
                    onClick={() => {
                      setShowImagePopup((prev) => prev.map((_, i) => (i === index ? false : _)));
                    }}
                    style={{ color: 'red', cursor: 'pointer' }}
                  >
                    &#10060; Close
                  </button>
                  <p>
                    Image {currentImageIndex + 1} of {project.images.length}, please swing to see more
                  </p>
                </div>
              )}


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