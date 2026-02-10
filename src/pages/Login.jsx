import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaArrowRight } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Bypassing verification as requested
    // Set dummy user data
    const dummyUser = {
      _id: 'dummy_id',
      name: 'Demo User',
      email: formData.email || 'demo@example.com',
      isEnrolled: true
    };

    localStorage.setItem('userInfo', JSON.stringify(dummyUser));
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('isEnrolled', 'true');

    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl w-full flex rounded-3xl shadow-2xl overflow-hidden bg-neutral-900 border border-gray-800">

        {/* Left Side - Graphical Decoration */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-900 to-purple-900 p-10 flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            {/* Abstract Circles */}
            <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-blue-500 blur-3xl mix-blend-screen"></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-purple-500 blur-3xl mix-blend-screen transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="relative z-10 text-white">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">Welcome Back</h1>
            <p className="text-lg text-blue-100 opacity-90 leading-relaxed">
              Continue your journey with BNS. Access your personalized dashboard and track your progress.
            </p>
          </div>

          <div className="relative z-10 text-blue-200/60 text-sm">
            <p>© {new Date().getFullYear()} BNS India</p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-neutral-900 flex flex-col justify-center">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">Sign In</h2>
            <p className="text-sm text-gray-400">
              Don't have an account?{' '}
              <Link to="/signup" className="font-bold text-blue-500 hover:text-blue-400 transition-colors">
                Create one now
              </Link>
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none z-10">
                  <div className="bg-gray-800 p-2 rounded-lg ml-1">
                    <FaEnvelope className="h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={`block w-full pl-12 pr-4 py-3.5 bg-black border ${error ? 'border-red-500' : 'border-gray-800'} rounded-xl text-gray-100 placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all sm:text-sm shadow-inner`}
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-300">
                  Password
                </label>
                <Link to="/forgot-password" className="text-xs font-bold text-blue-500 hover:text-blue-400 transition-colors">
                  Forgot password?
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none z-10">
                  <div className="bg-gray-800 p-2 rounded-lg ml-1">
                    <FaLock className="h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className={`block w-full pl-12 pr-12 py-3.5 bg-black border ${error ? 'border-red-500' : 'border-gray-800'} rounded-xl text-gray-100 placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all sm:text-sm shadow-inner`}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-300 transition-colors focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-900/20 border border-red-500/50 rounded-xl p-3 flex items-center">
                <p className="text-sm text-red-400 text-center w-full font-medium">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`group relative w-full flex justify-center py-4 px-4 border border-transparent rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-600/20 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <span className="flex items-center">
                  Sign In <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;