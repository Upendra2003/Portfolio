import React, { useEffect, useState } from 'react'
import './index.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Education from './Pages/Education/Education'
import Experience from './Pages/Experience/Experience'
import Skills from './Pages/Skills/Skills'
import Contact from './Pages/Contact/Contact'
import ScrollToTop from '../src/Components/ScrollToTop/ScrollToTop'
import GridLoader from "react-spinners/GridLoader";

export default function App() {
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  },[]);
  return (
    <>
      {
        loading?
        <div className="app-container">
          <GridLoader color="#00B2FF" />
        </div>:
        <>
          <Home/>
          <About/>
          <Education/>
          <Experience/>
          <Skills/>
          <Contact/>
          <ScrollToTop/>
        </>
      }
    </>
  )
}
