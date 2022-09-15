import React, { useState } from "react";
import './styles/App.css'
import PhotoList from "./components/PhotoList";
import MarsService from "../src/API/MarsService";
// import photos from "./array";

function App() {
  const [photos, setPhotos] = useState([]);
  // console.log('set===',photos)

  async function fetchPhotos() {
    const photos = await MarsService.getAll();
    // console.log('in function===', photos)
    setPhotos(photos);
  }

  // console.log(photos)
  return (
    <div className="MarsPhotos">
      <h1>Mars pictures galery</h1>
      <button onClick={fetchPhotos}>Get pictures</button>
      <PhotoList photos={photos.photos} />
    </div>
  );
}

export default App;
