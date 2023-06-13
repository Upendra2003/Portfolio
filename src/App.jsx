import React from 'react'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Education from './Pages/Education/Education'
import Experience from './Pages/Experience/Experience'
import Skills from './Pages/Skills/Skills'
import Contact from './Pages/Contact/Contact'
import ScrollToTop from '../src/Components/ScrollToTop/ScrollToTop'

export default function App() {
  return (
    <>
      <Home/>
      <About/>
      <Education/>
      <Experience/>
      <Skills/>
      <Contact/>
      <ScrollToTop/>
    </>
  )
}
