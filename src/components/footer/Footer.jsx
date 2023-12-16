import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiLinkSimpleBold } from "react-icons/pi";
import { FaCity } from "react-icons/fa";
import { FaInstagramSquare, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import './footer.css'
const Footer = () => {
  return (
    <div className='foot'>
    <div className='footer'>
        <div className='footer__contact'>
            <h3 className='footer__header'>Contact Us</h3>
            <div className='contact__footer'>
                <MdEmail className='footer__icon'/>
                <p className='footer__p'>Email: Nyrealestate@gmail.com</p>
            </div>
            <div className='contact__footer'>
                <FaPhoneAlt className='footer__icon'/>
                <p className='footer__p'>Phone: +20788993221</p>
            </div>
            <div className='contact__footer'>
                <FaLocationDot className='footer__icon'/>
                <p className='footer__p'>Address: Kigali, Rwanda</p>
            </div>

        </div>
        <div className='footer__contact'>
        <h3 className='footer__header'>Quick Links</h3>
           <div className='contact__footer'>
                <PiLinkSimpleBold className='footer__icon'/>
                <a href='#home' className='footer__p'>Home</a>
            </div>
            <div className='contact__footer'>
                <PiLinkSimpleBold className='footer__icon'/>
                <a  href='#feature' className='footer__p'>Feature</a>
            </div>
            <div className='contact__footer'>
                <PiLinkSimpleBold className='footer__icon'/>
                <a href='#about' className='footer__p'>About</a>
            </div>
            <div className='contact__footer'>
                <PiLinkSimpleBold className='footer__icon'/>
                <a href="#contact" className='footer__p'>Contact us</a>
            </div>

        </div>
        <div className='footer__contact'>
        <h3 className='footer__header'>Discover</h3>
           <div className='contact__footer'>
                <FaCity className='footer__icon'/>
                <p className='footer__p'>Kigali</p>
            </div>
            <div className='contact__footer'>
                <FaCity className='footer__icon'/>
                <p className='footer__p'>Musanze</p>
            </div>
            <div className='contact__footer'>
                <FaCity className='footer__icon'/>
                <p className='footer__p'>Rubavu</p>
            </div>
            <div className='contact__footer'>
                <FaCity className='footer__icon'/>
                <p className='footer__p'>Rusizi</p>
            </div>
            <div className='contact__footer'>
                <FaCity className='footer__icon'/>
                <p className='footer__p'>Muhanga</p>
            </div>

        </div>
       
     
      
    </div>
    <div className="footer_social">
            <FaInstagramSquare className='footer__icons'/>
            <FaLinkedin className='footer__icons' />
            <IoLogoWhatsapp className='footer__icons'/>
            <FaTelegramPlane className='footer__icons'/>


        </div>
    </div>
    
  )
}

export default Footer
