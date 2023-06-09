import React from 'react'
import './Education.css'
import educationDetails from './educationDetails.js'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { LuGraduationCap } from 'react-icons/lu';

export default function Education() {
  let educationIconStyle={background:"#00B2FF"};
  return (
    <>
      <div className="education-section text-white" id='education'>
        <h2 className='heading'>EDUCATION</h2>
        <VerticalTimeline>
            {
                educationDetails.map(detail=>{
                    return(
                        <VerticalTimelineElement   
                            className="vertical-timeline-element--education" 
                            key={detail.key}
                            date={detail.date}
                            contentStyle={{background:"#414853"}}
                            contentArrowStyle={{ borderRight: '7px solid  #414853' }}
                            dateClassName='date'
                            iconStyle={educationIconStyle}
                            icon={<LuGraduationCap/>}
                        >
                        <h1 className='title'>{detail.title}</h1>
                        <h4 className='education-description'>{detail.description}</h4>
                        </VerticalTimelineElement>
                    )
                })
            }
        </VerticalTimeline>
      </div>
    </>
  )
}
