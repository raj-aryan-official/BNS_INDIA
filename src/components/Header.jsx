import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaUser, FaSignOutAlt, FaTachometerAlt, FaCrown, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const isEnrolled = localStorage.getItem('isEnrolled') === 'true';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('isEnrolled');
    navigate('/login');
  };

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isHomePage ? (scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent') : 'bg-black/90 backdrop-blur-md border-b border-white/10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img src="/BNSLOGO.png" alt="BNS" className="h-10 w-10 object-contain group-hover:scale-110 transition-transform" />
            <span className="text-sm sm:text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 tracking-tight">
              BHARAT NAVODAYA SHIKSHA
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Stages', 'Events', 'Membership'].map((item) => (
              <Link key={item} to={`/${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide">
                {item}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors focus:outline-none"
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 p-[2px]">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                      <FaUser className="text-xs" />
                    </div>
                  </div>
                </button>
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-xl shadow-xl py-1 transform transition-all">
                    {isEnrolled ? (
                      <>
                        <Link to="/dashboard" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">
                          <FaTachometerAlt className="mr-3 text-blue-400" /> Dashboard
                        </Link>
                        <Link to="/subscription" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">
                          <FaCrown className="mr-3 text-yellow-400" /> Subscription
                        </Link>
                      </>
                    ) : (
                      <Link to="/subscription" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">
                        <FaCrown className="mr-3 text-yellow-400" /> Subscription
                      </Link>
                    )}
                    <div className="border-t border-gray-700 my-1"></div>
                    <button onClick={handleLogout} className="flex w-full items-center px-4 py-2 text-sm text-red-400 hover:bg-gray-800 hover:text-red-300">
                      <FaSignOutAlt className="mr-3" /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="text-gray-300 hover:text-white font-medium transition-colors">Login</Link>
                <Link to="/signup" className="px-5 py-2.5 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors transform hover:scale-105">
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800 absolute w-full left-0 top-20">
          <div className="px-4 pt-2 pb-8 space-y-2">
            {['Stages', 'Events', 'Membership'].map((item) => (
              <Link key={item} to={`/${item.toLowerCase()}`} className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg">
                {item}
              </Link>
            ))}
            {!isAuthenticated && (
              <div className="pt-4 grid grid-cols-2 gap-4">
                <Link to="/login" className="text-center py-3 rounded-lg border border-gray-700 text-white">Login</Link>
                <Link to="/signup" className="text-center py-3 rounded-lg bg-blue-600 text-white font-bold">Sign Up</Link>
              </div>
            )}
            {isAuthenticated && (
              <button onClick={handleLogout} className="w-full text-center py-3 rounded-lg bg-red-600/20 text-red-500 border border-red-600/50 mt-4">
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;