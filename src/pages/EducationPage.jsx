// src/pages/EducationPage.jsx
import { Sparkles, ArrowUpRight } from 'lucide-react';

export default function EducationPage() {
  const funFacts = [
    { title: 'Super Protein', content: 'Satu butir telur mengandung protein setara segelas susu.', icon: '🍳', color: 'from-yellow-400 to-orange-400' },
    { title: 'Cerdas Ikan', content: 'Ikan kembung punya Omega-3 lebih tinggi dari Salmon.', icon: '🐟', color: 'from-blue-400 to-indigo-400' },
    { title: 'Zat Besi', content: 'Bayam gelap bantu cegah anak lemas saat belajar.', icon: '🥦', color: 'from-green-400 to-emerald-400' },
    { title: 'Hormon Tinggi', content: 'Tidur 10 jam bantu hormon pertumbuhan maksimal.', icon: '🌙', color: 'from-purple-400 to-pink-400' }
  ];

  return (
    <div className="p-5 max-w-xl mx-auto space-y-10 pb-28 min-h-screen">
      <header className="space-y-2">
        <h1 className="text-4xl font-black text-slate-900">EduGizi<span className="text-blue-600">.</span></h1>
        <p className="text-slate-500 font-medium">Fakta cepat untuk tumbuh kembang anak.</p>
      </header>

      <div className="grid grid-cols-1 gap-6">
        {funFacts.map((fact, i) => (
          <div key={i} className="group relative bg-white p-1 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${fact.color} blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity`} />
            <div className="relative bg-white rounded-[2.4rem] p-6 flex gap-6 items-center">
              <div className="text-4xl bg-slate-50 w-20 h-20 flex items-center justify-center rounded-3xl shadow-inner shrink-0 group-hover:rotate-6 transition-transform">
                {fact.icon}
              </div>
              <div className="space-y-1 flex-1">
                <h3 className="font-black text-lg text-slate-800 tracking-tight">{fact.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium opacity-80">{fact.content}</p>
              </div>
              <ArrowUpRight className="text-slate-200 group-hover:text-blue-500 transition-colors" size={24} />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 p-8 rounded-[3rem] text-center text-white space-y-4">
        <Sparkles className="mx-auto text-blue-400" size={32} />
        <h2 className="text-xl font-black">Update Mingguan</h2>
        <p className="text-xs text-slate-400 leading-relaxed font-medium italic">Fakta gizi akan diperbarui secara berkala berdasarkan jurnal nutrisi terbaru.</p>
      </div>
    </div>
  );
}