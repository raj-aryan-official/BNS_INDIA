import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaSchool,
  FaUserTie,
  FaUserCog,
  FaChartBar,
  FaMapMarkerAlt,
  FaLock,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaGlobe,
  FaCheckCircle
} from 'react-icons/fa';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    schoolName: '',
    schoolCode: '',
    schoolType: '',
    schoolBoard: '',
    establishmentYear: '',
    principalName: '',
    principalEmail: '',
    principalPhone: '',
    adminEmail: '',
    adminPhone: '',
    totalStudents: '',
    totalTeachers: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    website: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const schoolTypes = ['Primary School', 'Middle School', 'High School', 'Higher Secondary School', 'Composite School'];
  const schoolBoards = ['CBSE', 'ICSE', 'State Board', 'IB', 'IGCSE', 'Other'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Bypassing verification as requested
    const dummyUser = {
      _id: 'dummy_id_new',
      name: formData.principalName || 'New User',
      email: formData.adminEmail || 'new@example.com',
      isEnrolled: false
    };

    alert('Registration successful! Auto-logging in for testing...');
    localStorage.setItem('userInfo', JSON.stringify(dummyUser));
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('isEnrolled', 'true');
    navigate('/dashboard');
  };

  const SectionHeader = ({ icon: Icon, title }) => (
    <div className="flex items-center space-x-3 mb-6 border-b border-gray-800 pb-3 mt-8 first:mt-0">
      <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
        <Icon className="text-xl" />
      </div>
      <h3 className="text-xl font-bold text-white tracking-wide">{title}</h3>
    </div>
  );

  const InputField = ({ label, name, type = "text", required = false, placeholder, icon: Icon, options }) => (
    <div className="col-span-1">
      <label htmlFor={name} className="block text-sm font-semibold text-gray-400 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative group">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none z-10">
            <div className="bg-gray-800/50 p-2 rounded-lg ml-1">
              <Icon className="text-gray-500 group-focus-within:text-blue-400 transition-colors" />
            </div>
          </div>
        )}
        {options ? (
          <select
            id={name}
            name={name}
            required={required}
            className={`block w-full ${Icon ? 'pl-12' : 'pl-4'} pr-10 py-3 bg-black border border-gray-800 rounded-xl text-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm appearance-none cursor-pointer transition-all hover:border-gray-700`}
            value={formData[name]}
            onChange={handleChange}
          >
            <option value="">Select {label}</option>
            {options.map(opt => (
              <option key={opt} value={opt} className="bg-gray-900">{opt}</option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            name={name}
            id={name}
            required={required}
            className={`block w-full ${Icon ? 'pl-12' : 'pl-4'} pr-4 py-3 bg-black border border-gray-800 rounded-xl text-gray-200 placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm transition-all hover:border-gray-700`}
            placeholder={placeholder}
            value={formData[name]}
            onChange={handleChange}
          />
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">Join Our Network</h1>
          <p className="text-lg text-gray-400">Register your school to access premium resources and mentorship.</p>
        </div>

        <div className="bg-neutral-900 shadow-2xl rounded-3xl overflow-hidden border border-gray-800">
          {/* Progress/Steps indicator could go here, but focusing on single page form for now */}
          <div className="h-2 bg-gray-800 w-full">
            <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-1/3 rounded-r-full"></div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
            {error && (
              <div className="bg-red-900/20 text-red-400 px-4 py-3 rounded-xl border border-red-500/30 flex items-center">
                <FaCheckCircle className="mr-2" /> {error}
              </div>
            )}

            {/* School Information */}
            <div className="space-y-6">
              <SectionHeader icon={FaSchool} title="School Information" />
              <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                <InputField label="School Name" name="schoolName" required icon={FaBuilding} placeholder="e.g. St. Mary's High School" />
                <InputField label="School Code / UDISE" name="schoolCode" required icon={FaChartBar} placeholder="School Identifier" />
                <InputField label="School Type" name="schoolType" options={schoolTypes} required icon={FaSchool} />
                <InputField label="Board of Education" name="schoolBoard" options={schoolBoards} required icon={FaSchool} />
                <InputField label="Establishment Year" name="establishmentYear" type="number" icon={FaChartBar} placeholder="YYYY" />
                <InputField label="Website" name="website" type="url" icon={FaGlobe} placeholder="https://..." />
              </div>
            </div>

            {/* Principal Information */}
            <div className="space-y-6">
              <SectionHeader icon={FaUserTie} title="Principal Information" />
              <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                <InputField label="Full Name" name="principalName" required icon={FaUserTie} placeholder="Dr. John Doe" />
                <InputField label="Official Email" name="principalEmail" type="email" required icon={FaEnvelope} placeholder="principal@school.com" />
                <InputField label="Phone Number" name="principalPhone" type="tel" required icon={FaPhone} placeholder="+91 9876543210" />
              </div>
            </div>

            {/* Admin/Access Information */}
            <div className="space-y-6">
              <SectionHeader icon={FaUserCog} title="Administrator Access" />
              <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                <InputField label="Admin Email (Login ID)" name="adminEmail" type="email" required icon={FaEnvelope} placeholder="admin@school.com" />
                <InputField label="Admin Phone" name="adminPhone" type="tel" required icon={FaPhone} placeholder="+91..." />
                <InputField label="Password" name="password" type="password" required icon={FaLock} placeholder="Create a strong password" />
                <InputField label="Confirm Password" name="confirmPassword" type="password" required icon={FaLock} placeholder="Repeat password" />
              </div>
            </div>

            {/* Location */}
            <div className="space-y-6">
              <SectionHeader icon={FaMapMarkerAlt} title="Location & Address" />
              <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                <div className="col-span-2">
                  <InputField label="Address" name="address" required icon={FaMapMarkerAlt} placeholder="Full street address" />
                </div>
                <InputField label="City" name="city" required icon={FaMapMarkerAlt} />
                <InputField label="State" name="state" required icon={FaMapMarkerAlt} />
                <InputField label="Pincode" name="pincode" type="number" required icon={FaMapMarkerAlt} />
              </div>
            </div>

            <div className="pt-8 flex flex-col items-center space-y-4">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full max-w-md flex justify-center py-4 px-6 border border-transparent rounded-xl shadow-lg shadow-blue-600/20 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 transition-all duration-300 transform hover:scale-[1.02] ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isLoading ? 'Creating Account...' : 'Register School'}
              </button>
              <p className="text-sm text-gray-500">
                Already have an account?{' '}
                <Link to="/login" className="font-bold text-blue-500 hover:text-blue-400">
                  Log in here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;