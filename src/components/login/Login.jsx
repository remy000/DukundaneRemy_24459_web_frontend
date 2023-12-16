import React, { useEffect, useState } from 'react'
import './login.css'
import { images } from '../../constants'
import { FaInstagram,FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useNavigate} from 'react-router-dom'
import {jwtDecode} from 'jwt-decode'

const Login = () => {
  const[username,setUsername]=useState('');
  const [password, setPassword]=useState('');
  const [token,setToken]=useState('');
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const [error,setError]=useState('');
  const navigate=useNavigate();

  const handleLogin= async(e)=>{
      e.preventDefault();
      if(!username || !password){
        setError('Email and Password are required');
      }
      try {
        const response=await fetch('http://localhost:8080/users/authentication',{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({username,password})

        });
        const data=await response.json();
        if(response.ok){
          setToken(data.token);
        }
        else{
          setError("Invalid Credentials");
        }
        
      } catch (error) {
        console.error('Login failed:', error);
        setError('Something went wrong');
        
      }
    }
    useEffect(()=>{
      if(token){
        const decodedToken=jwtDecode(token);
        const role=decodedToken.roles;

        if(role.includes && role.includes('ADMIN')){
          setIsLoggedIn(true);
          sessionStorage.setItem('isAuthenticated', true);
          sessionStorage.setItem('userRole', role);
          sessionStorage.setItem('token',token);
          navigate("/admin");
        }
        if(role.includes('USER')){
          setIsLoggedIn(true);
          sessionStorage.setItem('isAuthenticated', true);
          sessionStorage.setItem('userRole', role);
          sessionStorage.setItem('token',token);
          navigate("/houses");
        }
      }
    },[token,navigate])
  return (
    <div className='login__home'>
      <div className="login__card">
        <div className="login__images">
          <p className="login__p">Join Us Now</p>
          <div className="login__icons">
            <FaInstagram className='icon__login'/>
            <FaXTwitter className='icon__login'/>
            <FaWhatsapp className='icon__login'/>
          </div>
          <img src={images.log} alt="login" />
         

        </div>
        <div className="login__content">
          <h2 className='login__header'>Login</h2>
          {error && <span className="error">{error}</span>}
            <form onSubmit={handleLogin} className="login__form">
              <label className='login__label'>Email</label>
              <input type='email' placeholder='Enter email' className='login__input'
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              />
                <label className='login__label'>Password</label>
                <input type='password' placeholder='Enter password' className='login__input'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <a href='#home' className='login__link'>forgot password?</a>
                <button type='submit' className='form__btn'>login</button>
                <Link to='/signup' className='login__links'>Don't have an account? SignUp</Link>
                
            </form>
        </div>

      </div>
       
      
    </div>
  )
}

export default Login
