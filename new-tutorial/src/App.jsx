import { useState } from 'react';
import './App.css';

const API_KEY = 'a4c41f3e0aeea4d5ffcdbef70ff65c12'; // 🔑 //Here is my API key. 

function App() {
  // React state to store the city input by the user
  const [city, setCity] = useState('');
   // React state to store the weather data returned from the API
  const [weather, setWeather] = useState(null);

  // Function that fetches weather data from OpenWeatherMap API
  const getWeather = async () => {
    if (!city) return;

    try {
      //Call the API with the user's city and your API key
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      setWeather(data); //Store the data in React state
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  return (
    <div className="app-container">
      <h1>🌤 Weather App</h1>
      {/* Input field for the user to type a city */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)} //Update the city as the user type
        />
        <button onClick={getWeather}>Search</button> 
      </div> 

      {weather && weather.main && (
        <div className="weather-result">
          <h2>{weather.name}</h2>
          <p>🌡 Temperature: {weather.main.temp} °C</p>
          <p>☁️ Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
