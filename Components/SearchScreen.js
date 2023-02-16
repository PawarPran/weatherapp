import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './SearchScreen.css'

const SearchScreen = ({ setWeatherData }) => {
  const [searchInput, setSearchInput] = useState('');
  const history = useHistory();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchInput) {
      const API_KEY = "47bc6318fef16f4afac2a0d325a65b7f";
      const BASE_URL = "https://api.openweathermap.org/data/2.5";
      const query = `q=${searchInput}&units=metric&appid=${API_KEY}`;
      const { data } = await axios.get(`${BASE_URL}/weather?${query}`);
      setWeatherData(data);
      history.push(`/detail/${searchInput}`);
      setSearchInput('');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search location..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchScreen;
