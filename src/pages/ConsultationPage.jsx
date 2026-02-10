// src/pages/ConsultationPage.jsx
import { MessageCircle, Star, ShieldCheck, Clock, Check } from 'lucide-react';

export default function ConsultationPage() {
  const doctors = [
    { name: 'dr. Tirta Sp.GK', exp: '8 Thn', rate: '4.9', category: 'Spesialis Gizi', online: true },
    { name: 'dr. Velayaty Sp.GK', exp: '5 Thn', rate: '4.8', category: 'Spesialis Gizi', online: false },
    { name: 'Nutr. Alin M.Gz', exp: '10 Thn', rate: '4.0', category: 'Nutritionist', online: true },
  ];

  return (
    <div className="max-w-xl mx-auto p-6 space-y-8 pb-32 min-h-screen bg-white animate-in fade-in duration-700">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Tanya Ahli</h1>
        <p className="text-slate-500 font-medium">Bimbingan gizi gratis untuk mendukung MBG.</p>
      </header>

      {/* Banner - Fix Gepeng dengan shrink-0 */}
      <div className="bg-slate-900 p-6 rounded-[2.5rem] text-white flex items-center gap-5 shadow-xl shadow-slate-200">
        <div className="bg-blue-600 p-3 rounded-2xl shrink-0">
          <ShieldCheck size={28} className="text-white" />
        </div>
        <div className="space-y-1">
          <h3 className="font-bold text-base tracking-tight">Bimbingan Prioritas</h3>
          <p className="text-[11px] opacity-70 leading-relaxed">Tanyakan takaran porsi, pencegahan anemia, dan alergi makanan si kecil kepada ahlinya.</p>
        </div>
      </div>

      <div className="space-y-4">
        {doctors.map((doc, i) => (
          <div key={i} className="bg-slate-50 p-5 rounded-[2rem] border border-slate-100 flex items-center gap-5 transition-all hover:bg-white hover:shadow-lg hover:border-blue-100 group">
            <div className="relative shrink-0">
              <div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-blue-600 font-black text-xl shadow-sm">
                {doc.name[4]}
              </div>
              {doc.online && <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-4 border-slate-50 rounded-full" />}
            </div>
            <div className="flex-1 space-y-1">
              <h3 className="font-bold text-slate-800 text-base">{doc.name}</h3>
              <p className="text-[10px] text-blue-600 font-black uppercase tracking-widest">{doc.category}</p>
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-slate-400 font-bold flex items-center gap-1"><Clock size={10}/> {doc.exp}</span>
                <span className="text-[10px] text-yellow-600 font-bold flex items-center gap-1"><Star size={10} fill="currentColor"/> {doc.rate}</span>
              </div>
            </div>
            <button className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95">
              <MessageCircle size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
