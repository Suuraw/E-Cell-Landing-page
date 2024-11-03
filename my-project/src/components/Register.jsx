import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const slideInFromLeft = {
  hidden: { opacity: 0, x: -150 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (!email.endsWith('@kiit.ac.in')) {
      setErrorMessage('Please enter a valid KIIT email.');
      return;
    }

    // Validate passwords
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    // If validation passes, navigate to home page
    navigate("/");
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-screen bg-gray" // Ensure background color is visible
      initial="hidden"
      animate="visible"
      variants={slideInFromLeft}
    >
      <h1 className="text-4xl font-bold mb-6 text-white">Register for KIIT E-Cell</h1>
      <form onSubmit={handleSubmit} className="bg-gray p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-white">KIIT Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-orange-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-orange-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirm-password" className="block text-sm font-medium text-white">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-orange-500"
          />
        </div>

        {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}

        <button type='submit' className="bg-gradient-to-r from-blue-500 to-green-800 text-white py-2 px-4 rounded-md w-full hover:bg-orange-600">
          Register
        </button>
      </form>
    </motion.div>
  );
};

export default RegisterPage;