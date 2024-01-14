import { WeatherData } from "../models/weatherData";

const apiKey = import.meta.env.VITE_API_KEY_FETCH_WEATHER_API;

export const fetchWeatherData = async (
  lat: number,
  lon: number
): Promise<WeatherData> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );

    if (!response.ok) {
      throw new Error("API-anropet misslyckades");
    }

    const data = await response.json();

    const temperatureInCelsius = data.main.temp - 273.15;

    const transformedData: WeatherData = {
      temperature: temperatureInCelsius,
      condition: data.weather[0].main,
    };

    return transformedData;
  } catch (error) {
    throw new Error("API-anropet misslyckades");
  }
};
