import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaHouse, FaMapLocationDot } from 'react-icons/fa6';
import { MdBedroomBaby } from 'react-icons/md';
import { IoIosPricetags } from 'react-icons/io';
import './houseDetail.css'
import { IoArrowBackCircle } from "react-icons/io5";
import {jwtDecode} from 'jwt-decode'
const HouseDetail = () => {
    const { id } = useParams();
    const[selectedHouse,setSelectedHouse]=useState([]);
    const [loading,setLoading]=useState(true);
    const token=sessionStorage.getItem('token');
    const navigate=useNavigate();
    useEffect(()=>{
      const fetchHouse=async()=>{
        try {
          const response=await fetch(`http://localhost:8080/houses/getOneHouse/${id}`,{
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          });
          if(response.ok){
            const data=await response.json();
            setSelectedHouse(data);
            setLoading(false);
          }
          else{
            throw new Error('Network response was not ok');
          }
          
        } catch (error) {
          console.error('Error fetching houses:', error);
          setLoading(false);
        }
      };
      fetchHouse();

    },[token,id])
    if (loading) {
      return <p>Loading...</p>; 
    }
  
  if (!selectedHouse) {
    return <p>House not found.</p>;
  }

  const handleBooking=async()=>{
    if(token){
      const decodedToken = jwtDecode(token);
      const email=decodedToken.sub;
      const formData=new FormData();
      formData.append("email",email);
      formData.append("id",selectedHouse.id);
      if (!email || !id) {
        console.error('User email or houseId not available');
        return;
      }
      try {
        const response=await fetch("http://localhost:8080/booking/saveBook",{
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });
        if(response.ok){
          console.log('Booked Successfull');
          navigate("/houses");
          
        }
        else{
          console.log("booking failed");
        }
        
      } catch (error) {
        console.error('Error:', error);
        
      }
    }
  }
  return (
    <div className='details__homepage'>
       <Link to='/houses'><IoArrowBackCircle className='details__icon'/></Link>
        <h2 className='about__header detail__header'>House Details</h2>
        <div className="details__home">
            <div className="details__house">
                <div className="details__image">
                <img src={selectedHouse.imagePath} alt="" />
                </div>
              <div className="details__content">
                <div className="feature__contents">
                    <FaHouse className='footer__icon' />
                    <h3 className='content__p cp'>{selectedHouse.houseType}</h3> 
                    </div>
                    <div className="feature__contents">
                            <FaMapLocationDot className='footer__icon'/>
                            <p className='content__p cp'>{selectedHouse.location}</p>
                    </div>
                    <div className="feature__contents">
                    <MdBedroomBaby className='footer__icon' />
                    <h3 className='content__p cp'>{selectedHouse.size}</h3> 
                    </div>
                    <div className="feature__contents">
                    <IoIosPricetags className='footer__icon' />
                    <h3 className='content__p cp'>{selectedHouse.price} RWF</h3> 
                    </div>
                    <div className="details-buttons">
                    <button type='submit' onClick={handleBooking} className='detail__btn'>Book</button>
                    </div>
                   
              </div>

            </div>     
        </div>
        
    </div>
  )
}

export default HouseDetail
