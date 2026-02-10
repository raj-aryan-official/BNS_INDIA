import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import CourseDetail from './pages/CourseDetail'
import Highlights from './pages/Practice'
import Events from './pages/Events'
import Login from './pages/Login'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'
import StageDetails from './pages/StageDetails'
import Stages from './pages/Stages'
import Membership from './pages/Scholarship'
import ForgotPassword from './pages/ForgotPassword'
import ScrollToTop from './components/ScrollToTop'
import Dashboard from './pages/Dashboard'
import AddStudent from './pages/AddStudent'
import ViewStudent from './pages/ViewStudent'
import ScheduleMeeting from './pages/ScheduleMeeting'
import ViewReport from './pages/ViewReport'
import Subscription from './pages/Subscription'
import './App.css'

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  const [language, setLanguage] = useState('en')
  const [darkMode, setDarkMode] = useState(true)

  return (
    <>
      <ScrollToTop />
      <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
        <Header
          language={language}
          setLanguage={setLanguage}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/courses/:courseId" element={<CourseDetail />} />
            <Route path="/highlights" element={<Highlights />} />
            <Route path="/events" element={<Events />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/stages" element={<Stages />} />
            <Route path="/stages/:stageId" element={<StageDetails />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add-student"
              element={
                <ProtectedRoute>
                  <AddStudent />
                </ProtectedRoute>
              }
            />
            <Route
              path="/students"
              element={
                <ProtectedRoute>
                  <ViewStudent />
                </ProtectedRoute>
              }
            />
            <Route
              path="/schedule-meeting"
              element={
                <ProtectedRoute>
                  <ScheduleMeeting />
                </ProtectedRoute>
              }
            />
            <Route
              path="/reports"
              element={
                <ProtectedRoute>
                  <ViewReport />
                </ProtectedRoute>
              }
            />
            <Route
              path="/subscription"
              element={
                <ProtectedRoute>
                  <Subscription />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
