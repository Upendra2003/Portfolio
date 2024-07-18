import React, { useEffect } from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import SocialMedia from '../../Components/Topbar/SocialMedia'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])
  return (
    <>
      <div className='container'>
        <div className="top-socialMedia-icons" data-aos='fade-down' data-aos-delay='3000'>
          <SocialMedia/>
        </div>
        <div className="section">
          <div className="left">
            <h3 className='text-4xl' data-aos='fade-right'>Hi There!</h3>
            <h1 className='text-8xl' data-aos='fade-right' data-aos-delay="1000">I'm <span className=' font-bold'>UPENDRA</span></h1>
            <p data-aos='fade-right' data-aos-delay="2000">Django Developer | Machine Learning Specialist | Graphic Designer</p>
          </div>
          <div data-aos='fade-left' data-aos-delay='3000'>
            <Sidebar className="sidebar"/>
          </div>
        </div>
      </div>
    </>
  )
}

