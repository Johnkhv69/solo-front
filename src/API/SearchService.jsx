export default class SearchService {

  static async getAll(string) {
    // console.log('in fetch==', string);
    const response = await fetch(`https://images-api.nasa.gov/search?q=${string}`)
    return response.json();
  }
} 