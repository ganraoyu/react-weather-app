import React from 'react';
import "../styles/SearchBar.css";
import search from "../assets/search.png";

const SearchBar = () => {
  return (
    <div className='SearchBar'>
      <input type="text" placeholder="Search" />
      <button type="submit"><img src={search} alt="search" className="search-icon" /></button>
    </div>
  );
}

export default SearchBar;