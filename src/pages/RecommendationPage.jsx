import { useState, useEffect } from 'react';
import nutritionService from '../services/nutritionService';
import { Search, Calculator, CheckCircle, Info } from 'lucide-react';

export default function RecommendationPage() {
  const [formData, setFormData] = useState({ age: '', weight: '', height: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [selectedLunch, setSelectedLunch] = useState(null);
  const [recommendation, setRecommendation] = useState(null);

  useEffect(() => {
    if (searchTerm.length > 2) {
      nutritionService.searchMenu(searchTerm).then(setResults);
    } else { setResults([]); }
  }, [searchTerm]);

  const handleCalculate = async (e) => {
    e.preventDefault();
    if (!selectedLunch) return alert("Pilih menu makan siang!");
    
    // Rumus AKG Sederhana
    const targetDaily = 1000 + (parseInt(formData.age) * 100);
    const remaining = targetDaily - selectedLunch.calories;
    const suggestions = await nutritionService.getDinnerRecommendation(remaining);

    setRecommendation({ targetDaily, remaining, suggestions });
  };

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-6 pb-20">
      <h1 className="text-2xl font-bold text-blue-900 flex items-center gap-2">
        <Calculator /> Generator Gizi Malam
      </h1>

      <form onSubmit={handleCalculate} className="bg-white p-6 rounded-3xl shadow-lg space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <input type="number" placeholder="Usia" className="p-3 border rounded-xl" required
            onChange={e => setFormData({...formData, age: e.target.value})} />
          <input type="number" placeholder="BB (Kg)" className="p-3 border rounded-xl" required
            onChange={e => setFormData({...formData, weight: e.target.value})} />
          <input type="number" placeholder="TB (Cm)" className="p-3 border rounded-xl" required
            onChange={e => setFormData({...formData, height: e.target.value})} />
        </div>

        <div className="relative">
          <label className="text-sm font-bold text-gray-600">Apa menu MBG siang tadi?</label>
          <div className="flex items-center mt-1">
            <Search className="absolute ml-3 text-gray-400" size={18} />
            <input type="text" placeholder="Cari makanan..." className="w-full pl-10 p-3 border rounded-xl"
              value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
          {results.length > 0 && !selectedLunch && (
            <div className="absolute z-10 w-full bg-white border mt-1 rounded-xl shadow-xl max-h-48 overflow-y-auto">
              {results.map(f => (
                <div key={f.id} onClick={() => {setSelectedLunch(f); setSearchTerm(f.name)}}
                  className="p-3 hover:bg-blue-50 cursor-pointer border-b">
                  <p className="font-bold text-sm">{f.name}</p>
                  <p className="text-xs text-gray-500">{f.calories} kkal</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {selectedLunch && (
          <div className="bg-green-50 p-3 rounded-xl border border-green-200 flex justify-between">
            <span className="text-sm text-green-800 font-medium">Terpilih: {selectedLunch.name}</span>
            <button type="button" onClick={() => setSelectedLunch(null)} className="text-red-500 text-xs">Ganti</button>
          </div>
        )}

        <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-200">
          Generate Rekomendasi
        </button>
      </form>

      {recommendation && (
        <div className="bg-blue-900 text-white p-6 rounded-3xl space-y-4 animate-in fade-in slide-in-from-bottom-4">
          <div className="text-center">
            <p className="opacity-70 text-sm">Sisa Kebutuhan Malam</p>
            <p className="text-4xl font-bold">{recommendation.remaining} <span className="text-lg">kkal</span></p>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {recommendation.suggestions.map(s => (
              <div key={s.id} className="bg-white/10 p-3 rounded-2xl flex items-center gap-3">
                <img src={s.image} className="w-12 h-12 rounded-lg object-cover" />
                <div>
                  <p className="font-bold text-sm">{s.name}</p>
                  <p className="text-xs opacity-70">{s.calories} kkal</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}