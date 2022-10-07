import React, { useEffect, useState } from "react";
import './styles/App.css'
import PhotoList from "./components/PhotoList";
import SearchList from "./components/SearchList";
import Apod from "./components/Apod";
import MarsService from "./API/MarsService";
import ApodService from "./API/ApodServise";
import SearchService from "./API/SearchService";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
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
    // console.log('search in fetch===', search)
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
    <div className="App">
      <div className="container">
        <h6>Mars  rover's cameras  pictures</h6>
        <Button onClick={fetchMarsPhotos}>Get pictures</Button>
      </div>
      <div className="form" >
        <Form>
          <Form.Group className="mb-3" >
            <Form.Label><h6>Find object's photo</h6></Form.Label>
            <Form.Control type="text" placeholder="orion nebula"
              value={value} className="input"
              onChange={event => setValue(event.target.value)} />
            <Form.Text className="text-muted">
              Type here the space object you wish to see
            </Form.Text>
          <Button variant="primary" type="submit" onClick={addNewSearch}>
            Find it
          </Button>
          </Form.Group>
        </Form>
      </div>
      <SearchList search={search} />
      <Apod dayPhoto={apod} />
      <PhotoList photos={photos.photos} />
    </div>
  );
}

export default App;
