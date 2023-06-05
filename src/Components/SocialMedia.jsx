import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import './style.css'

export default function SocialMedia() {
  return (
    <div>
      <div className="social-media-icons flex text-2xl">
        <AiOutlineInstagram className='icon'/>
        <AiOutlineLinkedin className='icon'/>
        <AiOutlineGithub className='icon'/>
      </div>
    </div>
  )
}
