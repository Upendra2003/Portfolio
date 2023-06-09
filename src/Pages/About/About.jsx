import React from 'react'
import './About.css'
import cloudDownloadImg from '../../Assets/Download.svg'
import Interests from '../../Components/Interests/Interests'

export default function About() {
  return (
    <>
        <div className="about-section text-white" id='about'>
            <div className="about-container">
                <div className="left">
                    <div className="wrapper-picborder">
                        <div className="picBorder">
                            <div className="img"></div>
                        </div>
                    </div>
                    <div className="download-btn">
                        <img src={cloudDownloadImg} alt="downloadImg" />
                        <button className=' font-semibold'>Download Resume</button>
                    </div>
                </div>
                <div className="right">
                    <div className="description ">
                        <h2>ABOUT ME</h2>
                        <p>Hello everyone, I am Upendra currently pursuing my 2nd year bachelor's degree from IIIT Bhubaneswar.Passionate programmer and problem solver, dedicated to crafting elegant and efficient solutions. I constantly explore new technologies and frameworks to stay at the forefront of innovation. </p>
                        <p><span>NAME: </span>Upendra</p>
                        <p><span>DATE OF BIRTH: </span>10 November 2003</p>
                        <p><span>NATIONALITY: </span>Indian</p>
                        <p><span>PHONE: </span>+91 9390118770</p>
                        <p><span>E-MAIL: </span>upendrakarimi2003@gmail.com</p>
                    </div>
                </div>
            </div>
            <Interests/>
        </div>
    </>
  )
}
