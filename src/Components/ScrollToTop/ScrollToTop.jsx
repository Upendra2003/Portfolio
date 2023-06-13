import React, { useEffect, useState } from 'react'
import {BsArrowBarUp} from 'react-icons/bs'
import '../../Pages/Contact/Contact.css'

export default function ScrollToTop() {
  const [isVisible,setIsVisible]=useState(false)
  const goToTopBtn=()=>{
    window.scrollTo({top:0,left:0,behavior:'smooth'})
  }

  const listenToScroll=()=>{
    let hiddenHeight=200;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if(winScroll>hiddenHeight){
      setIsVisible(true)
    }else{
      setIsVisible(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',listenToScroll)
  },[])
  return (
    <>
        {isVisible && <button className="scroll-btn" onClick={goToTopBtn}><BsArrowBarUp/></button> }
    </>
  )
}
