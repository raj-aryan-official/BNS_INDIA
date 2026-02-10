import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheck, FaCrown, FaRocket, FaBuilding, FaVideo } from 'react-icons/fa';

const Subscription = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const subscriptionPlans = [
    {
      id: 1,
      name: 'Basic',
      price: '₹999',
      period: '/month',
      icon: FaRocket,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
      features: [
        'Access to basic courses',
        'Monthly live sessions',
        'Basic support',
        'Community access'
      ]
    },
    {
      id: 2,
      name: 'Premium',
      price: '₹1999',
      period: '/month',
      isPopular: true,
      icon: FaCrown,
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-500/50',
      features: [
        'All Basic features',
        'Weekly live sessions',
        'Priority support',
        'Downloadable resources',
        '1-on-1 mentoring'
      ]
    },
    {
      id: 3,
      name: 'Enterprise',
      price: '₹4999',
      period: '/month',
      icon: FaBuilding,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      features: [
        'All Premium features',
        'Daily live sessions',
        '24/7 support',
        'Custom learning path',
        'Group mentoring',
        'Certificate of completion'
      ]
    }
  ];

  const handleEnroll = (planId) => {
    setSelectedPlan(planId);
    setShowSuccess(true);
    // Set enrollment status
    localStorage.setItem('isEnrolled', 'true');
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  const connectMeeting = () => {
    window.open('https://meet.google.com', '_blank');
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Learning Path</span>
          </h1>
          <p className="text-xl text-gray-400">
            Unlock your full potential with our tailored membership plans.
          </p>
        </div>

        {/* Live Session Banner */}
        <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border border-indigo-500/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-indigo-500/20 rounded-full animate-pulse">
              <FaVideo className="text-2xl text-indigo-300" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Join Live Orientation</h2>
              <p className="text-indigo-200 text-sm">Connect with mentors and learn more about our programs.</p>
            </div>
          </div>
          <button
            onClick={connectMeeting}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-indigo-500/25 whitespace-nowrap"
          >
            Join Now
          </button>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subscriptionPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-neutral-900 rounded-3xl p-8 border ${plan.isPopular ? 'border-yellow-500 shadow-2xl shadow-yellow-900/10 transform scale-105 z-10' : 'border-gray-800 hover:border-gray-700'} transition-all duration-300 flex flex-col`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-black font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <div className={`w-14 h-14 rounded-2xl ${plan.bg} ${plan.color} flex items-center justify-center mb-6 text-2xl`}>
                  <plan.icon />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-gray-500 mb-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleEnroll(plan.id)}
                className={`w-full py-4 rounded-xl font-bold transition-all ${selectedPlan === plan.id
                  ? 'bg-green-600 text-white cursor-default'
                  : plan.isPopular
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
              >
                {selectedPlan === plan.id ? 'Selected' : 'Enroll Now'}
              </button>
            </div>
          ))}
        </div>

        {/* Success Popup */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-300">
            <div className="bg-neutral-900 border border-gray-800 p-8 rounded-3xl max-w-sm w-full text-center mx-4">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheck className="text-5xl text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Welcome Aboard!</h3>
              <p className="text-gray-400 font-medium">Redirecting you to your dashboard...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Subscription;