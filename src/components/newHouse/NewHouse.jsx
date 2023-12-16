import React, { useState } from 'react'
import './newhouse.css'
import { Link } from 'react-router-dom'
import { IoArrowBackCircleSharp } from 'react-icons/io5'

const NewHouse = () => {
    const[message,SetMessage]=useState('');
    const[error,setError]=useState('');
     const [fileName, setFileName] = useState('Choose file');
    const token=sessionStorage.getItem('token');

    const handleFileChange = (e) => {
    const selectedFileName = e.target.files[0]?.name || 'Choose file';
    setFileName(selectedFileName);
  };
    const handleSubmit=async(e)=>{
        
        e.preventDefault();
        const form=e.target;
        const formData=new FormData(form);
        // const imageFile=formData.get('image');
        formData.set('availability','free');
        
        // if (!imageFile) {
        //     setError('Please fill in all fields');
        //     return;
        //   } 
       
          try {
            const response=await fetch("http://localhost:8080/houses/saveHouse",{
                method:'POST',
                headers:{
                     Authorization: `Bearer ${token}`,
                },
                body:formData,
            });
            if(response.ok){
                SetMessage('house Saved successfully');
            }
            else{
                setError('House not saved')
            }

          } catch (error) {
            setError('something went wrong');
          }
    }
  return (
    <div className='newhouse__homepage'>
         <Link to='/admin'><IoArrowBackCircleSharp className='details__icon iconss'/></Link>
        <h2 className='new__header'>Add New House</h2>
        <form onSubmit={handleSubmit} className="sign__form" encType="multipart/form-data">
        {error && <span className="error">{error}</span>}
        {message && <span className="message">{message}</span>}
            <label className='login__label'>HouseType</label>
              <input type='text' placeholder='Enter HouseType' name='houseType' className='login__input'/>
            <label className='login__label'>Location</label>
              <input type='text' placeholder='Enter Location' name='location' className='login__input'/>
                <label className='login__label'>size</label>
                <input type='text' placeholder='Enter House size' name='size' className='login__input'/>
                <label className='login__label'>Price</label>
                <input type='number' placeholder='Enter house Price' name='price' className='login__input'/>
                <label className='login__label'>Status</label>
                <select id="propertyType" className='login__input' name='status'>
                    <option value="rent">Rent</option>
                    <option value="buy">Buy</option>
                </select>
                <label className='login__label'>select image</label>
               <div className="file-input">
                  <input type="file" name="file" className="login__input" onChange={handleFileChange} />
                  <span id="file-label">{fileName}</span>
              </div>

                <button type='submit' className='form__btn'>Save</button>

        </form>

        
      
    </div>
  )
}

export default NewHouse
