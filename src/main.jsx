<<<<<<< HEAD
import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import SplashScreen from './pages/SplashScreen';
=======
// src/main.jsx
import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import SplashScreen from './pages/SplashScreen';
// Import Halaman Baru (Pastikan file-file ini sudah Anda buat sesuai instruksi sebelumnya)
>>>>>>> 8db79ea4a2f3e842d03b12812063d89fbf5596e9
import RecommendationPage from './pages/RecommendationPage';
import SchedulePage from './pages/SchedulePage';
import ConsultationPage from './pages/ConsultationPage';
import EducationPage from './pages/EducationPage';
<<<<<<< HEAD
import LoginPage from './pages/admin/LoginPage';
import Dashboard from './pages/admin/Dashboard';
import PersagiLoginPage from './pages/persagi/PersagiLoginPage';
import PersagiDashboard from './pages/persagi/PersagiDashboard';
import DesktopNavbar from './components/navbar/DesktopNavbar';
import MobileNavbar from './components/navbar/MobileNavbar';
import { getCurrentUser } from './config/supabase';
=======

import DesktopNavbar from './components/navbar/DesktopNavbar';
import MobileNavbar from './components/navbar/MobileNavbar';
>>>>>>> 8db79ea4a2f3e842d03b12812063d89fbf5596e9
import './index.css'
import PWABadge from './PWABadge';

function AppRoot() {
  const [showSplash, setShowSplash] = useState(true);
<<<<<<< HEAD
  const [currentPage, setCurrentPage] = useState('recommendation');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPersagi, setIsPersagi] = useState(false);
  const [adminUser, setAdminUser] = useState(null);
  const [persagiUser, setPersagiUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const path = window.location.pathname;
    
    // Check admin path
    if (path.includes('/admin')) {
      const user = await getCurrentUser();
      if (user) {
        setAdminUser(user);
        setIsAdmin(true);
      }
    }
    
    // Check PERSAGI path
    if (path.includes('/persagi')) {
      const user = await getCurrentUser();
      if (user) {
        setPersagiUser(user);
        setIsPersagi(true);
      }
    }
    
    setCheckingAuth(false);
  };
=======
  // Default halaman pertama adalah 'recommendation'
  const [currentPage, setCurrentPage] = useState('recommendation');
>>>>>>> 8db79ea4a2f3e842d03b12812063d89fbf5596e9

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

<<<<<<< HEAD
  const handleAdminLogin = (user) => {
    setAdminUser(user);
    setIsAdmin(true);
  };

  const handleAdminLogout = () => {
    setAdminUser(null);
    setIsAdmin(false);
    window.location.href = '/';
  };

  const handlePersagiLogin = (user) => {
    setPersagiUser(user);
    setIsPersagi(true);
  };

  const handlePersagiLogout = () => {
    setPersagiUser(null);
    setIsPersagi(false);
    window.location.href = '/';
  };

=======
>>>>>>> 8db79ea4a2f3e842d03b12812063d89fbf5596e9
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'recommendation':
        return <RecommendationPage />;
      case 'schedule':
        return <SchedulePage />;
      case 'consultation':
        return <ConsultationPage />;
      case 'education':
        return <EducationPage />;
      default:
        return <RecommendationPage />;
    }
  };

<<<<<<< HEAD
  // PERSAGI Login/Dashboard Route
  if (window.location.pathname.includes('/persagi')) {
    if (checkingAuth) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-slate-500 font-medium">Memeriksa autentikasi...</p>
          </div>
        </div>
      );
    }

    if (!isPersagi) {
      return <PersagiLoginPage onLoginSuccess={handlePersagiLogin} />;
    }

    return <PersagiDashboard onLogout={handlePersagiLogout} />;
  }

  // Admin Login/Dashboard Route
  if (window.location.pathname.includes('/admin')) {
    if (checkingAuth) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-slate-500 font-medium">Memeriksa autentikasi...</p>
          </div>
        </div>
      );
    }

    if (!isAdmin) {
      return <LoginPage onLoginSuccess={handleAdminLogin} />;
    }

    return <Dashboard onLogout={handleAdminLogout} />;
  }

  // User-facing app
=======
>>>>>>> 8db79ea4a2f3e842d03b12812063d89fbf5596e9
  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-white">
=======
    <div className="min-h-screen bg-gray-50">
      {/* Navbar Desktop */}
>>>>>>> 8db79ea4a2f3e842d03b12812063d89fbf5596e9
      <DesktopNavbar 
        currentPage={currentPage} 
        onNavigate={handleNavigation}
      />
      
<<<<<<< HEAD
=======
      {/* Main Content */}
>>>>>>> 8db79ea4a2f3e842d03b12812063d89fbf5596e9
      <main className="min-h-screen">
        {renderCurrentPage()}
      </main>

<<<<<<< HEAD
=======
      {/* Navbar Mobile */}
>>>>>>> 8db79ea4a2f3e842d03b12812063d89fbf5596e9
      <MobileNavbar 
        currentPage={currentPage} 
        onNavigate={handleNavigation}
      />

      <PWABadge />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoot />
  </StrictMode>,
)