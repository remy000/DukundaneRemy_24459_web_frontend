import React, { useEffect, useState } from 'react'
import './allhouse.css'
import { Link, useNavigate } from 'react-router-dom';

const AllHouse = () => {
  const[houses,setHouses]=useState([]);
  const[loading,setLoading]=useState(true);
  const[houseLength,setHouseLength]=useState(0);
  const token=sessionStorage.getItem('token');
  const[message,setMessage]=useState('');
  const navigate=useNavigate();
  useEffect(()=>{
    const fetchHouse=async()=>{
      try {
        const response=await fetch("http://localhost:8080/houses/getAllHouses",{
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        if(response.ok){
          const data=await response.json();
          setHouses(data);
          setLoading(false);
          setHouseLength(data.length);
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

  },[token])
  sessionStorage.setItem('houseLength',houseLength);
  const handleDelete=async(id)=>{
    try {
      const response=await fetch(`http://localhost:8080/houses/deleteHouse/${id}`,{
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      if(response.ok){
        setMessage("House Deleted");
        navigate("/admin");
      }
      else{
        console.log("failed");
      }
    } catch (error) {
      console.log(error);
    }
  }
  if (loading) {
    return <p>Loading...</p>; 
  }
  return (
    <div>
        <div className="content__header">
        <input type='text' className='sidebar__input' placeholder='search here....'/>
        </div>
      <button className='house_btn'><Link to='/newhouse' className='all__link'>Add New House</Link></button>
      {message && <span className="message">{message}</span>}
      <table>
      <thead>
        <tr>
          <th>#</th>
          <th>House Type</th>
          <th>Location</th>
          <th>Size</th>
          <th>Price</th>
          <th>Status</th>
          <th>availability</th>
        </tr>
      </thead>
      <tbody>
        {houses.map((house) => (
          <tr key={house.id}>
            <td>{house.id}</td>
            <td>{house.houseType}</td>
            <td>{house.location}</td>
            <td>{house.size}</td>
            <td>{house.price}</td>
            <td>{house.status}</td>
            <td>{house.availability}</td>
            <td>
              <div className="house__button">
                <button className='update__btn'><Link to={`/updateHouse/${house.id}`} className='nav__link'>Update</Link></button>
                <button className='delete__btn' onClick={(id)=>handleDelete(house.id)}>delete</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default AllHouse
