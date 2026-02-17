import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/Localstorage';

const App = () => {

  const [User, setUser] = useState(null)
  const handleLogin = (email,password)=>{
    if(email == 'admin@me.com' && password == '123'){
      console.log("This is Admin")
    }else if (email == 'user@me.com' && password == '123'){
      console.log("This is User");
      
    }
    
    else{
      alert("Invalid Credentials")
    } 
  }

  handleLogin('user@me.com',123)

  return (
    <>
    {!User ? <Login />: ''} 
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}

    </>
  )  
}

export default App

