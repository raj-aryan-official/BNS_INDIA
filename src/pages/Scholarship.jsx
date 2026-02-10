import React from 'react';
import { FaGraduationCap, FaSchool, FaChalkboardTeacher, FaGem, FaMedal, FaCheck } from 'react-icons/fa';

const membershipTiers = [
  {
    tier: 'Basic',
    schoolCommitment: 'Implement 1 tech module',
    studentBenefits: '10 student scholarships',
    annualFee: '₹25,000',
    color: 'from-blue-500 to-cyan-500',
    icon: FaSchool
  },
  {
    tier: 'Advanced',
    schoolCommitment: 'Full curriculum integration',
    studentBenefits: 'Lab setup support + 25 scholarships',
    annualFee: '₹75,000',
    color: 'from-indigo-500 to-purple-500',
    popular: true,
    icon: FaChalkboardTeacher
  },
  {
    tier: 'Elite',
    schoolCommitment: 'Become regional hub',
    studentBenefits: 'Incubation center + 100 scholarships',
    annualFee: '₹2,00,000',
    color: 'from-purple-500 to-pink-500',
    icon: FaGem
  }
];

const schoolBenefits = [
  {
    title: 'Curriculum Integration',
    description: 'Free teacher training on AI/Coding/Robotics, stage-wise lesson plans, quarterly NEP alignment audits'
  },
  {
    title: 'Infrastructure Support',
    description: '50% subsidy on STEM lab setup, priority for Atal Tinkering Lab grants'
  },
  {
    title: 'Recognition',
    description: '"BNS Center of Excellence" certification, featured in MHRD\'s best practices repository'
  }
];

const studentBenefits = [
  {
    title: 'Skill Development',
    description: 'Access to BNS digital learning platform, monthly masterclasses with ISRO/DRDO scientists'
  },
  {
    title: 'Career Pathways',
    description: 'Guaranteed internship interviews, startup incubation support'
  },
  {
    title: 'Financial Support',
    description: '25-100% fee waiver on advanced certification courses, stipends for top performers'
  }
];

const Scholarship = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-4">
            Future Leaders Program
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Membership & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Scholarships</span>
          </h1>
          <p className="text-xl text-gray-400">
            Empowering Schools & Students Through Tech Excellence. A dual-benefit initiative creating a nationwide network of future-ready schools.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-neutral-900 border border-gray-800 rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] group-hover:bg-blue-600/20 transition-all duration-500"></div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FaSchool className="text-blue-500" /> For Schools (B2B)
            </h3>
            <div className="space-y-6">
              {schoolBenefits.map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-400 font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{benefit.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-neutral-900 border border-gray-800 rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] group-hover:bg-purple-600/20 transition-all duration-500"></div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FaGraduationCap className="text-purple-500" /> For Students
            </h3>
            <div className="space-y-6">
              {studentBenefits.map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 text-purple-400 font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{benefit.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tiers Pricing */}
        <div>
          <h2 className="text-3xl font-bold text-white text-center mb-10">Membership Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-neutral-900 border rounded-3xl p-8 flex flex-col relative ${tier.popular ? 'border-indigo-500 shadow-2xl shadow-indigo-900/20 scale-105 z-10' : 'border-gray-800'}`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white font-bold px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </div>
                )}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-6 text-white text-2xl shadow-lg`}>
                  <tier.icon />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{tier.tier}</h3>
                <div className="text-3xl font-extrabold text-white mb-6">{tier.annualFee}<span className="text-sm text-gray-500 font-normal">/year</span></div>

                <div className="space-y-4 flex-1 mb-8">
                  <div className="flex gap-3">
                    <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-300"><span className="text-gray-500 block text-xs uppercase font-bold mb-1">School Commitment</span>{tier.schoolCommitment}</p>
                  </div>
                  <div className="flex gap-3">
                    <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-300"><span className="text-gray-500 block text-xs uppercase font-bold mb-1">Benefits</span>{tier.studentBenefits}</p>
                  </div>
                </div>

                <p className="text-center text-xs text-gray-500 mb-4">*50% subsidized for govt schools</p>
                <button className="w-full py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">"Building India's future workforce - one school at a time!"</h2>
            <p className="text-blue-200 mb-8">
              PS: First 100 member schools get free access to our AI Teacher Assistant toolkit!
            </p>
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/25">
              Join the Revolution
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Scholarship;