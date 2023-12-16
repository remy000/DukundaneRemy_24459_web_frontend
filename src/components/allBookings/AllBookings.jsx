import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AllBookings = () => {
    const[bookings,setBookings]=useState([]);
    const[allBookings,setAllBookings]=useState(0);
    const[loading,setLoading]=useState(true);
    const token=sessionStorage.getItem('token');
    const[message,setMessage]=useState('');
    const navigate=useNavigate();
    useEffect(()=>{
        const fetchBookings=async()=>{
            try{
            const response=await fetch("http://localhost:8080/booking/allBookings",{
                method: 'GET',
                headers: {
                  Authorization: `Bearer ${token}`, 
                },
                
            })
            if(response.ok){
                const data=await response.json();
                setBookings(data);
                setAllBookings(data.length);
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
        fetchBookings();
       
    },[token])
    sessionStorage.setItem('bookings',allBookings);
    const handleDelete=async(id)=>{
      try {
        const response=await fetch(`http://localhost:8080/booking/deleteBooking/${id}`,{
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        if(response.ok){
          setMessage("Booking Deleted");
          navigate("/admin");
        }
        else{
          console.log("failed");
        }
      console.log(id);
       } catch (error) {
         console.log(error);
      }

    }
    if(loading){
        <p>Loading....</p>
    }
  return (
   
    <div>
        <div className="content__header">
        <input type='text' className='sidebar__input' placeholder='search here....'/>
        </div>
        {message && <span className="message">{message}</span>}
    <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Client Names</th>
        <th>Client email</th>
        <th>House ID</th>
        <th>House Type</th>
        <th>Location</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {bookings.map((booking) => (
        <tr key={booking.bkid}>
          <td>{booking.bkid}</td>
          <td>{booking.names}</td>
          <td>{booking.email}</td>
          <td>{booking.houseid}</td>
          <td>{booking.houseType}</td>
          <td>{booking.location}</td>
          <td>{booking.status}</td>
          <td>
          <div className="house__button">
                <button className='delete__btn' onClick={()=>handleDelete(booking.bkid)}>delete</button>
              </div>
          </td>
        </tr>
      ))} 
    </tbody>
  </table>
  </div>
  )
}

export default AllBookings
