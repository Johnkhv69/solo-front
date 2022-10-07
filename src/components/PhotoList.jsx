import React from 'react';
import PhotoItem from "./PhotoItem";
// import '../styles/App.css'


const PhotoList = ({photos}) => {
  return (
    <div className="photo">
      {photos?.map((photo) => <PhotoItem photo={photo} key={photo.id } />
      )}
    </div>
 )
};

export default PhotoList;