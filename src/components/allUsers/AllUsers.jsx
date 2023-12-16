import React, { useEffect, useState } from 'react'

const AllUsers = () => {
  const [users,setUsers]=useState([]);
  const [loading,setIsloading]=useState(true);
  const[userLength,setUserLength]=useState(0);
  const token=sessionStorage.getItem('token');
  const roleByUser='USER';

  useEffect(()=>{
    const fetchUsers=async()=>{
      try{
      const response=await fetch("http://localhost:8080/users/allUsers",{
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      if(response.ok){
        const data=await response.json();
        setUsers(data);
        setIsloading(false);
        setUserLength(data.length);

      }
      else{
        throw new Error('Network response was not ok');
      }

      
    } catch (error) {
      console.error('Error fetching users:', error);
      setIsloading(false);
      
    }
      

    };
    fetchUsers();
  },[token])
  
  const filteredByUser = roleByUser
  ? users.filter((user) => user.roles === roleByUser)
  : users;
  sessionStorage.setItem('userLength',userLength);

  if (loading) {
    return <p>Loading...</p>; 
  }
  return (
    <div>
        <div className="content__header">
        <input type='text' className='sidebar__input' placeholder='search here....'/>
        </div>
    <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Names</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {filteredByUser.map((user) => (
        <tr key={user.userId}>
          <td>{user.userId}</td>
          <td>{user.names}</td>
          <td>{user.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>
  )
}

export default AllUsers
