import { BookOpen, Newspaper } from 'lucide-react';

export default function EducationPage() {
  const facts = [
    { title: 'Pentingnya Protein', content: 'Protein membantu regenerasi sel otot anak setelah beraktivitas di sekolah.', icon: '🥩' },
    { title: 'Air Putih vs Manis', content: 'Minum air putih membantu konsentrasi belajar lebih baik daripada minuman manis.', icon: '💧' },
  ];

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-6 pb-20">
      <h1 className="text-2xl font-bold text-blue-900 flex items-center gap-2">
        <BookOpen /> Edukasi & Berita Gizi
      </h1>

      <div className="space-y-4">
        <h2 className="font-bold flex items-center gap-2 text-slate-700"><Newspaper size={18}/> Fakta Gizi Hari Ini</h2>
        <div className="grid grid-cols-1 gap-4">
          {facts.map((f, i) => (
            <div key={i} className="bg-white p-5 rounded-3xl border shadow-sm flex gap-4">
              <span className="text-3xl">{f.icon}</span>
              <div>
                <h3 className="font-bold text-slate-800">{f.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{f.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}