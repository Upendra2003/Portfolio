import React, { useState } from 'react'
import './Contact.css'
import FooterIcons from '../../Components/FooterIcons/FooterIcons'
import Footer from '../../Components/Footer/Footer'
import axios from 'axios'

export default function Contact() {
  const [data,setData]=useState({
    name:'',
    msg:'',
  });
  const {name,msg}=data;
  const handleOnChange=e=>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const handleOnSubmit=e=>{
    e.preventDefault();
    axios.post('https://portfolio-a896d-default-rtdb.firebaseio.com/messages.json',data).then(console.log("Successfully sent data"))
  }
  return (
    <>
      <div className="contact-section" id='contact'>
        <h2 className='heading'>LET’S CONNECT !</h2>
        <p className='msg-para'>Thank you for your interest and for taking the time to connect. I look forward to hearing from you and discussing how we can make your web design and development aspirations a reality! </p>
        <form onSubmit={handleOnSubmit} className='flex w-full flex-col'>
          <div className='inputs'>
            <div className="name-input">
              <label>Name</label>
              <input type="text" name='name' value={name} onChange={handleOnChange} className='name' />
            </div>
            <div className="msg-input">
              <label>Message</label>
              <input type="text" name='msg' value={msg} onChange={handleOnChange} className='msg' />
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
