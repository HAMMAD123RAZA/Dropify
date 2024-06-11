import React, { useState } from 'react';
import axios from 'axios';
const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const loginSubmit=(e)=>{
e.preventDefault()
try {
  const data=axios.post("http://localhost:4040/login",{
    email,
    password
  })
  console.log(data.data)
  localStorage.setItem("User",JSON.stringify(data.data))
  setEmail('')
  setPassword('')
  alert("Login Successful")
  window.location.reload( )
} catch (error) {
  console.log(error)
  alert("User Doesnt Exist")
}
  }
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
        <form className="space-y-4" onSubmit={loginSubmit} >
          <div>
            <label htmlFor="email" className="block text-sm font-bold mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-bold mb-1">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
