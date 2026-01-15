// src/pages/ConsultationPage.jsx
import { MessageCircle, Star, ShieldCheck, Clock } from 'lucide-react';

export default function ConsultationPage() {
  const doctors = [
    { name: 'dr. Sarah Sp.GK', exp: '8 Thn', rate: '4.9', category: 'Spesialis Gizi', online: true },
    { name: 'dr. Andi Sp.GK', exp: '5 Thn', rate: '4.8', category: 'Spesialis Gizi', online: false },
    { name: 'Nutr. Rina M.Gz', exp: '10 Thn', rate: '5.0', category: 'Nutritionist', online: true },
  ];

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-6 pb-24">
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-blue-900">Konsultasi Ahli Gizi</h1>
        <p className="text-slate-500 text-sm">Layanan bimbingan gizi gratis untuk mendukung program MBG.</p>
      </div>

      <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-6 rounded-[2rem] text-white shadow-xl shadow-orange-100 flex items-center gap-4">
        <ShieldCheck size={40} className="opacity-80" />
        <div>
          <h3 className="font-bold text-lg">Konsultasi Prioritas</h3>
          <p className="text-xs opacity-90 font-medium text-orange-50">Orang tua dapat bertanya langsung seputar alergi, porsi makan, dan pertumbuhan anak.</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-slate-700 px-2 flex items-center justify-between">
          Dokter Tersedia
          <span className="text-[10px] text-green-500 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> {doctors.filter(d => d.online).length} Aktif</span>
        </h3>
        {doctors.map((doc, i) => (
          <div key={i} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4 hover:border-blue-200 transition-all">
            <div className="relative">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 font-bold text-xl">
                {doc.name[4]}
              </div>
              {doc.online && <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-800">{doc.name}</h3>
              <p className="text-[11px] text-blue-600 font-bold uppercase tracking-wider">{doc.category}</p>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-[10px] text-slate-400 flex items-center gap-1 font-medium"><Clock size={10}/> {doc.exp}</span>
                <span className="text-[10px] text-yellow-500 flex items-center gap-0.5 font-bold"><Star size={10} fill="currentColor"/> {doc.rate}</span>
              </div>
            </div>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-md hover:bg-blue-700 active:scale-95 transition-all">
              Tanya
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}