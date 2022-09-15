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
    setPhotos(photos);
  }
  
  async function fetchApod() {
    const apod = await ApodService.getAll();
    // console.log('in function===', apod)
    setApod(apod);
  }

  async function fetchSearchPhotos(string) {
    const search = await SearchService.getAll(string);
    console.log('search in fetch===', search)
    setSearch(search);
  }

  const addNewSearch = (event) => {
    event.preventDefault();
    // console.log('string in function===', value)
    fetchSearchPhotos(value)
  }

  return (
    <div className="App">
      <h1>Mars pictures galery</h1>
      <button onClick={fetchMarsPhotos}>Get pictures</button>
      <h1>Find space object</h1>
      <form>
        <input value={value}
          onChange={event => setValue(event.target.value)}
          type='text' placeholder='orion nebula' />
        <button onClick={addNewSearch}>Search</button>
      </form>
      <SearchList search={search}/>
      <Apod dayPhoto={apod}/>
      <PhotoList photos={photos.photos}/>
      {/* <button onClick={fetchApod}>Picture of the day</button> */}
    </div>
  );
}

export default App;
