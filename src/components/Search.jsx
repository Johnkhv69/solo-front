import React from "react";
import '../styles/App.css'

const Search = ({ search }) => {
  console.log('in Search ==', search);
  
  return (
    <div>
      <div className="photo__content">
        <div><h2>Title : {search.data[0].title}</h2></div>

        <img src={search?.links[0]?.href} alt='pic' style={{ 'width': "100%", 'heigth': "100%" }} />
      </div>
    </div>
  )
}

export default Search;

