import React from 'react'
import { images } from '../../constants'
import './contact.css'


const Contact = () => {
  return (
    <div className='contact__home' id='contact'>
        <h2 className="contact__header">Contact Us</h2>
        <div className="home__contact">
        <div className="contact__images">
            <div className="contact__sub">
                <p className="contact__p">We are Here to serve you</p>
                <img src={images.office} alt="office" />
            </div>

        </div>
        <div className="contact__content">
            <div className="contact__info">
                <form className='contact_form'>
                    <label className='form__label'>Name</label>
                    <input type='text' placeholder='Enter Name' className='form__input'/>
                    <label className='form__label'>Email</label>
                    <input type='email' placeholder='Enter Email' className='form__input'/>
                    <label className='form__label'>subject</label>
                    <textarea name="subject" id="" cols="30" rows="10" className='textarea'></textarea>
                    <button type='submit' className='form__btn'>Submit</button>
                </form>

            </div>
                
            <div className="contact__social">

            </div>
        </div>

        </div>
        
      
    </div>
  )
}

export default Contact
