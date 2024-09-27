import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../../components/Services'
import PricePlan from '../../components/PricePlan'
import MicServices from '../../pages/Services/components/MicServices'
import ContactUs from './components/ContactUs'

const ServicesPage = () => {
  return (
    <div>
        <div className='py-40 text-white' style={{ backgroundImage: `url('./page_heading_1.jpg')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <h1 className='text-center text-5xl font-bold'>Services</h1>
      <div className='flex justify-center items-center gap-1 font-bold text-sm my-5'>
      <Link to='/' className='text-center'>HOME</Link>
      <img src="./db.png" alt="" className='w-5 h-5' />
      <p>SERVICES</p>
      </div>
      </div>
      <MicServices/>
      <ContactUs/>
      <PricePlan/>
    </div>
  )
}

export default ServicesPage