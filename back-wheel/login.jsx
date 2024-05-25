import React, { useState } from 'react';
import axios from 'axios';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? 'login' : 'signup';
    try {
      const res = await axios.post(`http://localhost:5000/api/auth/${endpoint}`, formData);
      console.log(res.data); // Handle the response as needed
    } catch (err) {
      console.error(err.response.data); // Handle the error as needed
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {isLogin ? (
          <div id="login-form">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-600">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Login
              </button>
              <p className="mt-4 text-gray-600">
                Don't have an account?{' '}
                <button
                  type="button"
                  className="text-indigo-600"
                  onClick={toggleForm}
                >
                  Sign Up
                </button>
              </p>
            </form>
          </div>
        ) : (
          <div id="signup-form">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="signup-email" className="block text-gray-600">Email</label>
                <input
                  type="email"
                  id="signup-email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="signup-password" className="block text-gray-600">Password</label>
                <input
                  type="password"
                  id="signup-password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="confirm-password" className="block text-gray-600">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
              <p className="mt-4 text-gray-600">
                Already have an account?{' '}
                <button
                  type="button"
                  className="text-indigo-600"
                  onClick={toggleForm}
                >
                  Login
                </button>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
