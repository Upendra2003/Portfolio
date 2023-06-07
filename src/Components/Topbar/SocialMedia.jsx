import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

export default function SocialMedia() {
  return (
    <div className='text-2xl ml-12 flex'>
      <AiOutlineInstagram className='ml-3 cursor-pointer'/>
      <AiOutlineLinkedin className='ml-3 cursor-pointer'/>
      <AiOutlineGithub className='ml-3 cursor-pointer'/>
    </div>
  )
}
