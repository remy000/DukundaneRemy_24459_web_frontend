import React, { useState } from 'react';
import AllHouse from '../allHouses.jsx/AllHouse';
import AllUsers from '../allUsers/AllUsers';
import './admin.css'
import { Link } from 'react-router-dom';
import Statistics from '../statistics/Statistics';
import { MdDashboard } from "react-icons/md";
import { BsFillHousesFill } from "react-icons/bs"
import { FaUsers,FaBookmark } from "react-icons/fa"
import { RiLogoutCircleFill } from "react-icons/ri";
import { images } from '../../constants';
import AllBookings from '../allBookings/AllBookings';

const AdminDashboard = () => {
  const [currentComponent, setCurrentComponent] = useState(<Statistics/>);

  const handleLinkClick = (componentName) => {
    // Logic to determine which component to render based on the clicked link
    if (componentName === 'Dashboard') {
      setCurrentComponent(<Statistics />);
    }
    if (componentName === 'allHouses') {
        setCurrentComponent(<AllHouse />);
      }
      if (componentName === 'allUsers') {
        setCurrentComponent(<AllUsers />);
      }
      if(componentName==='allBookings'){
        setCurrentComponent(<AllBookings/>)
      }
    
    
    // Add logic for other components as needed
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <div className='sidebar__nav'>
          <div className='sidebar__image'>
            <img src={images.logo} alt="" />
          </div>
          <div className="sidebar__content">
            <h2>Admin</h2>
          </div>
        </div>
        <ul className='sidebar__ul'>
          <li className='sidebar__li'>
          <button
            className='sidebar__btn'
              onClick={() => handleLinkClick('Dashboard')}
            >
              <MdDashboard className='dash__icon'/>
              Dashboard
            </button>
          </li>
          <li>
          <button
           className='sidebar__btn'
              onClick={() => handleLinkClick('allHouses')}
            >
               <BsFillHousesFill className='dash__icon'/>
              Houses
            </button>
            
          </li>
          <li>
          <button
              className='sidebar__btn'
              onClick={() => handleLinkClick('allUsers')}
            >
               <FaUsers className='dash__icon'/>
              Users
            </button>
          </li>
          <li>
          <button
               className='sidebar__btn'
              onClick={() => handleLinkClick('allBookings')}
            >
               <FaBookmark className='dash__icon'/>
              Bookings
            </button>
          </li>
        </ul>
        <div className="sidebar__links">
        <RiLogoutCircleFill className='dash__icon'/>
        <Link to='/logout' className='sidebar__link'>Logout</Link>
      </div>
      </div>
     
      <div className="content">
      
        {currentComponent}
      </div>
    </div>
  );
};

export default AdminDashboard;
