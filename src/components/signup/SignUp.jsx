import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './signup.css'
const SignUp = () => {
  const [names, setNames] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate=useNavigate();
  const roles="USER";
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!names || !email || !password || !confirmPassword){
      setError('please fill all fields');
      return;
    }
    if(password!==confirmPassword){
      setError('password do not match');
      return;
    }
    if(!validateEmail(email)){
      setError('Invalid Email');
      return;
    }
    try {
      const response=await fetch("http://localhost:8080/users/register",
      {
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({names,email,password,roles},)
      });
      if(response.ok){
        setMessage('sign up successfully');
        navigate('/login');
        
      }
      else{
        setError('Sign Up failed'+error);
      }
      
    } catch (error) {
      setError('something went wrong');
      
    }
  }
  return (
    <div className='signup__home sign__bg'>
        <div className="signup__card">
        <div className="signup__forms">
        <h2 className='signup__header'>Sign Up</h2>
        {error && <span className="error">{error}</span>}
          {message && <span className="message">{message}</span>}
            <form onSubmit={handleSubmit} className="sign__form">
            <label className='login__label'>Names</label>
              <input type='text' placeholder='Enter Names' className='login__input'
              value={names}
              onChange={(e)=>setNames(e.target.value)}
              />
            <label className='login__label'>Email</label>
              <input type='email' placeholder='Enter email' className='login__input'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              />
                <label className='login__label'>Password</label>
                <input type='password' placeholder='Enter password' className='login__input'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <label className='login__label'>Confirm password</label>
                <input type='password' placeholder='Confirm password' className='login__input'
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                />
                <button type='submit' className='form__btn'>Sign up</button>
                <Link to='/login' className='signup__links'>Already Have an account? Login</Link>
            </form>
        </div>

        </div>
       
        <div className="signup__content">
            <h2 className='headers'>Join Our Fast Growing Company</h2>
            <p className="headers__p">Find Better home to create Memories with your loved one</p>

        </div>
      
    </div>
  )
}

export default SignUp
