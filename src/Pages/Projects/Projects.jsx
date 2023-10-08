import React from 'react'
import './Projects.css'
import projectDetails from './projectDetails'

export default function Projects() {
  return (
    <>
      <div className="projects-section">
      <h2 className='heading' data-aos='fade-left'>PROJECTS</h2>
      <div className="projects">
        {
            projectDetails.map(detail=>{
                return(
                    <div className="project-card" data-aos='fade-down'>
                        <img src={detail.img} alt="Avatar" style={{width:'100%'}}/>
                        <div className="project-container">
                            <h4><b>{detail.title}</b></h4> 
                            <p className=' text-white'>{detail.desc}</p> 
                            <a href={detail.source_code}>Source Code&#8599;</a> 
                        </div>
                    </div>
                )
            })
        }
      </div>
      </div>
    </>
  )
}
