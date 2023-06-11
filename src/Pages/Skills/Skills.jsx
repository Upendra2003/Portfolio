import React from 'react'
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

export default function Skills() {
  return (
    <>
      <div className="skills-section" id='skills'>
        <h2 className='heading'>PROFESSIONAL SKILLS</h2>
        <div className="skills-logos-grid">
            <img src={c} alt="" />
            <img src={cpp} alt="" />
            <img src={py} alt="" />
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={flask} alt="" />
            <img src={react} alt="" />
            <img src={mongodb} alt="" />
            <img src={tailwind} alt="" />
            <img src={git} alt="" />
            <img src={xd} alt="" />
            <img src={ps} alt="" />
            <img src={ai} alt="" />
            <img src={ae} alt="" />
        </div>
      </div>
    </>
  )
}
