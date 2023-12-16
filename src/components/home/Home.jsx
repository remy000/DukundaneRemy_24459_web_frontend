import React from 'react'
import { images } from '../../constants'
import "./home.css"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home__page app__bg' id='Home'>
        <nav className='home__navbar'>
            <div className='navbar__logo'>
                <img src={images.logo} alt="logo" />
            </div>
            <div className='navbar__content'>
                     <a className='nav__link' href='#Home'>Home</a>
                     <a className='nav__link' href='#features'>Features</a>
                     <a className='nav__link' href='#about'>AboutUs</a>
                     <a className='nav__link' href='#explore'>Explore</a>
                     <a className='nav__link' href='#properties'>Properties</a>
                     <a className='nav__link' href='#contact'>Contact Us</a>
                     <Link className='nav__link' to="/login">Login</Link>    
            </div>
        </nav>
      <div className='home__content'>
        <h1>Find Better Home</h1>
        <p>Start your journey today. Browse our listings, connect with our team, and let us help you find the perfect place to create lasting memories</p>
        <button>Get Started</button>
      </div>
    </div>
  )
}

export default Home
