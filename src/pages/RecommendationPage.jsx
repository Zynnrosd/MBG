// src/pages/RecommendationPage.jsx
import { useState, useEffect } from 'react';
import nutritionService from '../services/nutritionService';
import { Search, Calculator, CheckCircle, RefreshCw, ArrowRight, User, Info } from 'lucide-react';

export default function RecommendationPage() {
  const [formData, setFormData] = useState({ age: '', weight: '', height: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [selectedLunch, setSelectedLunch] = useState(null);
  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delay = setTimeout(async () => {
      if (searchTerm && !selectedLunch) {
        const res = await nutritionService.searchMenu(searchTerm);
        setResults(res);
      } else { setResults([]); }
    }, 300);
    return () => clearTimeout(delay);
  }, [searchTerm, selectedLunch]);

  const handleCalculate = async (e) => {
    e.preventDefault();
    if (!selectedLunch) return;
    setLoading(true);
    try {
      const targetDaily = 1000 + (parseInt(formData.age) * 100);
      const breakfastEst = targetDaily * 0.25;
      const lunchRiceEst = 130; // Estimasi nasi sekolah
      let remaining = targetDaily - breakfastEst - (selectedLunch.calories + lunchRiceEst);
      
      const minDinner = targetDaily * 0.25;
      if (remaining < minDinner) remaining = minDinner;

      const suggestions = await nutritionService.getDinnerRecommendation(remaining);
      setRecommendation({ targetDaily, remaining: Math.round(remaining), suggestions });
    } finally { setLoading(false); }
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-8 pb-28 min-h-screen bg-white">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">Analisis Gizi</h1>
        <p className="text-slate-500 mt-1">Estimasi kebutuhan malam berdasarkan MBG siang.</p>
      </header>

      {!recommendation ? (
        <form onSubmit={handleCalculate} className="space-y-6">
          {/* Section Data Fisik */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-blue-600 font-bold mb-2">
              <User size={18} /> <span>Data Fisik Anak</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {['age', 'weight', 'height'].map(key => (
                <input key={key} type="number" placeholder={key === 'age' ? 'Usia' : key === 'weight' ? 'BB (Kg)' : 'TB (Cm)'}
                  className="w-full p-3 bg-white border border-slate-100 rounded-2xl text-sm focus:border-blue-500 outline-none" required
                  onChange={e => setFormData({...formData, [key]: e.target.value})} />
              ))}
            </div>
          </div>

          {/* Section Menu Siang */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 space-y-4 relative">
            <div className="flex items-center gap-2 text-blue-600 font-bold mb-2">
              <Calculator size={18} /> <span>Lauk MBG Siang</span>
            </div>
            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
              <input type="text" placeholder="Cari lauk sekolah..." 
                className="w-full pl-11 p-3 bg-white border border-slate-100 rounded-2xl text-sm outline-none focus:border-blue-500"
                value={searchTerm} onChange={e => {setSearchTerm(e.target.value); setSelectedLunch(null);}} />
            </div>

            {results.length > 0 && !selectedLunch && (
              <div className="absolute z-10 left-6 right-6 bg-white border border-slate-100 mt-1 rounded-2xl shadow-xl max-h-48 overflow-y-auto">
                {results.map(f => (
                  <button key={f.id} type="button" onClick={() => {setSelectedLunch(f); setSearchTerm(f.name);}}
                    className="w-full text-left p-3 hover:bg-blue-50 border-b border-slate-50 last:border-0 text-sm">
                    <p className="font-bold">{f.name}</p>
                    <p className="text-[10px] text-slate-400">{f.calories} kkal</p>
                  </button>
                ))}
              </div>
            )}

            {selectedLunch && (
              <div className="bg-blue-600 p-4 rounded-2xl text-white flex justify-between items-center animate-in zoom-in duration-300">
                <div className="text-sm font-bold flex items-center gap-2"><CheckCircle size={16}/> {selectedLunch.name}</div>
                <button type="button" onClick={() => {setSelectedLunch(null); setSearchTerm('');}} className="text-[10px] font-bold underline opacity-80">Ganti</button>
              </div>
            )}
          </div>

          <button type="submit" disabled={!selectedLunch || loading}
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-100 flex items-center justify-center gap-2 active:scale-[0.98] transition-all disabled:opacity-50">
            {loading ? <RefreshCw className="animate-spin" /> : <>Hitung Rekomendasi <ArrowRight size={18}/></>}
          </button>
        </form>
      ) : (
        <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
          <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-xl text-center space-y-2">
            <p className="text-xs font-bold opacity-70 tracking-widest uppercase">Target Kalori Malam</p>
            <h2 className="text-5xl font-bold">{recommendation.remaining} <span className="text-lg opacity-60">kkal</span></h2>
            <p className="text-[10px] opacity-60 italic pt-2">*Sudah termasuk estimasi Sarapan & Nasi Sekolah</p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 ml-1 text-sm">Saran Lauk Pendamping Nasi</h3>
            <div className="grid grid-cols-1 gap-3">
              {recommendation.suggestions.map(s => (
                <div key={s.id} className="bg-slate-50 p-4 rounded-3xl border border-slate-100 flex items-center gap-4">
                  <img src={s.image} className="w-16 h-16 rounded-2xl object-cover bg-white p-1" alt={s.name} />
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">{s.name}</h4>
                    <p className="text-blue-600 text-xs font-bold">{s.calories} kkal <span className="text-slate-300 px-1">|</span> {s.proteins}g Prot</p>
                    <div className="mt-1 flex gap-1">
                       {s.proteins > 15 && <span className="text-[8px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md font-bold uppercase">Stunting Defense</span>}
                       {(s.name.toLowerCase().includes('hati') || s.name.toLowerCase().includes('daging')) && <span className="text-[8px] bg-red-100 text-red-700 px-2 py-0.5 rounded-md font-bold uppercase">Zat Besi</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={() => setRecommendation(null)} className="w-full py-4 text-slate-400 font-bold text-xs hover:text-blue-600 transition-colors">
            Hitung Ulang
          </button>
        </div>
      )}

      <div className="bg-amber-50 p-4 rounded-3xl border border-amber-100 flex gap-3">
        <Info className="text-amber-600 shrink-0" size={20} />
        <p className="text-[10px] text-amber-800 leading-relaxed font-medium">
          Rekomendasi berfokus pada asupan <b>Protein Hewani & Zat Besi</b> untuk melengkapi gizi harian si kecil. Pastikan disajikan bersama porsi nasi yang cukup di rumah.
        </p>
      </div>
    </div>
  );
}