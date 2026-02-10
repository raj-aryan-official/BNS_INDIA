import React from 'react';
import { FaLaptopCode, FaTools, FaLeaf, FaRobot, FaShieldAlt, FaChalkboardTeacher, FaBolt, FaCodeBranch, FaSatellite, FaUsers } from 'react-icons/fa';

const events = [
  {
    title: 'BNS Tech Pravesh Utsav',
    stage: 'Foundation',
    format: 'District-level tech carnival',
    activities: [
      'Scratch coding challenges',
      '"Take Apart" sessions',
      'Vernacular digital literacy workshops'
    ],
    impact: 'Introduces 10,000+ rural students to tech annually.',
    icon: FaLaptopCode,
    color: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'Build for Bharat Hackathon',
    stage: 'Intermediate',
    theme: 'Solving local problems',
    unique: [
      'Bilingual problem statements',
      'Incubation support from AIM'
    ],
    icon: FaTools,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'AI for Villages Challenge',
    stage: 'Advanced',
    task: [
      'Crop disease detection',
      'Govt. scheme translation'
    ],
    prize: "Deployment via NIC's Bhashini",
    icon: FaLeaf,
    color: 'from-green-500 to-emerald-400'
  },
  {
    title: 'National Hardware Olympiad',
    stage: 'Advanced/Expert',
    rounds: [
      'Virtual circuit design',
      'On-site build-a-thon'
    ],
    partner: "IITs' robotics labs",
    icon: FaRobot,
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Cyber Yodha Bootcamp',
    stage: 'Intermediate+',
    curriculum: [
      'Ethical hacking basics',
      'Aadhaar data privacy drills',
      'Capture The Flag (CTF)'
    ],
    certification: 'MeitY-approved "Cyber Warrior"',
    icon: FaShieldAlt,
    color: 'from-red-500 to-pink-600'
  },
  {
    title: 'BNS Future Skills Conclave',
    audience: 'Teachers/Policymakers',
    highlights: [
      'Demo of learning kits',
      'Panel on AI in NCERT',
      'Live coding by prodigies'
    ],
    icon: FaChalkboardTeacher,
    color: 'from-yellow-400 to-orange-400'
  },
  {
    title: 'Rashtriya Vidhyut Yantrik',
    stage: 'Expert/Master',
    challenge: [
      'Low-cost solar microgrids',
      'EV battery swap prototypes'
    ],
    judges: 'Engineers from ISRO/DRDO',
    icon: FaBolt,
    color: 'from-yellow-300 to-yellow-500'
  },
  {
    title: 'Open Source Bharat Fest',
    stage: 'Professional',
    activities: [
      'Translate GitHub docs',
      'IndiaStack contributions',
      '"1 PR = 1 Tree Planted"'
    ],
    icon: FaCodeBranch,
    color: 'from-gray-400 to-gray-600'
  },
  {
    title: 'BNS SpaceTech Hack',
    partner: 'IN-SPACe',
    dataset: "ISRO's open satellite imagery",
    tracks: [
      'Disaster prediction',
      'Village urban planning'
    ],
    icon: FaSatellite,
    color: 'from-indigo-400 to-blue-600'
  },
  {
    title: 'Guru-Shishya Parmpara Summit',
    unique: [
      'Stage 6 mentors Stage 3',
      'Reverse mentoring on GenAI',
      'Village project deployment'
    ],
    icon: FaUsers,
    color: 'from-orange-400 to-red-400'
  }
];

const Events = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold mb-4">
            Innovation & Impact
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Impact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Events</span>
          </h1>
          <p className="text-xl text-gray-400">
            10 unique, Bharat-centric events to accelerate skill development and innovation across all stages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-neutral-900 border border-gray-800 rounded-3xl p-6 hover:border-gray-700 transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${event.color} text-white text-xl shadow-lg`}>
                  <event.icon />
                </div>
                {event.stage && (
                  <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-xs font-bold border border-gray-700">
                    {event.stage}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {event.title}
              </h3>

              <div className="space-y-3 flex-1">
                {event.format && <p className="text-sm text-gray-400"><strong className="text-gray-300">Format:</strong> {event.format}</p>}
                {event.theme && <p className="text-sm text-gray-400"><strong className="text-gray-300">Theme:</strong> {event.theme}</p>}
                {event.impact && <p className="text-sm text-gray-400 italic border-l-2 border-green-500 pl-3">{event.impact}</p>}

                {(event.activities || event.unique || event.tracks || event.highlights || event.rounds || event.task || event.challenge)?.slice(0, 3).map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-700 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-800 flex justify-between items-center text-sm">
                <span className="text-blue-400 font-bold cursor-pointer group-hover:opacity-80 transition-opacity">Details →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Differentiators */}
        <div className="bg-neutral-900 border border-gray-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">What Makes BNS Unique?</h2>
              <ul className="space-y-4">
                {[
                  'Bharat-Centric: Vernacular tracks, low-bandwidth options',
                  'Progression-Linked: Events align with BNS stages',
                  'Govt-Startup Synergy: Winners fast-tracked into AIM programs'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-300 bg-black/50 p-4 rounded-xl border border-gray-800">
                    <span className="text-xl">✨</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-2">Success Story Example</h3>
              <p className="text-blue-100 leading-relaxed italic">
                "A Stage 2 student wins 'Build for Bharat' → Gets scholarship for Stage 3 advanced labs → Launches agri-tech startup by Stage 6."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;