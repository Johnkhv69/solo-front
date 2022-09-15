import React from 'react';
import Search from "./Search";

const SearchList = ( {search} ) => {
  console.log("in SearchList==", search);
  const { collection } = search;
  // const { items } = collection;
  console.log('in Search items ==', collection);
  console.log(collection?.items);
  return (
    <div className="photo">
      {/* <h1>List of pics</h1>
      {collection?.items.map((item) => <Search photo={item} key={new Date()} />
      )} */}
    </div>
  )
};

export default SearchList;