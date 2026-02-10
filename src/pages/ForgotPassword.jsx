import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaCheckCircle, FaArrowLeft, FaKey } from 'react-icons/fa';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setShowPopup(true);
    } catch (err) {
      setError('Failed to send reset email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let timer;
    if (showPopup && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      navigate('/login');
    }
    return () => clearTimeout(timer);
  }, [showPopup, countdown, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-md w-full relative z-10">
        <div className="bg-neutral-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-800">
          {/* Header Gradient */}
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            <div className="mx-auto h-16 w-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm border border-white/10 shadow-inner">
              <FaKey className="h-8 w-8 text-blue-300" />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Recover Password</h2>
            <p className="text-blue-100/70 mt-2 text-sm">We'll send instructions to your email</p>
          </div>

          <div className="p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-400 mb-2">
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3.5 bg-black border border-gray-800 rounded-xl text-gray-200 placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm transition-all shadow-inner"
                    placeholder="name@example.com"
                    disabled={isLoading || showPopup}
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-400 text-sm flex items-center bg-red-900/20 p-3 rounded-lg border border-red-500/30">
                  <span className="mr-2">⚠️</span> {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading || showPopup}
                className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-sm font-bold text-white transition-all transform hover:scale-[1.02] ${isLoading ? 'bg-blue-800 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 shadow-blue-600/20'}`}
              >
                {isLoading ? 'Sending...' : 'Send Reset Link'}
              </button>

              <div className="flex justify-center">
                <Link to="/login" className="flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <FaArrowLeft className="mr-2" /> Back to Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-300">
          <div className="bg-neutral-900 rounded-3xl p-8 max-w-sm w-full mx-4 shadow-2xl border border-gray-800 text-center relative overflow-hidden">
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="text-5xl text-green-500 animate-bounce" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Email Sent!</h3>
            <p className="text-gray-400 mb-6">Check your inbox for password reset instructions.</p>
            <div className="text-sm text-gray-500 font-mono">
              Redirecting in <span className="text-blue-400 font-bold text-lg">{countdown}</span>s
            </div>
            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 h-1 bg-blue-600 transition-all duration-1000 ease-linear" style={{ width: `${(countdown / 3) * 100}%` }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;