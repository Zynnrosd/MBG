<<<<<<< HEAD
import { Calculator, Calendar, MessageCircle, BookOpen } from 'lucide-react';
import logoUrl from '../../assets/LOGORN.png'; 

export default function DesktopNavbar({ currentPage, onNavigate }) {
  const navItems = [
    { id: 'recommendation', label: 'Rekomendasi', icon: Calculator },
    { id: 'schedule', label: 'Jadwal', icon: Calendar },
    { id: 'consultation', label: 'Konsultasi', icon: MessageCircle },
    { id: 'education', label: 'Edukasi', icon: BookOpen }
  ];

  return (
    <nav className="hidden md:block bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <img
                  src={logoUrl}
                  alt="SIGAP Gizi Logo"
                  className="w-9 h-9 object-contain"
                />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">
                SIGAP Gizi
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                Sistem Informasi Gizi Pintar
              </p>
=======
// src/components/navbar/DesktopNavbar.jsx
import { Calculator, Calendar, MessageCircle, BookOpen } from 'lucide-react';
// Opsional: Ganti logoUrl dengan logo baru jika ada, atau gunakan placeholder sementara
import logoUrl from '../../assets/LOGORN.png'; 

export default function DesktopNavbar({ currentPage, onNavigate }) {
  // Menu navigasi disesuaikan dengan 4 pilar aplikasi MBG
  const navItems = [
    { id: 'recommendation', label: 'Rekomendasi', icon: Calculator },
    { id: 'schedule', label: 'Jadwal MBG', icon: Calendar },
    { id: 'consultation', label: 'Konsultasi', icon: MessageCircle },
    { id: 'education', label: 'Edukasi Gizi', icon: BookOpen }
  ];

  return (
    <nav className="hidden md:block shadow-lg border-b border-blue-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <img
                src={logoUrl}
                alt="MBG Support Logo"
                className="w-12 h-12 object-contain filter drop-shadow-md transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping opacity-60" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-900 via-blue-800 to-slate-800 bg-clip-text text-transparent">
                MBG
              </h1>
              <h2 className="text-base font-semibold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent -mt-1">
                Nutrition Support
              </h2>
>>>>>>> 8db79ea4a2f3e842d03b12812063d89fbf5596e9
            </div>
          </div>

          {/* Navigation Links */}
<<<<<<< HEAD
          <div className="flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
=======
          <div className="flex items-center space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
>>>>>>> 8db79ea4a2f3e842d03b12812063d89fbf5596e9
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
<<<<<<< HEAD
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                  }`}
                >
                  <Icon size={18} strokeWidth={2.5} />
=======
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-base font-medium transition-all duration-200 ${
                    currentPage === item.id
                      ? 'bg-blue-50 text-blue-600 shadow-sm border border-blue-100'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-blue-500'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${currentPage === item.id ? 'text-blue-600' : 'text-slate-400'}`} />
>>>>>>> 8db79ea4a2f3e842d03b12812063d89fbf5596e9
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
          
        </div>
      </div>
    </nav>
  );
}