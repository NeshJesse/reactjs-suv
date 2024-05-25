//This is a multipurpose page with both login and signup
//when the sign up is clicked while in the login page,it is toggles the signup form
//when login is clicked it toggles the login page
//you can also take the login.jsx code and use it to create an mpesa payment page
import React, { useState } from 'react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {isLogin ? (
          <div id="login-form">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-600">Password</label>
                <input
                  type="password"
                  id="password"
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
            <form>
              <div className="mb-4">
                <label htmlFor="signup-email" className="block text-gray-600">Email</label>
                <input
                  type="email"
                  id="signup-email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="signup-password" className="block text-gray-600">Password</label>
                <input
                  type="password"
                  id="signup-password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="confirm-password" className="block text-gray-600">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
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
