import  { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate=useNavigate();
    useEffect(()=>{
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userRole');
        sessionStorage.removeItem('isAuthenticated');
        sessionStorage.removeItem('userLength');
        sessionStorage.removeItem('houseLength');
        sessionStorage.removeItem('bookings');
        navigate('/')
    },[navigate]);
 
}

export default Logout
