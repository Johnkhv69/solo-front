import React from "react";

const Apod = ( {dayPhoto} ) => {
  // console.log('in component==',dayPhoto);
  return (
    <div>
      <div className="photo__content">
        <h1>Astronomy picture of the day</h1>
        <div><h2>Title : {dayPhoto.title}</h2></div>
        <div><h3>Explanation : {dayPhoto.explanation}</h3></div>
        <div><h3>Date : {dayPhoto.date}</h3></div>
        <img src={dayPhoto.url} alt='pic' style={{ 'width': "100%", 'heigth': "100%" }} />
      </div>
    </div>
  )
}

export default Apod;

