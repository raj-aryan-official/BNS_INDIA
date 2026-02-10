import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaUsers, FaBook, FaChalkboardTeacher, FaCalendarAlt, FaPlus, FaFileAlt,
  FaVideo, FaClock, FaMapMarkerAlt, FaChartLine, FaClipboardList,
  FaComments, FaTasks, FaUserFriends, FaBuilding, FaSearch, FaFilter, FaCheck, FaTrash, FaBell
} from 'react-icons/fa';

const Dashboard = () => {
  const navigate = useNavigate();
  const [meetings, setMeetings] = useState([]);
  const [filteredMeetings, setFilteredMeetings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    // Load meetings from localStorage
    const savedMeetings = JSON.parse(localStorage.getItem('meetings') || '[]');
    setMeetings(savedMeetings);
    setFilteredMeetings(savedMeetings);
  }, []);

  useEffect(() => {
    let result = meetings;
    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      result = result.filter(m =>
        m.title?.toLowerCase().includes(lowerTerm) ||
        m.description?.toLowerCase().includes(lowerTerm)
      );
    }
    if (filterType !== 'all') {
      result = result.filter(m => m.type === filterType);
    }
    setFilteredMeetings(result);
  }, [searchTerm, filterType, meetings]);

  const updateMeetingStatus = (id) => {
    const updatedMeetings = meetings.map(m =>
      m.id === id ? { ...m, status: m.status === 'upcoming' ? 'completed' : 'upcoming' } : m
    );
    setMeetings(updatedMeetings);
    localStorage.setItem('meetings', JSON.stringify(updatedMeetings));
  };

  const deleteMeeting = (id) => {
    if (window.confirm('Are you sure you want to delete this meeting?')) {
      const updatedMeetings = meetings.filter(m => m.id !== id);
      setMeetings(updatedMeetings);
      localStorage.setItem('meetings', JSON.stringify(updatedMeetings));
    }
  };

  const stats = [
    { title: 'Total Students', value: '1,234', trend: '+12%', isPositive: true, icon: FaUsers, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { title: 'Active Courses', value: '45', trend: '+5%', isPositive: true, icon: FaBook, color: 'text-green-500', bg: 'bg-green-500/10' },
    { title: 'Teachers', value: '89', trend: '+3%', isPositive: true, icon: FaChalkboardTeacher, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { title: 'Upcoming Events', value: '12', trend: '-2%', isPositive: false, icon: FaCalendarAlt, color: 'text-orange-500', bg: 'bg-orange-500/10' }
  ];

  const quickActions = [
    { title: 'Add Student', icon: FaPlus, onClick: () => navigate('/add-student'), gradient: 'from-blue-600 to-blue-400' },
    { title: 'View Students', icon: FaUsers, onClick: () => navigate('/students'), gradient: 'from-green-600 to-green-400' },
    { title: 'Schedule Meeting', icon: FaCalendarAlt, onClick: () => navigate('/schedule-meeting'), gradient: 'from-amber-600 to-amber-400' },
    { title: 'View Reports', icon: FaFileAlt, onClick: () => navigate('/reports'), gradient: 'from-purple-600 to-purple-400' }
  ];

  return (
    <div className="min-h-screen bg-black pt-32 p-4 sm:p-6 lg:p-8 font-sans text-gray-100">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-800 pb-6"
        >
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Dashboard</h1>
            <p className="text-gray-400 mt-1">Welcome back, Principal.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 relative bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <FaBell className="text-gray-300" />
              <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-black"></span>
            </button>
            <div className="text-sm font-medium text-gray-400 bg-gray-900 border border-gray-800 px-4 py-2 rounded-full">
              {new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 hover:bg-neutral-800/50 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="text-xl" />
                </div>
                {stat.isPositive ? (
                  <span className="text-sm font-bold text-green-400 bg-green-900/20 px-2 py-1 rounded-lg border border-green-900/30">{stat.trend}</span>
                ) : (
                  <span className="text-sm font-bold text-red-400 bg-red-900/20 px-2 py-1 rounded-lg border border-red-900/30">{stat.trend}</span>
                )}
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.onClick}
              className={`relative overflow-hidden group p-1 rounded-2xl`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${action.gradient} opacity-20 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative bg-gray-900 h-full p-4 rounded-xl flex items-center justify-between group-hover:bg-opacity-90 transition-all">
                <span className="font-semibold text-gray-200 group-hover:text-white transition-colors">{action.title}</span>
                <div className={`p-2 rounded-lg bg-gradient-to-r ${action.gradient} text-white shadow-lg`}>
                  <action.icon />
                </div>
              </div>
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Meetings Section (Main) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-neutral-900 border border-gray-800 rounded-3xl overflow-hidden shadow-xl">
              <div className="p-6 border-b border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <FaTasks className="text-blue-500 text-xl" />
                  <h2 className="text-lg font-bold text-white">Department Meetings</h2>
                </div>

                <div className="flex gap-3">
                  <div className="relative flex-1 sm:flex-none">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full sm:w-48 pl-10 pr-4 py-2 text-sm border border-gray-700 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    />
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  </div>
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="py-2 pl-3 pr-8 text-sm border border-gray-700 rounded-xl bg-gray-800 text-gray-300 focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer hover:bg-gray-750"
                  >
                    <option value="all">All Types</option>
                    <option value="parent">Parent</option>
                    <option value="staff">Staff</option>
                    <option value="committee">Committee</option>
                  </select>
                  <button
                    onClick={() => navigate('/schedule-meeting')}
                    className="bg-blue-600 hover:bg-blue-500 text-white p-2.5 rounded-xl transition-colors shadow-lg shadow-blue-900/20"
                    title="New Meeting"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>

              <div className="max-h-[500px] overflow-y-auto custom-scrollbar p-2">
                <AnimatePresence>
                  {filteredMeetings.length > 0 ? (
                    <div className="space-y-2">
                      {filteredMeetings.map((meeting) => (
                        <motion.div
                          key={meeting.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, height: 0 }}
                          className={`p-4 rounded-2xl bg-gray-800/30 hover:bg-gray-800/60 border border-transparent hover:border-gray-700 transition-all ${meeting.status === 'completed' ? 'opacity-50' : ''}`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-4">
                              <div className={`p-3 rounded-xl flex-shrink-0 ${meeting.type === 'parent' ? 'bg-orange-500/10 text-orange-400' :
                                meeting.type === 'staff' ? 'bg-blue-500/10 text-blue-400' :
                                  'bg-purple-500/10 text-purple-400'
                                }`}>
                                {meeting.type === 'parent' ? <FaUserFriends /> :
                                  meeting.type === 'staff' ? <FaChalkboardTeacher /> : <FaBuilding />}
                              </div>
                              <div>
                                <h3 className={`font-semibold text-white text-lg ${meeting.status === 'completed' ? 'line-through decoration-gray-500' : ''}`}>
                                  {meeting.title}
                                </h3>
                                <p className="text-sm text-gray-400 mt-1 mb-2 max-w-md">{meeting.description || 'No description provided.'}</p>
                                <div className="flex flex-wrap gap-4 text-xs text-gray-500 font-medium tracking-wide">
                                  <span className="flex items-center gap-1.5 bg-gray-900 px-2 py-1 rounded"><FaCalendarAlt className="text-gray-400" /> {new Date(meeting.date).toLocaleDateString()}</span>
                                  <span className="flex items-center gap-1.5 bg-gray-900 px-2 py-1 rounded"><FaClock className="text-gray-400" /> {meeting.time}</span>
                                  <span className="flex items-center gap-1.5 bg-gray-900 px-2 py-1 rounded"><FaMapMarkerAlt className="text-gray-400" /> {meeting.location}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2">
                              <button
                                onClick={() => updateMeetingStatus(meeting.id)}
                                className={`text-xs px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider border transition-all ${meeting.status === 'completed'
                                  ? 'bg-green-900/20 text-green-400 border-green-900/50 hover:bg-green-900/30'
                                  : 'bg-yellow-900/20 text-yellow-400 border-yellow-900/50 hover:bg-yellow-900/30'
                                  }`}
                              >
                                {meeting.status === 'upcoming' ? 'Mark Done' : 'Completed'}
                              </button>
                              <button
                                onClick={() => deleteMeeting(meeting.id)}
                                className="text-xs px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider border border-gray-700 text-gray-400 hover:bg-red-900/20 hover:text-red-400 hover:border-red-900/50 transition-colors"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-16 text-center text-gray-600">
                      <FaCalendarAlt className="mx-auto text-5xl mb-4 opacity-20" />
                      <p className="text-lg">No scheduled meetings found.</p>
                      <button
                        onClick={() => navigate('/schedule-meeting')}
                        className="mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium"
                      >
                        + Schedule New Meeting
                      </button>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Sidebar (Activity) */}
          <div className="space-y-6">
            <div className="bg-neutral-900 border border-gray-800 rounded-3xl p-6">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400"><FaChartLine /></div>
                Recent Updates
              </h2>
              <div className="space-y-8 relative">
                <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gray-800"></div>
                {[
                  { title: 'New Student Registration', text: 'John Doe joined Class 10A', time: '2h ago', icon: FaClipboardList, color: 'text-blue-400', bg: 'bg-gray-900 ring-4 ring-black' },
                  { title: 'Mathematics Syllabus', text: 'Updated for Term 2', time: '4h ago', icon: FaBook, color: 'text-green-400', bg: 'bg-gray-900 ring-4 ring-black' },
                  { title: 'Staff Meeting', text: 'Rescheduled to Friday', time: '1d ago', icon: FaComments, color: 'text-purple-400', bg: 'bg-gray-900 ring-4 ring-black' }
                ].map((activity, i) => (
                  <div key={i} className="relative pl-12">
                    <div className={`absolute left-0 top-0 w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center z-10 ${activity.bg} ${activity.color}`}>
                      <activity.icon className="text-sm" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-200">{activity.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">{activity.text}</p>
                      <span className="text-xs text-gray-600 mt-2 block font-mono">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-3xl p-6 text-white text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-xl font-bold mb-2 relative z-10">Pro Support</h3>
              <p className="text-indigo-200 text-sm mb-6 relative z-10">Get 24/7 priority assistance with our dedicated support team.</p>
              <button className="bg-white text-indigo-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors w-full relative z-10 shadow-lg">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;