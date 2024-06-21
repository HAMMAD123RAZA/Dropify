import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4040/register", {
        fullName: name,  // Note the field name change to match the backend
        email,
        password
      });
      localStorage.setItem("User", JSON.stringify(response.data));
      console.log(response.data);
      setName('');
      setEmail('');
      setPassword('');
      alert("User Created");
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Error creating user");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Register</h1>
        <form className="space-y-4" onSubmit={registerSubmit}>
          <div>
            <label htmlFor="fullName" className="block text-sm font-bold mb-1">Full Name</label>
            <input 
              type="text" 
              id="fullName" 
              placeholder="Enter your full name" 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-bold mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
          <p className="text-sm text-gray-600 text-center">
            Already have an account? <a href="/login" className="font-bold hover:underline">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
