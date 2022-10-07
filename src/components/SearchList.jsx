import React from 'react';
import Search from "./Search";
// import '../styles/App.css'

const SearchList = ({ search }) => {
  const { collection } = search;
  // console.log("in SearchList==", search);
  // console.log('in Search collection', collection );

  return (
    <div className="photo">
      {/* <h1>List of pics</h1> */}
      {collection?.items.slice(0, 16).map((item) => <Search search={item} key={Math.random().toString()} />
      )}
    </div>
  )
};

export default SearchList;