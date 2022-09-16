export default class SearchService {

  static async getAll(string) {
    // console.log('in fetch==', string);
    try {
      const response = await fetch(`https://images-api.nasa.gov/search?q=${string}`)
      return response.json();
    } catch (error) {
      console.log('error===>', error);
    }
  }
} 