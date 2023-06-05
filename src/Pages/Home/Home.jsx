import React from 'react'
import '../Home/Home.css'
import Spline from '@splinetool/react-spline';
import SocialMedia from '../../Components/SocialMedia';
import Sidebar from '../../Components/Sidebar';

export default function Home() {
  return (
    <>
      <div className="container">
        <SocialMedia/>
        <div className='main'>
            <div className="right">
              <h4>Hello !</h4>
              <h2>I'm UPENDRA</h2>
              <p>Web developer and Graphic designer</p>
            </div>
            <div className="left">
              <Sidebar/>
            </div>
        </div>
      </div>
    </>
  )
}
