import React from 'react'
import '../../Pages/Contact/Contact.css'
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

export default function FooterIcons() {
  return (
    <>
      <div className='text-2xl  flex text-white footer-icons'>
        <div className="circle">
            <a href="https://www.instagram.com/upendra.10"><AiOutlineInstagram/></a>
        </div>
        <div className="circle">
            <a href="https://www.linkedin.com/in/karimi-upendra/"><AiOutlineLinkedin/></a>
        </div>
        <div className="circle">
            <a href="https://github.com/Upendra2003"><AiOutlineGithub/></a>
        </div>
      </div>
    </>
  )
}
