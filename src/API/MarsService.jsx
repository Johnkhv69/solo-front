export default class MarsService {

  static async getAll() {
    const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=DEMO_KEY')
    return response.json();
  }
}