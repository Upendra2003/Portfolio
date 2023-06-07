import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import SocialMedia from '../../Components/Topbar/SocialMedia'

export default function Home() {
  return (
    <>
      <div className='container'>
        <div className="top-socialMedia-icons">
          <SocialMedia/>
        </div>
        <div className="section">
          <div className="left">
            <h3 className='text-4xl'>Hola Folks !</h3>
            <h1 className='text-8xl'>I'm <span className=' font-bold'>UPENDRA</span></h1>
            <p>Web Developer and Graphic Designer</p>
          </div>
          <Sidebar className="sidebar"/>
        </div>
      </div>
    </>
  )
}
