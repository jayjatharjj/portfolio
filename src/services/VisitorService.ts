import axios from 'axios';

const API_BASE_URL = 'https://coral-circlet-456809-m2.el.r.appspot.com/api/portfolio';

export default {
  async recordVisitor(email: string) {
    try {
        const response = await axios.post(`${API_BASE_URL}/view`, { email });
        return response.data;
    } catch (error) {
      console.error('Error recording view:', error);
      throw error;
    }
  },
  async recordDownload(email: string) {
    try {
        const response = await axios.post(`${API_BASE_URL}/download`, { email });
        return response.data;
    } catch (error) {
      console.error('Error recording download:', error);
      throw error;
    }
  },
  async recordContact(data: any) {
    try {
        const response = await axios.post(`${API_BASE_URL}/contact`, data);
        return response.data;
    } catch (error) {
      console.error('Error recording contact:', error);
      throw error;
    }
  }
};
