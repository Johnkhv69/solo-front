// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
export default class ApodServise {

  static async getAll() {

    try {  
      const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=IifoYfB1VYCpDD5COHGq3wHmOCllx2QMM7acbMCT')
      return response.json();
    } catch (error) {
      console.log('error===>', error);
    }
  }
}