import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaLightbulb, FaRocket, FaTrophy, FaUserGraduate, FaChalkboardTeacher, FaGem } from 'react-icons/fa';

const stages = [
  {
    id: 'stage1',
    title: 'Stage 1 - Foundation',
    description: 'Cultivate curiosity, digital literacy, and teamwork',
    icon: FaLightbulb,
    color: 'from-blue-500 to-cyan-400',
    shadow: 'shadow-blue-500/20'
  },
  {
    id: 'stage2',
    title: 'Stage 2 - Intermediate',
    description: 'Build technical skills and problem-solving abilities',
    icon: FaRocket,
    color: 'from-indigo-500 to-purple-500',
    shadow: 'shadow-indigo-500/20'
  },
  {
    id: 'stage3',
    title: 'Stage 3 - Advanced',
    description: 'Specialized technical proficiency and global exposure',
    icon: FaUserGraduate,
    color: 'from-purple-500 to-pink-500',
    shadow: 'shadow-purple-500/20'
  },
  {
    id: 'stage4',
    title: 'Stage 4 - Expert',
    description: 'Master advanced concepts and industry practices',
    icon: FaTrophy,
    color: 'from-yellow-400 to-orange-500',
    shadow: 'shadow-yellow-500/20'
  },
  {
    id: 'stage5',
    title: 'Stage 5 - Master',
    description: 'Thought leadership and global impact',
    icon: FaChalkboardTeacher,
    color: 'from-emerald-400 to-green-500',
    shadow: 'shadow-emerald-500/20'
  },
  {
    id: 'stage6',
    title: 'Stage 6 - Professional',
    description: 'Transformative impact and lifelong learning',
    icon: FaGem,
    color: 'from-blue-600 to-indigo-600',
    shadow: 'shadow-blue-500/20'
  }
];

const Stages = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-4">
            Development Pathway
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Stages</span>
          </h1>
          <p className="text-xl text-gray-400">
            Explore our comprehensive learning journey designed to transform you from a beginner to a professional. Each stage builds upon the previous one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stages.map((stage) => (
            <Link
              to={`/stages/${stage.id}`}
              key={stage.id}
              className="group relative bg-neutral-900 border border-gray-800 rounded-3xl p-8 hover:border-gray-700 transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stage.color} flex items-center justify-center mb-6 text-white text-2xl shadow-lg ${stage.shadow} group-hover:scale-110 transition-transform duration-300`}>
                <stage.icon />
              </div>

              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {stage.title}
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {stage.description}
              </p>

              <div className="flex items-center text-sm font-bold text-gray-500 group-hover:text-white transition-colors">
                Explore Stage <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stage.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300 pointer-events-none`} />
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
            <h3 className="text-2xl font-bold text-white mb-4">How It Works</h3>
            <p className="text-gray-400 leading-relaxed">
              Each stage is carefully designed to build upon your previous knowledge and skills.
              Progress through the stages at your own pace, with support from our expert mentors
              and a community of learners.
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
            <h3 className="text-2xl font-bold text-white mb-4">Get Started</h3>
            <p className="text-gray-400 leading-relaxed">
              Begin your journey with Stage 1 and work your way up. Each stage includes
              interactive projects, assessments, and real-world applications to ensure
              comprehensive learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stages;