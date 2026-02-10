import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaBook,
  FaUsers,
  FaCertificate,
  FaArrowRight,
  FaCheckCircle,
  FaRocket,
  FaGlobe
} from 'react-icons/fa';
import heroImage from '../assets/hero_illustration.png';

const LandingPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-black font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 lg:pt-40 lg:pb-52 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-purple-900/20 to-transparent blur-3xl -z-10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse -z-10" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-1000 -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left z-10"
            >
              <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-sm font-medium text-gray-300">New Batch Starting Soon</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                Empower Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
                  Future Today
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Join the elite community of learners. World-class education, personalized mentorship, and a direct path to your dream career.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                <Link
                  to="/signup"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg shadow-lg shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-blue-500/40 flex items-center justify-center group"
                >
                  Start Learning <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/courses"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-lg backdrop-blur-sm transition-all duration-300 flex items-center justify-center"
                >
                  Explore Courses
                </Link>
              </div>

              <div className="mt-10 flex items-center justify-center lg:justify-start space-x-6 text-gray-500 text-sm">
                <div className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> 50k+ Students</div>
                <div className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Expert Mentors</div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="relative z-10 perspective-1000"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gray-900/50 backdrop-blur-xl group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <img
                  src={heroImage}
                  alt="Modern Classroom"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Floating Stat Card 1 */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 bg-gray-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl hidden md:flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-xl">
                  <FaRocket />
                </div>
                <div>
                  <div className="text-white font-bold">Top Rated</div>
                  <div className="text-xs text-gray-400">#1 Education Platform</div>
                </div>
              </motion.div>

              {/* Floating Stat Card 2 */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 bg-gray-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl hidden md:flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
                  <FaGlobe />
                </div>
                <div>
                  <div className="text-white font-bold">Global Reach</div>
                  <div className="text-xs text-gray-400">Students from 20+ countries</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-neutral-900/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl text-white font-bold mb-4">Why BNS?</motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 max-w-2xl mx-auto">
              We go beyond textbooks. We build careers.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FaGraduationCap, title: "Elite Mentorship", desc: "Direct access to mentors from IITs, AIIMS, and top universities.", color: "text-blue-400" },
              { icon: FaBook, title: "Smart Curriculum", desc: "AI-driven personalized learning paths tailored to your pace.", color: "text-purple-400" },
              { icon: FaUsers, title: "High-Performance Peer Group", desc: "Network with ambitious students focused on success.", color: "text-pink-400" }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
              >
                <div className={`text-4xl mb-6 ${feature.color} transform group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans - Mobile Optimized */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/5 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl max-w-lg mx-auto font-bold text-white mb-4">Pricing Plans for Every Ambition</h2>
            <p className="text-gray-400">Simple pricing. No hidden fees.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan Cards */}
            {[
              { name: "Silver", price: "₹999", color: "border-gray-500", glow: "shadow-gray-500/20", features: ["Basic Concepts", "Weekly Tests", "Doubt Support"] },
              { name: "Gold", price: "₹1999", color: "border-yellow-500", glow: "shadow-yellow-500/20", features: ["Advanced Concepts", "1-on-1 Mentorship", "Career Counseling", "All Silver Features"] },
              { name: "Diamond", price: "₹2999", color: "border-blue-500", glow: "shadow-blue-500/20", features: ["Lifetime Access", "Offline Workshops", "Exclusive Events", "All Gold Features"] }
            ].map((plan, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={`relative bg-gray-900 rounded-3xl p-8 border ${plan.color} shadow-2xl ${plan.glow} flex flex-col`}
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-extrabold text-white">{plan.price}<span className="text-lg text-gray-500 font-normal">/mo</span></div>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-center text-gray-300 text-sm">
                      <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/signup" className="w-full py-3 rounded-xl bg-white text-black font-bold text-center hover:bg-gray-200 transition-colors">
                  Choose {plan.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/courses" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors inline-flex items-center group">
              View detailed comparison <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/20 -z-10" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />

        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Launch?</span>
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Don't let your potential go to waste. Start your journey with BNS today.
        </p>
        <Link
          to="/signup"
          className="inline-block px-12 py-5 rounded-full bg-white text-black font-bold text-xl shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300"
        >
          Join Now
        </Link>
      </section>

      {/* Footer is handled by App.jsx, but let's ensure spacing */}
      <div className="pb-10" />

    </div>
  );
};

export default LandingPage;