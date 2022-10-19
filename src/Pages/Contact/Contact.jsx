import React from 'react';
import "./Contact.scss";

const Contact = () => {

  const contactInfo = [
    {title: "Call me", details: "08168989283"},
    {title: "Location", details: "Lagos - Nigeria"},
    {title: "Email", details: "talk@tewizy.com"},
  ]
  return (
    <div className='app__contact'>
      
      <div className="app__contact-content">
        <div className="app_contact-main">
          <h2 className='app__contact-head'>Get in touch</h2>
          <p className='app__contact-p'>I am here to help you laugh up</p>

          <div className="app__contacts-info">

          {contactInfo.map((contact, index) =>(
              <div className="app__contact-details" key={index}>
                <h3 className='contact-title'>{contact.title}</h3>
                <p className='p-text'>{contact.details}</p>
            </div>
          ))}
          </div>
          <div className="app__contact-form">
              <input type="text" placeholder='Your Name' maxLength={40}/>
              <input type="email" placeholder='Your Email' maxLength={70}/>
              <textarea name="" id="" cols="30" rows="10" placeholder='Enter your Message'></textarea>
          </div>
          <button type='submit' className='submit-btn'>Submit</button>
        </div>
        
      </div>
    </div>
  )
}

export default Contact
