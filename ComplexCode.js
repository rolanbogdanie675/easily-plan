/*
Filename: ComplexCode.js
Content: Complex JavaScript code showcasing a weather analysis system
*/

// Import required libraries
const axios = require('axios');
const readline = require('readline-sync');

// Constants
const API_KEY = 'YOUR_API_KEY'; // Replace with your API key

// Function to fetch weather data from OpenWeatherMap API
async function fetchWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    return null;
  }
}

// Function to perform weather analysis
function analyzeWeather(weatherData) {
  console.log('\nWeather Analysis:');
  console.log('----------------------------------------');
  console.log(`Location: ${weatherData.name}, ${weatherData.sys.country}`);
  console.log(`Current Temperature: ${weatherData.main.temp}°C`);
  console.log(`Weather Condition: ${weatherData.weather[0].description}`);
  console.log(`Humidity: ${weatherData.main.humidity}%`);
  console.log(`Wind Speed: ${weatherData.wind.speed}m/s`);
  console.log('----------------------------------------');
}

// Function to prompt user for a city and fetch weather data
async function getWeatherDataFromUserInput() {
  const city = readline.question('Enter a city name: ');
  const weatherData = await fetchWeatherData(city);
  if (weatherData) {
    analyzeWeather(weatherData);
  }
}

// Main function
async function main() {
  console.log('Weather Analysis System');
  console.log('-----------------------');
  await getWeatherDataFromUserInput();
}

// Execute the main function
main();