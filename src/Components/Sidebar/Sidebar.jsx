import React from 'react'
import { VscAccount } from 'react-icons/vsc';
import { LuGraduationCap } from 'react-icons/lu';
import { MdWorkOutline } from 'react-icons/md';
import { RiUserSettingsLine } from 'react-icons/ri';
import { BsTelephone } from 'react-icons/bs';
import '../../Pages/Home/Home.css'

export default function Sidebar() {
  return (
    <div className='text-3xl m-10 p-10 icons'>
      <VscAccount className='icon'/>
      <LuGraduationCap className='icon'/>
      <MdWorkOutline className='icon'/>
      <RiUserSettingsLine className='icon'/>
      <BsTelephone className='icon'/>
    </div>
  )
}
