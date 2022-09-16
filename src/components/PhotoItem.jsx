import React from "react";
import '../styles/App.css'


const PhotoItem = ({photo}) => {
  // console.log(photo);
  return (
    <div>
      <div className="photo__content"> 
      <div>Rover : {photo.rover.name}</div>
      <div>Camera : {photo.camera.full_name}</div>
      <div>Date : {photo.earth_date}</div>
        <img src={photo.img_src} alt='pic' style={{'width':"500px", 'heigth':"500px"}}/>
      </div>
    </div>
  )
}

export default PhotoItem;


