import React from "react";

const Search = ({ search }) => {
  // console.log('in Search ==', search);
  return (
    <div>
      <div className="photo__content">
        <div><h2>Title : {search.title}</h2></div>
        <img src={search.url} alt='pic' style={{ 'width': "100%", 'heigth': "100%" }} />
      </div>
    </div>
  )
}

export default Search;

