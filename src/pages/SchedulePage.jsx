import { Calendar, Info } from 'lucide-react';

export default function SchedulePage() {
  const dummyWeekly = [
    { day: 'Senin', menu: 'Nasi Kuning & Ayam Suwir', calories: 450, protein: '18g', status: 'Kemarin' },
    { day: 'Selasa', menu: 'Nasi Putih & Ikan Goreng', calories: 420, protein: '22g', status: 'Hari Ini' },
    { day: 'Rabu', menu: 'Nasi Putih & Daging Semur', calories: 480, protein: '20g', status: 'Besok' },
    { day: 'Kamis', menu: 'Nasi Putih & Telur Balado', calories: 400, protein: '15g', status: 'Mendatang' },
    { day: 'Jumat', menu: 'Nasi Putih & Ayam Krispi', calories: 500, protein: '25g', status: 'Mendatang' },
  ];

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-6 pb-20">
      <h1 className="text-2xl font-bold text-blue-900 flex items-center gap-2">
        <Calendar /> Jadwal MBG Mingguan
      </h1>
      
      <div className="space-y-4">
        {dummyWeekly.map((item, i) => (
          <div key={i} className={`p-5 rounded-3xl border shadow-sm flex justify-between items-center ${item.status === 'Hari Ini' ? 'bg-blue-50 border-blue-200 ring-2 ring-blue-400' : 'bg-white'}`}>
            <div className="space-y-1">
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.status === 'Hari Ini' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}>{item.day}</span>
              <h3 className="font-bold text-slate-800">{item.menu}</h3>
              <p className="text-xs text-slate-500 flex items-center gap-1"><Info size={12}/> {item.calories} kkal | Protein {item.protein}</p>
            </div>
            <p className="text-xs font-medium text-slate-400 italic">{item.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}