import React from 'react'
import './Contact.css'
import FooterIcons from '../../Components/FooterIcons/FooterIcons'
import Footer from '../../Components/Footer/Footer'

export default function Contact() {
  return (
    <>
      <div className="contact-section" id='contact'>
        <h2 className='heading'>LET’S CONNECT !</h2>
        <p className='msg-para'>Thank you for your interest and for taking the time to connect. I look forward to hearing from you and discussing how we can make your web design and development aspirations a reality! </p>
        <form action="" className='flex w-full flex-col'>
          <div className='inputs'>
            <div className="name-input">
              <label>Name</label>
              <input type="text" name='name' className='name' />
            </div>
            <div className="msg-input">
              <label>Message</label>
              <input type="text" name='name' className='msg' />
            </div>
          </div>
          <button className="send-btn">Send Message</button>
        </form>
        <FooterIcons/>
        <Footer/>
      </div>
    </>
  )
}
