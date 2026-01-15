import axios from 'axios';

class NutritionService {
  async getAllNutrisi() {
    try {
      const res = await axios.get('/data/nutrisi.json');
      return res.data;
    } catch (e) { return []; }
  }

  async searchMenu(query) {
    const data = await this.getAllNutrisi();
    return data.filter(i => i.name.toLowerCase().includes(query.toLowerCase())).slice(0, 10);
  }

  async getDinnerRecommendation(targetCal) {
    const data = await this.getAllNutrisi();
    // Cari menu yang mendekati sisa kalori malam (toleransi +50)
    return data.filter(i => i.calories <= (targetCal + 50)).sort(() => 0.5 - Math.random()).slice(0, 3);
  }
}
export default new NutritionService();