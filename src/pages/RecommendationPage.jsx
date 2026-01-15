// src/pages/RecommendationPage.jsx
import { useState, useEffect } from 'react';
import nutritionService from '../services/nutritionService';
import { Search, Calculator, CheckCircle, RefreshCw, ArrowRight, User, Info, Zap, ChevronRight } from 'lucide-react';

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
      const lunchRiceEst = 130; 
      let remaining = targetDaily - breakfastEst - (selectedLunch.calories + lunchRiceEst);
      const minDinner = targetDaily * 0.25;
      if (remaining < minDinner) remaining = minDinner;

      const suggestions = await nutritionService.getDinnerRecommendation(remaining);
      setRecommendation({ targetDaily, remaining: Math.round(remaining), suggestions });
    } finally { setLoading(false); }
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-8 pb-32 min-h-screen bg-[#F8FAFC]">
      <header className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider">
          <Zap size={12} fill="currentColor" /> AI Nutrition Assistant
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Cek Gizi <span className="text-blue-600">Malam.</span></h1>
      </header>

      {!recommendation ? (
        <form onSubmit={handleCalculate} className="space-y-6 animate-in fade-in duration-500">
          <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm space-y-6">
            <h3 className="font-bold text-slate-800 flex items-center gap-2 text-lg">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                <User size={16} />
              </div>
              Data Fisik Anak
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {['age', 'weight', 'height'].map(key => (
                <div key={key} className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase ml-2 tracking-widest">{key === 'age' ? 'Usia' : key === 'weight' ? 'BB' : 'TB'}</label>
                  <input type="number" placeholder={key === 'age' ? 'Thn' : key === 'weight' ? 'Kg' : 'Cm'}
                    className="w-full p-4 bg-slate-50 border-transparent rounded-2xl text-sm font-bold focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all outline-none" required
                    onChange={e => setFormData({...formData, [key]: e.target.value})} />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm space-y-6 relative">
            <h3 className="font-bold text-slate-800 flex items-center gap-2 text-lg">
              <div className="w-8 h-8 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-200">
                <Calculator size={16} />
              </div>
              Lauk MBG Siang
            </h3>
            <div className="relative group">
              <Search className="absolute left-4 top-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
              <input type="text" placeholder="Lauk apa siang tadi?" 
                className="w-full pl-12 p-4 bg-slate-50 border-transparent rounded-2xl text-sm font-medium outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all"
                value={searchTerm} onChange={e => {setSearchTerm(e.target.value); setSelectedLunch(null);}} />
            </div>

            {results.length > 0 && !selectedLunch && (
              <div className="absolute z-10 left-8 right-8 bg-white/80 backdrop-blur-xl border border-slate-100 mt-2 rounded-3xl shadow-2xl max-h-56 overflow-y-auto p-2">
                {results.map(f => (
                  <button key={f.id} type="button" onClick={() => {setSelectedLunch(f); setSearchTerm(f.name);}}
                    className="w-full text-left p-4 hover:bg-blue-600 hover:text-white rounded-2xl flex justify-between items-center transition-all group">
                    <div>
                      <p className="font-bold text-sm">{f.name}</p>
                      <p className="text-[10px] opacity-60">{f.calories} kkal</p>
                    </div>
                    <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            )}

            {selectedLunch && (
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-5 rounded-3xl text-white flex justify-between items-center animate-in zoom-in duration-300 shadow-xl shadow-blue-200">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-xl"><CheckCircle size={20}/></div>
                  <div className="text-sm font-bold tracking-tight">{selectedLunch.name}</div>
                </div>
                <button type="button" onClick={() => {setSelectedLunch(null); setSearchTerm('');}} className="text-[10px] font-black uppercase tracking-tighter bg-white text-blue-600 px-4 py-2 rounded-xl">Ganti</button>
              </div>
            )}
          </div>

          <button type="submit" disabled={!selectedLunch || loading}
            className="w-full bg-slate-900 text-white py-5 rounded-[2rem] font-bold shadow-2xl shadow-slate-200 flex items-center justify-center gap-3 active:scale-95 transition-all disabled:opacity-30">
            {loading ? <RefreshCw className="animate-spin" /> : <>Lihat Hasil Analisis <ArrowRight size={20}/></>}
          </button>
        </form>
      ) : (
        <div className="space-y-8 animate-in slide-in-from-bottom-10 duration-700">
          <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-600 rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="relative z-10 space-y-4">
              <p className="text-[11px] font-black opacity-40 uppercase tracking-[0.4em]">Target Malam Hari</p>
              <h2 className="text-7xl font-bold tracking-tighter">{recommendation.remaining}<span className="text-2xl opacity-30 font-medium ml-2">kcal</span></h2>
              <div className="pt-8 mt-4 border-t border-white/10 flex justify-between items-end">
                <div className="space-y-1">
                  <p className="text-[10px] opacity-40 uppercase font-black">Status Gizi</p>
                  <p className="text-sm font-bold text-green-400 flex items-center gap-2"><div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> Seimbang</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] opacity-40 uppercase font-black tracking-widest">Kebutuhan Harian</p>
                  <p className="text-xl font-bold">{recommendation.targetDaily} <span className="text-xs opacity-40">kcal</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-center justify-between px-2">
              <h3 className="font-extrabold text-slate-800 text-xl tracking-tight">Saran Pendamping</h3>
              <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-[10px] font-black">HIGH PROTEIN</div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {recommendation.suggestions.map(s => (
                <div key={s.id} className="bg-white p-5 rounded-[2.5rem] border border-slate-100 flex items-center gap-5 shadow-sm hover:shadow-xl transition-all group">
                  <div className="w-24 h-24 rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100 shrink-0 shadow-inner">
                    <img src={s.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={s.name} />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h4 className="font-bold text-slate-800 text-lg leading-tight">{s.name}</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{s.calories} kcal</span>
                      <span className="text-xs font-black text-orange-600 bg-orange-50 px-3 py-1 rounded-full">{s.proteins}g Prot</span>
                    </div>
                    <div className="flex gap-1 pt-1">
                       {s.proteins > 15 && <span className="text-[9px] font-black bg-green-50 text-green-600 px-2 py-1 rounded-md uppercase tracking-wider">Cegah Stunting</span>}
                       {(s.name.toLowerCase().includes('hati') || s.name.toLowerCase().includes('daging')) && <span className="text-[9px] font-black bg-red-50 text-red-600 px-2 py-1 rounded-md uppercase tracking-wider">Tinggi Zat Besi</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={() => setRecommendation(null)} className="w-full py-6 text-slate-400 font-bold text-xs hover:text-blue-600 transition-colors uppercase tracking-[0.3em]">Hitung Ulang Analisis</button>
        </div>
      )}

      <div className="bg-blue-50/50 p-8 rounded-[3rem] border border-blue-100/50 flex gap-5 backdrop-blur-sm">
        <Info className="text-blue-600 shrink-0" size={28} />
        <p className="text-[12px] text-slate-600 leading-relaxed font-medium">
          Rekomendasi ini disusun secara cerdas untuk melengkapi asupan <strong className="text-blue-900">Protein Hewani</strong> yang krusial bagi tumbuh kembang si kecil. Sajikan bersama karbohidrat yang tersedia di rumah.
        </p>
      </div>
    </div>
  );
}