import React, { useEffect } from 'react'
import './Skills.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Progress_bar from '../../Components/Progress_Bar/Progress_Bar'
import './skills.css'

export default function Skills() {
  useEffect(()=>{
    AOS.init({duration:2000})
  });
  
  return (
    <>
      <div className="skills-section" id='skills'>
        <div className="skills-logos-grid" >

            {/* Languages */}
            <div className="languages">
                    <h2 className='skill-title' data-aos='fade-down'>LANGUAGES</h2>
                    <div className="lang-grid">
                      <div className="python mb-3" data-aos='fade-right'>
                        <h3 className='skill-name'>PYTHON</h3>
                        <Progress_bar progress='87'  height={6} />
                      </div>
                      <div className="c mb-3" data-aos='fade-right'>
                        <h3 className='skill-name'>C</h3>
                        <Progress_bar progress='80'  height={6} />
                      </div>
                      <div className="cpp mb-3" data-aos='fade-right'>
                        <h3 className='skill-name'>CPP</h3>
                        <Progress_bar progress='82'  height={6} />
                      </div>
                    </div>
            </div>

            {/* Graphic Design Skills */}
            <div className="design ml-20 mt-20 mr-20">
                    <h2 className='skill-title' data-aos='fade-down'>GRAPHIC DESIGN</h2>                    
                    <div className="lang-grid">
                      <div className="figma mb-3" data-aos='fade-left'>
                        <h3 className='skill-name'>FIGMA</h3>
                        <Progress_bar progress='90'  height={6} />
                      </div>
                      <div className="adobe-xd mb-3" data-aos='fade-left'>
                        <h3 className='skill-name'>ADOBE XD</h3>
                        <Progress_bar progress='80'  height={6} />
                      </div>
                      <div className="illustrator mb-3" data-aos='fade-left'>
                        <h3 className='skill-name'>ADOBE ILLUSTRATOR</h3>
                        <Progress_bar progress='82'  height={6} />
                      </div>
                      <div className="photoshop mb-3" data-aos='fade-left'>
                        <h3 className='skill-name'>ADOBE PHOTOSHOP</h3>
                        <Progress_bar progress='77'  height={6} />
                      </div>
                    </div>
            </div>


            {/* Backend Skills */}
            <div className="backend ml-20 mt-0">
                    <h2 className='skill-title' data-aos='fade-down'>BACKEND DEVELOPMENT</h2>                    
                    <div className="lang-grid">
                      <div className="python mb-3" data-aos='fade-right'>
                        <h3 className='skill-name'>PYTHON</h3>
                        <Progress_bar progress='90'  height={6} />
                      </div>
                      <div className="flask mb-3" data-aos='fade-right'>
                        <h3 className='skill-name'>FLASK</h3>
                        <Progress_bar progress='92'  height={6} />
                      </div>
                      <div className=" mb-3" data-aos='fade-right'>
                        <h3 className='skill-name'>DJANGO</h3>
                        <Progress_bar progress='86'  height={6} />
                      </div>
                      <div className=" mb-3" data-aos='fade-right'>
                        <h3 className='skill-name'>MYSQL</h3>
                        <Progress_bar progress='88'  height={6} />
                      </div>
                      <div className=" mb-3" data-aos='fade-right'>
                        <h3 className='skill-name'>MONGO DB</h3>
                        <Progress_bar progress='89'  height={6} />
                      </div>
                    </div>
            </div>


            {/* Frontend Skills */}
            <div className="frontend ml-20 mr-20 ">
                    <h2 className='skill-title' data-aos='fade-down'>FRONTEND DEVELOPMENT</h2>                    
                    <div className="lang-grid">
                      <div className=" mb-3" data-aos='fade-left'>
                        <h3 className='skill-name' >HTML5</h3>
                        <Progress_bar progress='90'  height={6} />
                      </div>
                      <div className=" mb-3" data-aos='fade-left'>
                        <h3 className='skill-name'>css</h3>
                        <Progress_bar progress='90'  height={6} />
                      </div>
                      <div className=" mb-3" data-aos='fade-left'>
                        <h3 className='skill-name' >JAVASCRIPT</h3>
                        <Progress_bar progress='80'  height={6} />
                      </div>
                      <div className=" mb-3" data-aos='fade-left'>
                        <h3 className='skill-name' >BOOTSTRAP</h3>
                        <Progress_bar progress='92'  height={6} />
                      </div>
                      <div className=" mb-3" data-aos='fade-left'>
                        <h3 className='skill-name'>REACT JS</h3>
                        <Progress_bar progress='82'  height={6} />
                      </div>
                      <div className=" mb-3" data-aos='fade-left'>
                        <h3 className='skill-name'>TAILWIND CSS</h3>
                        <Progress_bar progress='90'  height={6} />
                      </div>
                    </div>
            </div>


            {/* Version Control Skills */}
            <div className="vc ml-20">
                    <h2 className='skill-title' data-aos='fade-down'>VERSION CONTROL</h2>                    
                    <div className="lang-grid">
                      <div className=" mb-3" data-aos='fade-right'>
                        <h3 className='skill-name'>GIT</h3>
                        <Progress_bar progress='94'  height={6} />
                      </div>
                    </div>
            </div>
        </div>
      </div>
    </>
  )
}
