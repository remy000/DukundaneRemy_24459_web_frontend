import React, { useEffect, useState } from 'react'
import { IoArrowBackCircleSharp } from 'react-icons/io5'
import { Link, useNavigate, useParams } from 'react-router-dom'

const UpdateHouse = () => {
    const { id } = useParams();
    const[houseType,setHouseType]=useState('');
    const[location,setLocation]=useState('');
    const[size,setSize]=useState('');
    const[price,setPrice]=useState(0);
    const[status,setStatus]=useState('');
    const[availability,setAvailability]=useState('');
    const[message,setMessage]=useState('');
    const[error,setError]=useState('');
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
              setHouseType(data.houseType);
              setLocation(data.location);
              setSize(data.size);
              setPrice(data.price);
              setStatus(data.status);
              setAvailability(data.availability);
              
            }
            else{
              throw new Error('Network response was not ok');
            }
            
          } catch (error) {
            console.error('Error fetching houses:', error);
          }
        };
        fetchHouse();
  
      },[token,id])


      const handleUpdate=async(e)=>{
        e.preventDefault();
        try{
            const response=await fetch(`http://localhost:8080/houses/updateHouse/${id}`,{
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`, 
                  },
                  body:JSON.stringify({houseType,location,size,price,status,availability})
            });
            if(response.ok){
                setMessage("House Updated Successfully");
                navigate("/admin")

            }
            else{
                setError('failed to update House');
            }

        }catch(error){
            setError("something wrong",error);

        }
      }
  return (
    <div className='newhouse__homepage'>
    <Link to='/admin'><IoArrowBackCircleSharp className='details__icon iconss'/></Link>
   <h2 className='new__header'>Update House</h2>
   <form className="sign__form" onSubmit={handleUpdate}>
   {error && <span className="error">{error}</span>}
   {message && <span className="message">{message}</span>}
       <label className='login__label'>HouseType</label>
         <input type='text' placeholder='Enter HouseType' name='houseType' className='login__input'
         value={houseType}
         onChange={(e)=>setHouseType(e.target.value)}
         />
       <label className='login__label'>Location</label>
         <input type='text' placeholder='Enter Location' name='houseLocation' className='login__input'
         value={location}
         onChange={(e)=>setLocation(e.target.value)}
         
         />
           <label className='login__label'>size</label>
           <input type='text' placeholder='Enter House size' name='size' className='login__input'
           value={size}
           onChange={(e)=>setSize(e.target.value)}
           />
           <label className='login__label'>Price</label>
           <input type='number' placeholder='Enter house Price' name='price' className='login__input'
           value={price}
           onChange={(e)=>setPrice(e.target.value)}
           />
           <label className='login__label'>Status</label>
           <input type='text' name='houseStatus' className='login__input'
           value={status}
           onChange={(e)=>setStatus(e.target.value)}/>
           <label className='login__label'>availability</label>
           <input type='text' name='availability' className='login__input'
           value={availability}
           onChange={(e)=>setAvailability(e.target.value)}/>

           <button type='submit' className='form__btn'>Update</button>

   </form>

   
 
</div>
  )
}

export default UpdateHouse
