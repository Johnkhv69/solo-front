import React from "react";
// import '../styles/App.css'
import Detail from "./Detail";

const Search = ({ search }) => {
  // console.log('in Search ==', search);

  return (
    <div>
      <div className="photo__content">
        <div><h6>Title : {search.data[0].title}</h6></div>
        <img src={search?.links[0]?.href} alt='pic' style={{ 'width': "100%", 'heigth': "100%" }} />
        <Detail search={search}  />
      </div>
    </div>
  )
}

export default Search;

