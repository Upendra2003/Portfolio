import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

export default function SocialMedia() {
  return (
    <div className='text-2xl ml-12 flex'>
      <a href="https://www.instagram.com/upendra.10"><AiOutlineInstagram className='ml-3 cursor-pointer'/></a>
      <a href="https://www.linkedin.com/in/karimi-upendra/"><AiOutlineLinkedin className='ml-3 cursor-pointer'/></a>
      <a href="https://github.com/Upendra2003"><AiOutlineGithub className='ml-3 cursor-pointer'/></a>
    </div>
  )
}
