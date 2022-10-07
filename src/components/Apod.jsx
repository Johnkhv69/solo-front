import React from "react";
import '../styles/App.css'


const Apod = ( {dayPhoto} ) => {
  // console.log('in component==',dayPhoto);
  return (
    <div>
      <div className="photo__content apod">
        {dayPhoto!==0
?
          <><h5>Astronomy picture of the day</h5>
            <div><h5>Title: {dayPhoto.title}</h5></div>
            <div><h6>Explanation: {dayPhoto.explanation}</h6></div>
            <div><h5>Date: {dayPhoto.date}</h5></div>
            <img src={dayPhoto.url} alt='pic' style={{ 'width': "100%", 'heigth': "100%" }} /></>
 :null       }
      </div>
    </div>
  )
}

export default Apod;

