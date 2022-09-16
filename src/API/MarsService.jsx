export default class MarsService {

  static async getAll() {
    try {
      const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=IifoYfB1VYCpDD5COHGq3wHmOCllx2QMM7acbMCT')
      return response.json();
      
    } catch (error) {
      console.log('error===>',error);
    }
  }
}