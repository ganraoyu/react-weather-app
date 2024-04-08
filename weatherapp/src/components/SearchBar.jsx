import React, { useState, useContext } from 'react';
import "../styles/SearchBar.css";
import search from "../assets/search.png";
import { WeatherContext } from './WeatherProvider';

const SearchBar = () => {
  const { setCity } = useContext(WeatherContext);
  const [inputValue, setInputValue] = useState(''); 

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    if(inputValue === '')return;
    setCity(inputValue); 
    setInputValue('');
  };

  return (
    <form className='SearchBar' onSubmit={handleButtonClick}>
      <input type="text" placeholder="Search" onChange={handleInputChange} />
      <button type="submit">
        <img src={search} alt="search" className="search-icon" />
      </button>
    </form>
  );
}

export default SearchBar;