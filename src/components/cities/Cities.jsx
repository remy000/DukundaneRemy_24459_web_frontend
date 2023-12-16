import React from 'react'
import { images } from '../../constants'
import './cities.css'

const Cities = () => {
  return (
    <div className='city__home' id='explore'>
        <h2 className='city__header'>Explore Our cities</h2>
        <p className='city__p'>We Work in Every city of Country</p>
        <div className='home__city'>
            <div className='city__card'>
                <div className='city__subcard'>
                <img src={images.c2} alt="musanze" />
                
                </div>
                <div className='city__subcard'>
                   <img src={images.c4} alt="" />
                </div>

            </div>
            <div className="city__card cards">
                <img src={images.kgl} alt="" />
            </div>
            <div className='city__card'>
                <div className='city__subcard'>
                    <img src={images.c1} alt="" />
                </div>
                <div className='city__subcard'>
                    <img src={images.c3} alt="" />
                </div>

            </div>

        </div>
       
      
    </div>
  )
}

export default Cities
