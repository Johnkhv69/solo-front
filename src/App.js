import React, { useState } from "react";
import './styles/App.css'
import PhotoList from "./components/PhotoList";
import Apod from "./components/Apod";
import MarsService from "../src/API/MarsService";
import ApodService from "../src/API/ApodServise";
// import photos from "./array";

function App() {
  const [photos, setPhotos] = useState([]);
  // console.log('set===',photos)
  const [apod, setApod] = useState({});
  console.log('set===',apod)


  async function fetchMarsPhotos() {
    const photos = await MarsService.getAll();
    // console.log('in function===', photos)
    setPhotos(photos);
  }

  async function fetchApod() {
    const apod = await ApodService.getAll();
    console.log('in function===', apod)
    setApod(apod);
  }

  fetchApod()

  // console.log(photos)
  return (
    <div className="MarsPhotos">
      <h1>Mars pictures galery</h1>
      <button onClick={fetchMarsPhotos}>Get pictures</button>
      <h1>Find space object</h1>
      {/* <input type ='text' placeholder='orion nebula'/> */}
      {/* <button onClick={fetchApod}>Search</button> */}
      <Apod dayPhoto={apod} />
      <PhotoList photos={photos.photos} />
    </div>
  );
}

export default App;
