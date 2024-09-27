import React from 'react'
import AppendDots from '../../components/Hero'
import About from '../../components/About'
import Services from '../../components/Services'
import TeamSlider from '../../components/TeamSlider'
import WhyUs from '../../components/WhyUs'
import PricePlan from '../../components/PricePlan'
import Testimonial from '../../components/Testimonial'
import Frequently from '../../components/Frequently'
import Working from '../../components/Working'
import Blog from '../../components/Blog'

const Home = () => {
  return (
    <div>
      <AppendDots/>
      <About/>
      <Services/>
      <TeamSlider/>
      <WhyUs/>
      <PricePlan/>
      <Testimonial/>
      <Frequently/>
      <Working/>
      <Blog/>
    </div>
  )
}

export default Home