import React, { useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const nameref=useRef();
    const pass=useRef();
    const navigate=useNavigate();
    const [formData,setFormData] = useState({uname:'',password:''});
   const handleSubmit=(e)=>{
         e.preventDefault();
         localStorage.setItem("name",formData.uname);
         localStorage.setItem("pass",formData.password);
         if(formData.uname!==''&& formData.password!==''){
            alert('login successful');
            navigate('/dashbord');
         }
         else{
            alert('login invalid');
         }
         console.log("name",nameref.current.value);
         console.log("password",pass.current.value);
         
   }
   const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData((prevdata)=>({...prevdata,[name]:value}));
   }
  
    return (
        <div>
                           
            <form onSubmit={handleSubmit}>

            <label> Username:</label>
                <input type='text' ref={nameref}value={formData.uname} name='uname' onChange={handleChange}></input>
            <br />
            <label> Password:
                <input type='password' ref={pass}value={formData.password}name='password' onChange={handleChange}></input>
            </label><br />
            <button type="submit" >Submit</button>
            </form>
            {localStorage.getItem(nameref)}
        </div>
    );
};

export default Login;