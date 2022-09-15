import React from 'react';
import PhotoItem from "./PhotoItem";

const PhotoList = ({photos}) => {
  // console.log("list photos==", photos);
  return (
    <div className="photo">
      {/* <h1>List of pics</h1> */}
      {photos?.map((photo) => <PhotoItem photo={photo} key={photo.id } />
      )}
    </div>
 )
};

export default PhotoList;