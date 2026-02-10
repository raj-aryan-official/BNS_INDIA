import React, { useState } from 'react';
import { FaSearch, FaFilter, FaEdit, FaTrash, FaEye, FaArrowLeft, FaUserGraduate } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ViewStudent = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    class: '',
    section: '',
    gender: ''
  });

  // Mock data - replace with actual API call
  const students = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      class: '10',
      section: 'A',
      rollNumber: '101',
      gender: 'Male',
      email: 'john.doe@example.com',
      phone: '1234567890'
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      class: '10',
      section: 'B',
      rollNumber: '102',
      gender: 'Female',
      email: 'jane.smith@example.com',
      phone: '0987654321'
    },
    {
      id: 3,
      firstName: 'Alice',
      lastName: 'Johnson',
      class: '9',
      section: 'A',
      rollNumber: '201',
      gender: 'Female',
      email: 'alice.j@example.com',
      phone: '1122334455'
    }
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch =
      student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNumber.includes(searchTerm);

    const matchesFilters =
      (!filters.class || student.class === filters.class) &&
      (!filters.section || student.section === filters.section) &&
      (!filters.gender || student.gender === filters.gender);

    return matchesSearch && matchesFilters;
  });

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
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
              <FaUserGraduate />
            </div>
            Student Directory
          </h1>
        </div>

        {/* Filters & Search */}
        <div className="bg-neutral-900 border border-gray-800 rounded-2xl p-6 shadow-xl">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search by name or roll number..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-12 pr-4 py-3 bg-black border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 lg:pb-0">
              <select
                name="class"
                value={filters.class}
                onChange={handleFilterChange}
                className="px-4 py-3 bg-black border border-gray-800 rounded-xl text-gray-300 focus:outline-none focus:border-blue-500 cursor-pointer min-w-[140px]"
              >
                <option value="">All Classes</option>
                {[...Array(12)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>Class {i + 1}</option>
                ))}
              </select>
              <select
                name="section"
                value={filters.section}
                onChange={handleFilterChange}
                className="px-4 py-3 bg-black border border-gray-800 rounded-xl text-gray-300 focus:outline-none focus:border-blue-500 cursor-pointer min-w-[140px]"
              >
                <option value="">All Sections</option>
                {['A', 'B', 'C', 'D'].map(sec => (
                  <option key={sec} value={sec}>Section {sec}</option>
                ))}
              </select>
              <select
                name="gender"
                value={filters.gender}
                onChange={handleFilterChange}
                className="px-4 py-3 bg-black border border-gray-800 rounded-xl text-gray-300 focus:outline-none focus:border-blue-500 cursor-pointer min-w-[140px]"
              >
                <option value="">All Genders</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-neutral-900 border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-400">
              <thead className="bg-gray-800/50 text-gray-200 font-semibold uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Roll No.</th>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Class/Sec</th>
                  <th className="px-6 py-4">Gender</th>
                  <th className="px-6 py-4">Contact</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student) => (
                    <tr key={student.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-mono text-blue-400">{student.rollNumber}</td>
                      <td className="px-6 py-4 font-medium text-white text-base">
                        {student.firstName} {student.lastName}
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs font-bold border border-gray-700">
                          {student.class}-{student.section}
                        </span>
                      </td>
                      <td className="px-6 py-4">{student.gender}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-gray-300">{student.email}</span>
                          <span className="text-xs text-gray-500">{student.phone}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white transition-all" title="View">
                            <FaEye />
                          </button>
                          <button className="p-2 rounded-lg bg-green-500/10 text-green-400 hover:bg-green-500 hover:text-white transition-all" title="Edit">
                            <FaEdit />
                          </button>
                          <button className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-all" title="Delete">
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                      <div className="flex flex-col items-center justify-center">
                        <FaUserGraduate className="text-4xl mb-4 opacity-20" />
                        <p className="text-lg">No students found matching your criteria.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewStudent;