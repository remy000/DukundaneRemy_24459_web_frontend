import React, { useEffect, useState } from 'react';
import { images } from '../../constants';
import { Link} from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import './houses.css';
import House from '../../containers/House';

const Houses = () => {
  const [houses, setHouses]=useState([]);
  const [loading,setLoading]=useState(true);
  const [statusFilter, setStatusFilter] = useState('rent');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchLocation, setSearchLocation] = useState('');
  const availability='free';
  const itemsPerPage = 6;
  const token=sessionStorage.getItem('token');

  // const filterByAvailability = (availabilityType) => {
  //   setAvailability(availabilityType);
  //   setCurrentPage(1);
  // }
  useEffect(()=>{
    const fetchHouse=async()=>{
      try {
        const response=await fetch("http://localhost:8080/houses/getAllHouses",{
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        if(response.ok){
          const data=await response.json();
          setHouses(data);
          setLoading(false);
        }
        else{
          throw new Error('Network response was not ok');
        }

        
      } catch (error) {
        console.error('Error fetching houses:', error);
        setLoading(false);
        
      }
    };
    fetchHouse();
  },[token]);

  const filterByStatus = (status) => {
    setStatusFilter(status);
    setCurrentPage(1);
  };

  const handleLocationChange = (e) => {
    setSearchLocation(e.target.value.toLowerCase());
    setCurrentPage(1);
  };
  const filteredByStatus = statusFilter
  ? houses.filter((house) => house.status === statusFilter)
  : houses;

const filteredByLocation = searchLocation
  ? filteredByStatus.filter((house) =>
      house.location.toLowerCase().includes(searchLocation)
    )
  : filteredByStatus;


  const filteredByAvailability = availability === 'free'
  ? filteredByLocation.filter((house) => house.availability === 'free')
  : filteredByLocation;
    const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredByAvailability.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  if (loading) {
    return <p>Loading...</p>; 
  }

  return (
    <div className='house__homepage'>
      <nav className='home__navbar navbar'>
      <div className='navbar__logo'>
                <img src={images.logo} alt="logo" />
            </div>
            <div className='navbar__content'>
             <FaRegUserCircle className='nav__icon'/>
             <Link className='nav__link' to="/logout">Logout</Link>    
            </div>
      </nav>
      <div className="houses__header">

        <input type='text' className='login__input inputs' placeholder='search by location'
        value={searchLocation}
        onChange={handleLocationChange}
        onKeyDown={()=>filteredByLocation} />
        <button className='header__btn' onClick={() => filterByStatus('rent')}>Rent</button>
        <button className='header__btn' onClick={() => filterByStatus('buy')}>Sell</button>
      </div>
      <div className="houses__container">
        {currentItems.map((house) => (
          <House
          key={house.id}
          houseId={house.id}
          house={house.houseType}
          location={house.location}
          size={house.size}
          status={house.status}
          price={house.price}
          action={house.status}
          imgUrl={house.imagePath}
           
          />
        ))}
      </div>
      <div className="pagination">
        <button className='header__btn' onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <button className='header__btn' onClick={() => paginate(currentPage + 1)} disabled={indexOfLastItem >= filteredByAvailability.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Houses;
