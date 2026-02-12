<<<<<<< HEAD
=======
// src/components/navbar/MobileNavbar.jsx
>>>>>>> 8db79ea4a2f3e842d03b12812063d89fbf5596e9
import { Calculator, Calendar, MessageCircle, BookOpen } from 'lucide-react';

export default function MobileNavbar({ currentPage, onNavigate }) {
  const navItems = [
<<<<<<< HEAD
    { id: 'recommendation', label: 'Rekomendasi', icon: Calculator },
    { id: 'schedule', label: 'Jadwal', icon: Calendar },
    { id: 'consultation', label: 'Konsultasi', icon: MessageCircle },
    { id: 'education', label: 'Edukasi', icon: BookOpen }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-2 py-2 safe-area-bottom md:hidden z-50 shadow-lg">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all duration-200 min-w-[70px] ${
                isActive ? 'text-blue-600' : 'text-slate-400'
              }`}
            >
              <div className={`p-2 rounded-lg transition-all ${
                isActive ? 'bg-blue-50' : ''
              }`}>
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={`text-xs font-semibold ${isActive ? '' : 'font-medium'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
=======
    { id: 'recommendation', label: 'Gizi', icon: Calculator },
    { id: 'schedule', label: 'Jadwal', icon: Calendar },
    { id: 'consultation', label: 'Tanya', icon: MessageCircle },
    { id: 'education', label: 'Info', icon: BookOpen }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-blue-100 px-4 py-3 md:hidden flex justify-between items-center z-50">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentPage === item.id;
        
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center gap-1 transition-all duration-200 flex-1 ${
              isActive ? 'text-blue-600' : 'text-slate-400'
            }`}
          >
            <Icon className={`w-6 h-6 ${isActive ? 'fill-blue-50' : ''}`} />
            <span className="text-[10px] font-bold">{item.label}</span>
          </button>
        );
      })}
>>>>>>> 8db79ea4a2f3e842d03b12812063d89fbf5596e9
    </nav>
  );
}