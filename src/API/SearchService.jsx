import axios from "axios";

export default class SearchService {

  static async getAll(string) {
    try {
      const response = await axios.get(`https://images-api.nasa.gov/search?q=${string}`);
      const { data } = response;
         return data;
    } catch (error) {
      console.log('error===>', error);
    }
  }

} 