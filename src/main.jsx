// src/main.jsx
import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import SplashScreen from './pages/SplashScreen';
// Import Halaman Baru (Pastikan file-file ini sudah Anda buat sesuai instruksi sebelumnya)
import RecommendationPage from './pages/RecommendationPage';
import SchedulePage from './pages/SchedulePage';
import ConsultationPage from './pages/ConsultationPage';
import EducationPage from './pages/EducationPage';

import DesktopNavbar from './components/navbar/DesktopNavbar';
import MobileNavbar from './components/navbar/MobileNavbar';
import './index.css'
import PWABadge from './PWABadge';

function AppRoot() {
  const [showSplash, setShowSplash] = useState(true);
  // Default halaman pertama adalah 'recommendation'
  const [currentPage, setCurrentPage] = useState('recommendation');

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

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

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar Desktop */}
      <DesktopNavbar 
        currentPage={currentPage} 
        onNavigate={handleNavigation}
      />
      
      {/* Main Content */}
      <main className="min-h-screen">
        {renderCurrentPage()}
      </main>

      {/* Navbar Mobile */}
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