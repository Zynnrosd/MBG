import { MessageCircle, Phone, Star } from 'lucide-react';

export default function ConsultationPage() {
  const doctors = [
    { name: 'dr. Sarah Sp.GK', exp: '8 Tahun', rate: '4.9', price: 'Rp 35.000', online: true },
    { name: 'dr. Andi Sp.GK', exp: '5 Tahun', rate: '4.8', price: 'Rp 25.000', online: false },
  ];

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-6 pb-20">
      <h1 className="text-2xl font-bold text-blue-900 flex items-center gap-2">
        <MessageCircle /> Konsultasi Ahli Gizi
      </h1>

      <div className="bg-orange-50 p-4 rounded-2xl border border-orange-200">
        <p className="text-sm text-orange-800">Dapatkan saran langsung dari spesialis gizi untuk tumbuh kembang buah hati Anda.</p>
      </div>

      <div className="space-y-4">
        {doctors.map((doc, i) => (
          <div key={i} className="bg-white p-4 rounded-3xl border shadow-sm flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 font-bold text-xl">
              {doc.name[4]}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-slate-800">{doc.name}</h3>
                <span className={`w-2 h-2 rounded-full ${doc.online ? 'bg-green-500' : 'bg-gray-300'}`}></span>
              </div>
              <p className="text-xs text-slate-500">{doc.exp} Pengalaman</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-lg flex items-center gap-1 font-bold">
                  <Star size={10} fill="currentColor"/> {doc.rate}
                </span>
                <span className="text-xs font-bold text-blue-600">{doc.price}</span>
              </div>
            </div>
            <button className="p-3 bg-blue-600 text-white rounded-xl shadow-lg">
              <MessageCircle size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}