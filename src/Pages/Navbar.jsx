import React from 'react';
import { Link,Outlet, useNavigate } from 'react-router-dom';
//import './Navbar.css'
const Navbar = () => {
      const navigate=useNavigate();
      const dashbord=()=>{
        navigate('dashbord')
      }
      const studentDetails=()=>{
        navigate('students')
      }
      const login=()=>{
        navigate('/')
      }
    return (
        <div className='cls'>
                      <Link to='/'><button className='btn0' onClick={login}><b>Login</b></button></Link>
            <Link to='dashbord'><button className='btn' onClick={dashbord}><b>Dashbord</b></button></Link>
          <Link  to='students'><button className='btn1' onClick={studentDetails}>Students</button></Link> 
            <Link  to='courses'><button className='btn2'>Courses</button></Link>
            <Link  to='grade'><button className='btn3'>Grade</button></Link>
         <Outlet />
            
        </div>
    );
};

export default Navbar;
