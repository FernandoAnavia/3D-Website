import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Ajolote from '../models/AjoloteContact';
import { Canvas } from '@react-three/fiber';
import Loader from '../Components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../Components/Alert';


const Contact = () => {

  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: ''})
  const [currentAnimation, setCurrentAnimation] = useState('Standing')
  const {alert, showAlert, hideAlert} = useAlert();

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('Basic');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Fernando Anavia",
        from_email: form.email,
        to_email: 'fer.anavia@gmail.com',
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      showAlert({show: true, text: 'Message sent successfully!', type: 'success'})

      setTimeout(() => {
        hideAlert(false);
        setCurrentAnimation('Standing')
        setForm({name: '', email: '', message: ''})
      }, [3000])



    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('Basic');
      console.log(error);
      showAlert({show: true, text: 'Something went wrong, please try again', type: 'danger'})
    })
  };
  const handleFocus = () => setCurrentAnimation('Basic');
  const handleBlur = () => setCurrentAnimation('Standing');


  return (
    <section className='relative flex lg:flex-row flex-col max-container bg-[#adc9dc] h-[100vh]'>

      {alert.show && <Alert {...alert}/>}
        


      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'> Get in touch </h1>
        <form className='w-full flex flex-col gap-7 mt-14'
        onSubmit={handleSubmit}>
          <label className='text-black-500 font-semibold'>
            Name
            <input 
              type = "text"
              name = "name"
              className='input'
              placeholder='Your Name'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input 
              type = "email"
              name = "email"
              className='input'
              placeholder='email@domain.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your message
            <textarea 
              name = "message"
              rows={4}
              className='textarea'
              placeholder='Please write down your message'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type='submit'
            className='btn'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position:[0,0,5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
        >
          <directionalLight intensity={2.5} position={[0,0,1]}/>
          <ambientLight intensity={.2}/>
          <Suspense fallback={<Loader />}>
            <Ajolote 
              currentAnimation={currentAnimation}
              position ={[-0.5, 0.35, 0]}
              rotation = {[0.2, -0.15, 0]}
              scale = {[0.65, 0.65, 0.65]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact