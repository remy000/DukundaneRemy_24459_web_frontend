import React from 'react'
import  './about.css'
import { MdGroups } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
const About = () => {
  return (
    <div className='about' id='about'>
        <h1 className='about__header'>Why You Choose Us?</h1>
        <p className='about__p'>we provide full Services</p>
        <div className='about__home'>
            <div className="about__card">
                <div className="about__icon">
                <MdGroups className='about__img' />
                </div>
                <div className="about__content">
                    <h2 className='content__headers'>Trusted by Thousands</h2>
                    <p>we work with over a thousand of people from all part of Country and Africa </p>
                </div>
            </div>
            <div className="about__card">
                <div className="about__icon">
                <FaHouseUser className='about__img images'/>
                </div>
                <div className="about__content">
                   <h2 className='content__headers'>Dream House</h2>
                    <p>we have all types of houses we are here to serve our client </p>
                    
                </div>
            </div>
            <div className="about__card">
                <div className="about__icon">
                <MdPayments className='about__img images'/>
                </div>
                <div className="about__content">
                <h2 className='content__headers'>Easy&Fast Payment</h2>
                    <p>we work with over a thousand of people from all part of Country and Africa </p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About
