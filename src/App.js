import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Cities from './components/cities/Cities';
import Contact from './components/contacts/Contact';
import Feature from './components/features/Feature';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Properties from './components/properties/Properties';
import SignUp from './components/signup/SignUp';
import Houses from './components/houses/Houses';
import HouseDetail from './components/houseDetail/HouseDetail';
import AdminDashboard from './components/admin/AdminDashboard';
import UnAuthorized from './components/unauthorized/UnAuthorized';
import AdminRoute from './AdminRoute';
import UserRoute from './UserRoute';
import NewHouse from './components/newHouse/NewHouse';
import Logout from './Logout';
import UpdateHouse from './components/updateHouse/UpdateHouse';
import Notfound from './components/unauthorized/Notfound';


function MainComponents() {
  return (
    <>
        <Home/>
        <Feature/> 
        <About />
        <Cities/> 
        <Properties/>
        <Contact/>
        <Footer/>

     
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">   
        <Routes>
          <Route path="/" index element={<MainComponents />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp/>} />
          <Route exact path="/unauthorized" element={<UnAuthorized/>} />
          <Route path="/logout" element={<Logout />} />
          <Route exact path="/newHouse" element={<AdminRoute><NewHouse/></AdminRoute>} />
          <Route exact path="/updateHouse/:id" element={<AdminRoute><UpdateHouse/></AdminRoute>} />
          <Route exact path="/houses" element={<UserRoute><Houses/></UserRoute>}/>
          <Route exact path="/house/:id" element={<UserRoute><HouseDetail/></UserRoute>} />
          <Route exact path="/admin" element={<AdminRoute><AdminDashboard/></AdminRoute>} />  
          <Route  path='/*' element={<Notfound/>}/> 
        </Routes>       
      </div>
    </Router>
  );
}

export default App;
