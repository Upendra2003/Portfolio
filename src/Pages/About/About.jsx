import React, { useEffect } from 'react'
import './About.css'
import cloudDownloadImg from '../../Assets/Download.svg'
import Profile from '../../Assets/Profile.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Resume from '../../Assets/Upendra_SDE_Resume.pdf'

export default function About() {
    useEffect(()=>{
        AOS.init({duration:2000})
    })
  return (
    <>
        <div className="about-section text-white" id='about'>
            <div className="about-container">
                <div className="left" data-aos='fade-right'>
                    <div className="wrapper-picborder">
                        <div className="picBorder">
                            <img className='img' src={Profile} alt="" />
                        </div>
                    </div>
                    <div className="download-btn">
                        <img src={cloudDownloadImg} alt="downloadImg" />
                        <button className=' font-semibold' ><a href={Resume} download="Resume" target='_blank' >Download Resume</a></button>
                    </div>
                </div>
                <div className="right" data-aos='fade-left'>
                    <div className="description ">
                        <h2>ABOUT ME</h2>
                        <p>Hello everyone, I am Upendra, currently pursuing my final year bachelor's degree from IIIT Bhubaneswar. I am a passionate Django developer, machine learning and deep learning enthusiast, and an avid problem solver. Dedicated to crafting elegant and efficient solutions, I enjoy working in teams and continuously exploring new technologies and frameworks to stay at the forefront of innovation.</p>
                        <p><span>NAME: </span>Upendra</p>
                        <p><span>DATE OF BIRTH: </span>10 November 2003</p>
                        <p><span>NATIONALITY: </span>Indian</p>
                        <p><span>PHONE: </span>+91 9390118770</p>
                        <p><span>E-MAIL: </span>upendrakarimi2003@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
