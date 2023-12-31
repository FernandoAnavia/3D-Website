import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p>
            Would you like to know more? <br className='sm:block hidden' />
            Please contact me
        </p>
        <Link to="/Contact" className='btn'> Contact </Link>
    </section>
  )
}

export default CTA