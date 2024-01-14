import { useEffect, useState } from "react";
import { WeatherData } from "../models/weatherData";
import { fetchWeatherData } from "../services/weather";
import { CloudImg, WeatherContainer } from "../styled/StyledWeather";
import {
  faSnowflake,
  faCloud,
  faPooStorm,
  faCloudRain,
  faCloudShowersHeavy,
  faCloudSun,
  faSmog,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case "Snow":
        return <FontAwesomeIcon icon={faSnowflake} />;
      case "Mist":
        return <FontAwesomeIcon icon={faSmog} />;
      case "Thunderstorm":
        return <FontAwesomeIcon icon={faPooStorm} />;
      case "Rain":
        return <FontAwesomeIcon icon={faCloudRain} />;
      case "Shower rain":
        return <FontAwesomeIcon icon={faCloudShowersHeavy} />;
      case "Broken clouds":
        return <FontAwesomeIcon icon={faCloudSun} />;
      case "Scattered clouds":
        return <FontAwesomeIcon icon={faCloud} />;
      case "Few clouds":
        return <FontAwesomeIcon icon={faCloud} />;
      case "Clear sky":
        return <FontAwesomeIcon icon={faSun} />;
      default:
        return condition;
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherData(latitude, longitude)
            .then((data) => {
              if (typeof data.temperature === "number") {
                console.log("Temperatur (Kelvin):", data.temperature);
                setWeatherData({
                  ...data,

                  temperature: Math.ceil(data.temperature),
                });
              } else {
                console.error("Felaktigt API-svar för temperatur");
                setError("Kunde inte ladda väderdata.");
              }
            })
            .catch((err) => {
              console.error("API-förfrågan misslyckades:", err);
              setError("Kunde inte ladda väderdata.");
            });
        },
        (error) => {
          console.error("Geolocation Error:", error);
          setError("Kunde inte få platsinformation.");
        }
      );
    } else {
      setError("Din webbläsare stöder inte geolocation.");
    }
  }, []);

  if (error) {
    return <div>Ett fel inträffade: {error}</div>;
  }

  if (!weatherData) {
    return <div>Laddar väder data...</div>;
  }

  return (
    <>
      <CloudImg></CloudImg>
      <WeatherContainer>
        <h2>Väder</h2>
        <p>{weatherData.temperature}°C</p>
        <p>{getWeatherIcon(weatherData.condition)}</p>
      </WeatherContainer>
    </>
  );
};
