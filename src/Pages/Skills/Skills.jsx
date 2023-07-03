import React, { useEffect } from 'react'
import './Skills.css'
import c from '../../Assets/Skills/c.svg'
import cpp from '../../Assets/Skills/cpp.svg'
import py from '../../Assets/Skills/py.svg'
import html from '../../Assets/Skills/html.svg'
import css from '../../Assets/Skills/css.svg'
import js from '../../Assets/Skills/js.svg'
import flask from '../../Assets/Skills/flask.svg'
import react from '../../Assets/Skills/react.svg'
import mongodb from '../../Assets/Skills/mongodb.svg'
import tailwind from '../../Assets/Skills/tailwind.svg'
import xd from '../../Assets/Skills/xd.svg'
import git from '../../Assets/Skills/git.svg'
import ps from '../../Assets/Skills/ps.svg'
import ai from '../../Assets/Skills/ai.svg'
import ae from '../../Assets/Skills/ae.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Skills() {
  useEffect(()=>{
    AOS.init({duration:2000})
  })
  return (
    <>
      <div className="skills-section" id='skills'>
        <h2 className='heading' data-aos='fade-left'>PROFESSIONAL SKILLS</h2>
        <div className="skills-logos-grid pb-10" >
            <img data-aos='fade-zoom-in' src={c} alt="" />
            <img data-aos='fade-zoom-in' src={cpp} alt="" />
            <img data-aos='fade-zoom-in' src={py} alt="" />
            <img data-aos='fade-zoom-in' src={html} alt="" />
            <img data-aos='fade-zoom-in' src={css} alt="" />
            <img data-aos='fade-zoom-in' src={js} alt="" />
            <img data-aos='fade-zoom-in' src={flask} alt="" />
            <img data-aos='fade-zoom-in' src={react} alt="" />
            <img data-aos='fade-zoom-in' src={mongodb} alt="" />
            <img data-aos='fade-zoom-in' src={tailwind} alt="" />
            <img data-aos='fade-zoom-in' src={git} alt="" />
            <img data-aos='fade-zoom-in' src={xd} alt="" />
            <img data-aos='fade-zoom-in' src={ps} alt="" />
            <img data-aos='fade-zoom-in' src={ai} alt="" />
            <img data-aos='fade-zoom-in' src={ae} alt="" />
        </div>
      </div>
    </>
  )
}
