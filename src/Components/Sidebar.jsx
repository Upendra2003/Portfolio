import React from 'react'
import { RiAccountCircleLine } from 'react-icons/ri';
import { LuGraduationCap } from 'react-icons/lu';
import { MdWorkOutline } from 'react-icons/md';
import { VscChecklist } from 'react-icons/vsc';
import { FiPhone } from 'react-icons/fi';
import './style.css'

export default function Sidebar() {
  return (
    <div className='sidebar-icons'>
      <RiAccountCircleLine className='icons'/>
      <LuGraduationCap className='icons'/>
      <MdWorkOutline className='icons'/>
      <VscChecklist className='icons'/>
      <FiPhone className='icons'/>
    </div>
  )
}
