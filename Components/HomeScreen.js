import React from 'react';
import { Link } from 'react-router-dom';
import './HomeScreen.css'

const HomeScreen = ({ currentWeather, favoriteLocations, setFavoriteLocations }) => {
  const handleAddFavorite = () => {
    setFavoriteLocations([...favoriteLocations, currentWeather]);
    
  };

  return (
    <div className='main-container'>
      {currentWeather ? (
        <div>
          <div>{currentWeather.name}, {currentWeather.sys.country}</div>
          <div>{currentWeather.weather[0].main}</div>
          <div>{currentWeather.weather[0].description}</div>
          <div>{Math.round(currentWeather.main.temp)}&deg;C</div>
          <button onClick={handleAddFavorite}>Add to Favorites</button>
        </div>
      ) : (
        <div>Loading current weather...</div>
      )}
      <div>
        <h2>Favorite Locations</h2>
        <ul>
          {favoriteLocations.map((location) => (
            <li key={location.id}>
              <Link to={`/detail/${location.id}`}>
                {location.name}, {location.sys.country}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Link to="/search">Search for a Location</Link>
      </div>
    </div>
  );
};

export default HomeScreen;
