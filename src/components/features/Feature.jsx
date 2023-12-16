import React from 'react'
import { images } from '../../constants'
import "./feature.css"
import { FaHouse,FaMapLocationDot } from "react-icons/fa6";
import { MdBedroomBaby } from "react-icons/md"
import { IoIosPricetags } from "react-icons/io";
import { GrStatusCriticalSmall } from "react-icons/gr";

const Feature=()=> {
  return (
    <div className='home__feature' id='features'>
        <h2 className='feature__header'>Feature Properties</h2>
        <p className='feature__p'>Explore some of our properties</p>
        <div className='feature__home'>
        <div className='feature__card'>
            <div className='feature__img'>
                <img src={images.f1} alt="feature" />

            </div>
            <div className="feature__content">
                <div className="feature__contents">
                   <FaHouse className='footer__icon' />
                   <h3>Apartment</h3> 
                </div>
                    <div className="feature__contents">
                        <FaMapLocationDot className='footer__icon'/>
                        <p className='content__p'>Nyarutarama</p>
                        </div>

                <div className="feature__contents">
                   <MdBedroomBaby className='footer__icon' />
                   <h3 className='content__p'>5 rooms</h3> 
                </div>
                <div className="feature__contents">
                   <GrStatusCriticalSmall className='footer__icon' />
                   <h3 className='content__p'>status: Rent</h3> 
                </div>
                <div className="feature__contents">
                   <IoIosPricetags className='footer__icon' />
                   <h3 className='content__p'>Price: $1000</h3> 
                </div>
             
                
            </div>
      </div>
      <div className='feature__card'>
            <div className='feature__img'>
                <img src={images.f2} alt="feature" />
                
            </div>
            <div className="feature__content">
            <div className="feature__contents">
                   <FaHouse className='footer__icon' />
                   <h3>Business</h3> 
                </div>
                    <div className="feature__contents">
                        <FaMapLocationDot className='footer__icon'/>
                        <p className='content__p'>Remera</p>
                        </div>

                <div className="feature__contents">
                   <MdBedroomBaby className='footer__icon' />
                   <h3 className='content__p'>5 office</h3> 
                </div>
                <div className="feature__contents">
                   <GrStatusCriticalSmall className='footer__icon' />
                   <h3 className='content__p'>status: Rent</h3> 
                </div>
                <div className="feature__contents">
                   <IoIosPricetags className='footer__icon' />
                   <h3 className='content__p'>Price: $800</h3> 
                </div>
            
            </div>
      </div>
      <div className='feature__card'>
            <div className='feature__img'>
                <img src={images.f3} alt="feature" />

            </div>
            <div className="feature__content">
            <div className="feature__contents">
                   <FaHouse className='footer__icon' />
                   <h3>Villa</h3> 
                </div>
                    <div className="feature__contents">
                        <FaMapLocationDot className='footer__icon'/>
                        <p className='content__p'>Kimironko</p>
                        </div>

                <div className="feature__contents">
                   <MdBedroomBaby className='footer__icon' />
                   <h3 className='content__p'>7 rooms</h3> 
                </div>
                <div className="feature__contents">
                   <GrStatusCriticalSmall className='footer__icon' />
                   <h3 className='content__p'>status: sell</h3> 
                </div>
                <div className="feature__contents">
                   <IoIosPricetags className='footer__icon' />
                   <h3 className='content__p'>Price:$100,000</h3> 
                </div>

             </div>
      </div>
      <div className='feature__card'>
          <div className='feature__img'>
            <img src={images.fm} alt="" />

          </div>
          <div className="feature__content">
          <div className="feature__contents">
                   <FaHouse className='footer__icon' />
                   <h3>Family</h3> 
                </div>
                    <div className="feature__contents">
                        <FaMapLocationDot className='footer__icon'/>
                        <p className='content__p'>Kibagabaga</p>
                        </div>

                <div className="feature__contents">
                   <MdBedroomBaby className='footer__icon' />
                   <h3 className='content__p'>5 rooms</h3> 
                </div>
                <div className="feature__contents">
                   <GrStatusCriticalSmall className='footer__icon' />
                   <h3 className='content__p'>status: sell</h3> 
                </div>
                <div className="feature__contents">
                   <IoIosPricetags className='footer__icon' />
                   <h3 className='content__p'>Price:$90,000</h3> 
                </div>

          </div>
      </div>

        </div>
        <button className='btn'> View More</button>
        
      
    </div>
  )
}

export default Feature
