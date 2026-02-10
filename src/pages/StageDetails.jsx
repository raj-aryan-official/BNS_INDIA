import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCheck, FaExternalLinkAlt, FaLightbulb, FaRocket, FaTasks, FaTrophy, FaHandshake, FaCoins, FaUsers } from 'react-icons/fa';

const stageData = {
  stage1: {
    title: 'Stage 1 - Foundation',
    goal: 'Cultivate curiosity, digital literacy, and teamwork',
    skills: [
      'Computational thinking (Scratch/Blockly)',
      'Basic electronics (LED circuits with Arduino)',
      'Vernacular digital literacy (Bhashini API)',
      'Digital communication',
      'Teamwork and creative problem-solving'
    ],
    implementation: [
      {
        for: 'Learners',
        items: [
          'Complete 5 interactive projects on Code.org',
          'Build a "Smart Torch" with light sensor',
          'Participate in a virtual "Hour of Code" event',
          'Join a Scratch online community challenge',
          'Present a project at a local science fair'
        ]
      },
      {
        for: 'Institutions',
        items: [
          'Set up "Tech Corners" with Raspberry Pi kits',
          'Teacher training via DIKSHA\'s foundational courses',
          'Organize a "Digital Citizenship" workshop',
          'Host a family coding night'
        ]
      }
    ],
    resources: [
      { name: 'CS Unplugged', url: 'https://csunplugged.org/' },
      { name: 'Tinkercad Circuits', url: 'https://www.tinkercad.com/learn/circuits' },
      { name: 'Scratch Community', url: 'https://scratch.mit.edu/' },
      { name: 'Khan Academy Computing', url: 'https://www.khanacademy.org/computing' },
      { name: 'Google for Education', url: 'https://edu.google.com/' }
    ],
    color: 'from-blue-500 to-cyan-400'
  },
  stage2: {
    title: 'Stage 2 - Intermediate',
    goal: 'Problem-solving through technology and collaboration',
    skills: [
      'Web development (HTML/CSS → Firebase)',
      'AI basics (Teachable Machine projects)',
      'IoT prototyping (Blynk apps)',
      'Digital presentation skills',
      'Collaboration using online tools'
    ],
    implementation: [
      {
        for: 'Learners',
        items: [
          'Create a portfolio website hosted on GitHub Pages',
          'Train an AI model to classify local crops',
          'Build a weather dashboard using public APIs',
          'Design a smart home prototype with Blynk'
        ]
      },
      {
        for: 'Institutions',
        items: [
          'Conduct "Build for Bharat" hackathons',
          'Partner with Atal Tinkering Labs for mentorship',
          'Host a web development bootcamp'
        ]
      }
    ],
    resources: [
      { name: 'GitHub Student Pack', url: 'https://education.github.com/pack' },
      { name: 'Teachable Machine', url: 'https://teachablemachine.withgoogle.com/' },
      { name: 'Blynk IoT Platform', url: 'https://blynk.io/' },
      { name: 'Firebase for Students', url: 'https://firebase.google.com/edu' }
    ],
    color: 'from-indigo-500 to-purple-500'
  },
  // Add other stages similarly with simplified data if needed for brevity, but focusing on UI structure
  stage3: {
    title: 'Stage 3 - Advanced',
    goal: 'Specialized technical proficiency and global exposure',
    skills: ['Full-stack (MERN)', 'Machine Learning', 'Blockchain Basics', 'API Integration'],
    implementation: [{ for: 'Learners', items: ['Build pollution tracker', 'Deploy MERN app', 'Google Summer of Code'] }],
    resources: [{ name: 'AWS Educate', url: 'https://aws.amazon.com/education/awseducate/' }],
    color: 'from-purple-500 to-pink-500'
  }
};

const StageDetails = () => {
  const { stageId } = useParams();
  const navigate = useNavigate();
  // Fallback to stage1 if ID not found for robustness in demo
  const stage = stageData[stageId] || stageData['stage1'];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [stageId]);

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Navigation Header */}
        <button
          onClick={() => navigate('/stages')}
          className="flex items-center text-gray-400 hover:text-white transition-colors group mb-8"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Stages
        </button>

        {/* Hero Section */}
        <div className={`bg-gradient-to-br ${stage.color} rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden`}>
          <div className="relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 text-sm font-bold mb-4">
              Detailed Curriculum
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{stage.title}</h1>
            <p className="text-lg md:text-xl opacity-90 font-medium max-w-2xl">{stage.goal}</p>
          </div>
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stage.skills.map((skill, index) => (
            <div key={index} className="bg-neutral-900 border border-gray-800 p-6 rounded-2xl hover:border-gray-700 transition-colors">
              <FaRocket className="text-blue-500 mb-4 text-xl" />
              <p className="text-gray-200 font-semibold">{skill}</p>
            </div>
          ))}
        </div>

        {/* Implementation Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stage.implementation.map((group, index) => (
            <div key={index} className="bg-neutral-900 border border-gray-800 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <FaTasks className="text-purple-500" /> For {group.for}
              </h3>
              <ul className="space-y-4">
                {group.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Resources */}
        <div className="bg-neutral-900 border border-gray-800 rounded-3xl p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <FaExternalLinkAlt className="text-orange-500" /> Learning Resources
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stage.resources.map((res, index) => (
              <a
                key={index}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-black border border-gray-800 rounded-xl hover:border-gray-600 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                  <FaExternalLinkAlt className="text-sm" />
                </div>
                <span className="font-medium text-gray-300 group-hover:text-white">{res.name}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default StageDetails;