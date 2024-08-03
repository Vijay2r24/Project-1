import React, { useState } from 'react';
import LoginImage from '../assets/logo/Login_1.png'; // Update the path to your image

const Login = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Logging in with phone number:', phoneNumber);
    // Close the modal after successful login
    onClose();
  };

  return (
    <div>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="bg-cover bg-full h-32 rounded-t-lg"
            style={{ backgroundImage: `url(${LoginImage})` }}
          >
            <h2 className="text-2xl font-bold text-white text-center py-8">Login</h2>
          </div>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border px-4 py-2 w-full rounded"
                placeholder="Enter your phone number"
              />
            </div>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded w-full"
            >
              Login
            </button>
            <div className="text-center mt-4">
              <p className="text-gray-600">or</p>
              <button
                onClick={onClose}
                className="text-blue-500 hover:underline mt-2"
              >
                Continue as Guest
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
