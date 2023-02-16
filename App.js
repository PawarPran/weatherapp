import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import HomeScreen from "./Components/HomeScreen";
import DetailScreen from "./Components/DetailScreen";
import SearchScreen from "./Components/SearchScreen";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [favoriteLocations, setFavoriteLocations] = useState([]);

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      const API_KEY = "Y47bc6318fef16f4afac2a0d325a65b7f";
      const BASE_URL = "https://api.openweathermap.org/data/2.5";
      const query = "q=London&units=metric&appid=" + API_KEY;
      const { data } = await axios.get(`${BASE_URL}/weather?${query}`);
      setCurrentWeather(data);
    };

    fetchCurrentWeather();
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomeScreen
              currentWeather={currentWeather}
              favoriteLocations={favoriteLocations}
              setFavoriteLocations={setFavoriteLocations}
            />
          </Route>
          <Route path="/detail/:location">
            <DetailScreen />
          </Route>
          <Route path="/search">
            <SearchScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
