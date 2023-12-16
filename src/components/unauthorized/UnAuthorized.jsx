import React from 'react'
import './unauth.css'
import { Link } from 'react-router-dom';
const UnAuthorized = () => {
  const role=sessionStorage.getItem('userRole');
  return (
    <div className='unauth__home'>
      <h1 className='unauth__header'>403</h1>
      <h3 className='unauth__h3'>You don't have access to this page</h3>
      {
        role==='ADMIN'?
        <Link className='unauth__link' to="/admin">Return</Link>
        :
        <Link className='unauth__link' to="/houses">Return</Link>

      }
      
    </div>
  )
}

export default UnAuthorized
