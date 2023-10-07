import React from 'react'
import './Experience.css'
import experienceDetails from './experienceDetails.js'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { MdWorkOutline } from 'react-icons/md';

export default function Education() {
  let expirenceIconStyle={background:"#00B2FF"};
  return (
    <>
      <div className="experience-section text-white" id='experience'>
        <h2 className='heading'>WORK EXPERIENCE</h2>
        <VerticalTimeline>
            {
                experienceDetails.map(detail=>{
                    return(
                        <VerticalTimelineElement   
                            className="vertical-timeline-element--work" 
                            key={detail.key}
                            date={detail.date}
                            contentStyle={{background:"#414853"}}
                            contentArrowStyle={{ borderRight: '7px solid  #414853' }}
                            dateClassName='date'
                            iconStyle={expirenceIconStyle}
                            icon={<MdWorkOutline/>}
                        >
                        <h1 className='title'>{detail.title}</h1>
                        <h4 className='experience-description'>{detail.description}</h4>
                        </VerticalTimelineElement>
                    )
                })
            }
        </VerticalTimeline>
        <h2 className='heading' data-aos='fade-left'>PROFESSIONAL SKILLS</h2>
      </div>
    </>
  )
}
