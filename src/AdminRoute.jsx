
import { Navigate } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const role=sessionStorage.getItem('userRole');
    const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';
    if(role==='ADMIN' && isAuthenticated){
        return children;
    }
    else if(role!=='ADMIN'&&isAuthenticated){
        return <Navigate to="/unauthorized"/>
    }
    else{
        return <Navigate to="/"/>;
    }
   
   
 
};

export default AdminRoute;