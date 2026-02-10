import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">BNS INDIA</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering students with quality education tailored for success in competitive exams and life.
            </p>
            <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {['About Us', 'Careers', 'Contact Us', 'Blog'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-blue-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {['FAQ', 'Help Center', 'Terms of Service', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-blue-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Stay Updated</h4>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm">Subscribe to our newsletter for the latest updates.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 w-full"
                />
                <button type="submit" className="bg-blue-600 hover:bg-blue-500 px-4 rounded-r-lg text-white transition-colors">
                  <FaArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Bharat Navodaya Shiksha. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;