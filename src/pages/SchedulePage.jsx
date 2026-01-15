// src/pages/SchedulePage.jsx
import { Calendar, Info, CheckCircle, Clock } from 'lucide-react';

export default function SchedulePage() {
  const schedule = [
    { day: 'Senin', menu: 'Ayam Goreng Lengkuas', calories: 280, protein: '22g', status: 'Selesai' },
    { day: 'Selasa', menu: 'Ikan Bakar Bumbu Kuning', calories: 265, protein: '24g', status: 'Hari Ini' },
    { day: 'Rabu', menu: 'Semur Daging Sapi', calories: 310, protein: '25g', status: 'Besok' },
    { day: 'Kamis', menu: 'Telur Balado Spesial', calories: 220, protein: '15g', status: 'Mendatang' },
    { day: 'Jumat', menu: 'Lele Goreng Krispi', calories: 290, protein: '18g', status: 'Mendatang' },
  ];

  return (
    <div className="max-w-xl mx-auto p-6 space-y-8 pb-32 min-h-screen bg-white animate-in fade-in duration-700">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Jadwal MBG</h1>
        <p className="text-slate-500 font-medium">Menu makan siang sekolah minggu ini.</p>
      </header>

      <div className="space-y-4">
        {schedule.map((item, i) => (
          <div key={i} className={`p-6 rounded-[2.5rem] border transition-all duration-300 ${item.status === 'Hari Ini' ? 'bg-slate-900 text-white border-slate-900 shadow-2xl scale-[1.02]' : 'bg-slate-50 border-slate-100 text-slate-800'}`}>
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full inline-block ${item.status === 'Hari Ini' ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                  {item.day}
                </span>
                <h3 className="font-bold text-lg leading-tight">{item.menu}</h3>
                <div className="flex items-center gap-3">
                  <p className={`text-[11px] font-bold flex items-center gap-1.5 ${item.status === 'Hari Ini' ? 'text-blue-300' : 'text-slate-400'}`}>
                    <Info size={12}/> {item.calories} kcal
                  </p>
                  <p className={`text-[11px] font-bold flex items-center gap-1.5 ${item.status === 'Hari Ini' ? 'text-blue-300' : 'text-slate-400'}`}>
                    <CheckCircle size={12}/> {item.protein} Protein
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 shrink-0">
                {item.status === 'Hari Ini' ? (
                  <div className="bg-blue-600 p-2 rounded-2xl text-white animate-pulse"><Clock size={20} /></div>
                ) : item.status === 'Selesai' ? (
                  <div className="bg-green-100 p-2 rounded-2xl text-green-600"><CheckCircle size={20} /></div>
                ) : (
                  <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{item.status}</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}