import React from 'react'
import './house.css'
import { Link } from 'react-router-dom'
import { FaHouse, FaMapLocationDot } from 'react-icons/fa6'
import { MdBedroomBaby } from 'react-icons/md'
import { GrStatusCriticalSmall } from 'react-icons/gr'
import { IoIosPricetags } from 'react-icons/io'

const House = ({imgUrl,house,location,size,price,status,action,OnHandleClick,houseId}) => {
  return (
    <div className='house__card'>
        <div className="house__image">
            <img src={imgUrl} alt={house} />
        </div>
        <div className="house__content">
            <div className="house__basics">
            <div className="feature__contents">
                   <FaHouse className='footer__icon' />
                   <h3 className='content__p cp'>{house}</h3> 
                </div>
                <div className="feature__contents">
                        <FaMapLocationDot className='footer__icon'/>
                        <p className='content__p cp'>{location}</p>
                </div>
                <div className="feature__contents">
                   <MdBedroomBaby className='footer__icon' />
                   <h3 className='content__p cp'>{size}</h3> 
                </div>
            </div>
            <div className="house__basics">
            <div className="feature__contents">
                   <GrStatusCriticalSmall className='footer__icon' />
                   <h3 className='content__p cp '>{status}</h3> 
                </div>
                <div className="feature__contents">
                   <IoIosPricetags className='footer__icon' />
                   <h3 className='content__p cp'>{price}</h3> 
                </div>
                <button className='house__btn'><Link to={`/house/${houseId}`} className='nav__link'>{status}</Link></button>
       
            </div>
        </div>
      
    </div>
  )
}

export default House
