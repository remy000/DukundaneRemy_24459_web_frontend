import React from 'react'
import { images } from '../../constants'
import './properties.css'

const Properties = () => {
  return (
    <div className='property__home' id='properties'>
        <h2 className='property__header'>Explore Our Properties</h2>
        <p className="property__p">we sell all types of Houses</p>
        <div className="home__property">
            <div className="property__image">
            <div className="property__subcard">
                <p className="prop__p">Apartment</p>
             <img src={images.aprt} alt="apartment" />
             </div>
            </div>
           
            <div className="property__image">
                <div className="property__subcard">
                <p className="prop__p">Villa</p>
                    <img src={images.home} alt="villas" />
                    
                </div>  
            </div>
            <div className="property__image">
            <div className="property__subcard">
            <p className="prop__p">Office</p>
                <img src={images.off} alt="office" />
                </div>
            </div>
            <div className="property__image">
            <div className="property__subcard">
            <p className="prop__p">family</p>
                <img src={images.fm} alt="" />
                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default Properties
