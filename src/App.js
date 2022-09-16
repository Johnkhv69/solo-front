import React, { useEffect, useState } from "react";
import './styles/App.css'
import PhotoList from "./components/PhotoList";
import SearchList from "./components/SearchList";
import Apod from "./components/Apod";
import MarsService from "../src/API/MarsService";
import ApodService from "../src/API/ApodServise";
import SearchService from "../src/API/SearchService";
// import photos from "./array";

function App() {

  useEffect(() => {
    fetchApod();
  }, [])

  const [photos, setPhotos] = useState([]);
  const [apod, setApod] = useState({});
  const [search, setSearch] = useState({});
  const [value, setValue] = useState('');

  async function fetchMarsPhotos() {
    const photos = await MarsService.getAll();
    // console.log('in function===', photos)
    setApod(0);
    setSearch({})
    setPhotos(photos);
  }
  
  async function fetchApod() {
    const apod = await ApodService.getAll();
    // console.log('in function===', apod)
    setApod(apod);
    
  }

  async function fetchSearchPhotos(string) {
    const search = await SearchService.getAll(string);
    setApod(0);
    setPhotos(0)
    setSearch(search);
  }

  const addNewSearch = (event) => {
    event.preventDefault();
    // console.log('string in function===', value)
    fetchSearchPhotos(value)
  }

  return (
    <div className="header">
      <div className="App">
        <div className="container">
          <span>

      <h2>Mars rover pictures galery</h2>
      <button onClick={fetchMarsPhotos}>Get pictures</button>
          </span>
      </div>
      <div className="header">
      <h2>Find a space object</h2>
      <form>
        <input value={value} className="input"
          onChange={event => setValue(event.target.value)}
          type='text' placeholder='  orion nebula' />
        <button onClick={addNewSearch}>Search  it!  </button>
        </form>
        </div>
      </div>
      <SearchList search={search}/>
      <Apod dayPhoto={apod}/>
      <PhotoList photos={photos.photos}/>
      {/* <button onClick={fetchApod}>Picture of the day</button> */}
    </div>
  );
}

export default App;
