
import { Navigate} from 'react-router-dom';

const UserRoute = ({children}) => {
    const role=sessionStorage.getItem('userRole');
    const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';

    if(role==='USER' && isAuthenticated){
        return children;
    }
    else if(role!=='USER'&&isAuthenticated){
        return <Navigate to="/unauthorized"/>
    }
    else{
        return <Navigate to="/"/>;
    }

};

export default UserRoute
