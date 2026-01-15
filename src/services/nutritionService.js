// src/services/nutritionService.js
import axios from 'axios';

class NutritionService {
  constructor() {
    this.cachedData = null;
  }

  async getAllNutrisi() {
    if (this.cachedData) return this.cachedData;
    try {
      const res = await axios.get('/data/nutrition.json');
      this.cachedData = res.data.map(item => ({
        id: item.id,
        name: item.name || item.nama,
        calories: item.calories || item.kalori || 0,
        proteins: item.proteins || item.protein || 0,
        image: item.image || item.gambar || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'
      }));
      return this.cachedData;
    } catch (e) { return []; }
  }

  async searchMenu(query) {
    const data = await this.getAllNutrisi();
    if (!query) return [];
    return data.filter(i => i.name.toLowerCase().includes(query.toLowerCase())).slice(0, 10);
  }

  async getDinnerRecommendation(targetCal) {
    const data = await this.getAllNutrisi();
    // Buang camilan dan nasi dari rekomendasi malam
    const blacklist = ['enting', 'wijen', 'kerupuk', 'permen', 'kue', 'biskuit', 'snack', 'nasi', 'cokelat', 'keripik', 'sambal'];
    const priority = ['ikan', 'ayam', 'telur', 'daging', 'hati', 'tempe', 'tahu', 'lele', 'bebek'];

    let mainDishes = data.filter(i => {
      const nameLower = i.name.toLowerCase();
      const isBlacklisted = blacklist.some(word => nameLower.includes(word));
      return !isBlacklisted && i.proteins > 4; // Minimal protein 4g
    });

    let suggestions = mainDishes.filter(i => {
      const isPriority = priority.some(word => i.name.toLowerCase().includes(word));
      return isPriority && i.calories <= (targetCal + 100);
    });

    if (suggestions.length < 3) suggestions = [...suggestions, ...mainDishes.filter(i => i.calories <= targetCal)];
    
    const unique = [...new Map(suggestions.map(item => [item.name, item])).values()];
    return unique.sort(() => 0.5 - Math.random()).slice(0, 3);
  }
}
export default new NutritionService();