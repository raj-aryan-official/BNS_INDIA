import React, { useState } from 'react';
import { FaFileAlt, FaDownload, FaFilter, FaChartBar, FaChartLine, FaChartPie, FaArrowLeft, FaFilePdf } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ViewReport = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    reportType: '',
    class: '',
    section: '',
    dateRange: 'month'
  });

  const [selectedReport, setSelectedReport] = useState(null);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  // Mock data - replace with actual API call
  const reports = [
    {
      id: 1,
      title: 'Student Attendance Report',
      type: 'attendance',
      date: 'March 15, 2024',
      format: 'PDF',
      size: '2.5 MB'
    },
    {
      id: 2,
      title: 'Academic Performance',
      type: 'academic',
      date: 'March 14, 2024',
      format: 'PDF',
      size: '3.1 MB'
    },
    {
      id: 3,
      title: 'Fee Collection Summary',
      type: 'finance',
      date: 'March 13, 2024',
      format: 'Excel',
      size: '1.8 MB'
    }
  ];

  const handleViewReport = (report) => {
    setSelectedReport(report);
  };

  const handleDownload = (report) => {
    console.log('Downloading report:', report);
    alert(`Downloading ${report.title}...`);
  };

  return (
    <div className="min-h-screen bg-black pt-32 p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
              <FaChartBar />
            </div>
            School Reports
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-neutral-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <FaFilter className="text-gray-400" /> Filter Reports
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Report Type</label>
                  <select
                    name="reportType"
                    value={filters.reportType}
                    onChange={handleFilterChange}
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-xl text-gray-200 focus:outline-none focus:border-purple-500 cursor-pointer"
                  >
                    <option value="">All Types</option>
                    <option value="attendance">Attendance</option>
                    <option value="academic">Academic</option>
                    <option value="finance">Finance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Class</label>
                  <select
                    name="class"
                    value={filters.class}
                    onChange={handleFilterChange}
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-xl text-gray-200 focus:outline-none focus:border-purple-500 cursor-pointer"
                  >
                    <option value="">All Classes</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>Class {i + 1}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Date Range</label>
                  <select
                    name="dateRange"
                    value={filters.dateRange}
                    onChange={handleFilterChange}
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-xl text-gray-200 focus:outline-none focus:border-purple-500 cursor-pointer"
                  >
                    <option value="week">Last Week</option>
                    <option value="month">Last Month</option>
                    <option value="quarter">Last Quarter</option>
                    <option value="year">Last Year</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Reports List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-neutral-900 border border-gray-800 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-gray-800">
                <h2 className="text-lg font-bold text-white">Available Reports</h2>
              </div>
              <div className="divide-y divide-gray-800">
                {reports.map((report) => (
                  <div
                    key={report.id}
                    onClick={() => handleViewReport(report)}
                    className={`p-6 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group ${selectedReport?.id === report.id ? 'bg-white/5 border-l-4 border-purple-500' : 'border-l-4 border-transparent'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gray-800 rounded-xl text-red-400 group-hover:scale-110 transition-transform">
                        <FaFilePdf className="text-xl" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{report.title}</h3>
                        <p className="text-sm text-gray-500">{report.date} • {report.size}</p>
                      </div>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleDownload(report); }}
                      className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-all"
                      title="Download"
                    >
                      <FaDownload />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {selectedReport && (
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-purple-600/10 blur-[100px] rounded-full pointing-events-none"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{selectedReport.title}</h3>
                      <p className="text-gray-400 text-sm">Generated on {selectedReport.date}</p>
                    </div>
                    <button
                      onClick={() => handleDownload(selectedReport)}
                      className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors shadow-lg shadow-purple-900/20"
                    >
                      <FaDownload /> Download Report
                    </button>
                  </div>

                  {/* Stats Preview */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                      <div className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-1">Attention Required</div>
                      <div className="text-2xl font-bold text-red-400">12</div>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                      <div className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-1">Performance</div>
                      <div className="text-2xl font-bold text-green-400">+5.2%</div>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                      <div className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-1">Total Records</div>
                      <div className="text-2xl font-bold text-blue-400">1,248</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewReport;