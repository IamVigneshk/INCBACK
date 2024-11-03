import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import About from './components/About';
import ScanningInterface from './components/ScanningInterface';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';
import UserDashboard from './components/UserDashboard';

interface User {
  email: string;
  password: string;
  isPremium: boolean;
  dateAdded: string;
  lastScan?: string;
  status: 'active' | 'inactive';
}

function App() {
  const [scanInfo, setScanInfo] = useState<{
    isScanning: boolean;
    targetInfo?: { type: 'domain' | 'ip'; value: string };
    isAdmin?: boolean;
  }>({
    isScanning: false,
  });
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const handleScanStart = (targetInfo: { type: 'domain' | 'ip'; value: string }, isAdmin: boolean) => {
    setScanInfo({
      isScanning: true,
      targetInfo,
      isAdmin,
    });
  };

  const handleAddUser = (newUser: User) => {
    setUsers([...users, newUser]);
  };

  const handleUserLogin = (email: string, password: string): boolean => {
    const user = users.find(u => u.email === email && u.password === password);
    return !!user;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-black">
            <Navbar 
              onScanStart={handleScanStart} 
              onAdminClick={() => setShowAdminLogin(true)}
              onUserLogin={handleUserLogin}
            />
            <Hero onScanStart={handleScanStart} />
            <Features />
            <Services />
            <About />
          </div>
        } />
        <Route path="/admin" element={<AdminDashboard onLogout={() => setIsAdminAuthenticated(false)} onAddUser={handleAddUser} users={users} onReturnHome={() => setShowAdminLogin(false)} />} />
        <Route path="/user" element={<UserDashboard onLogout={() => null} onReturnHome={() => null} />} />
        <Route path="/admin-login" element={<AdminLogin onLoginSuccess={() => setIsAdminAuthenticated(true)} />} />
      </Routes>
    </Router>
  );
}

export default App;