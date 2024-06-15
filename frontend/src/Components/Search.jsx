import React from 'react';
import { IoIosSearch } from "react-icons/io";

const Search = ({handleSearch}) => {
  return (
    <>
      <button >
        <IoIosSearch size={24} onClick={handleSearch}  className="absolute  right-4 top-1/2 transform -translate-y-1/2 text-blue-600" />
      </button>
    </>
  );
};

export default Search;