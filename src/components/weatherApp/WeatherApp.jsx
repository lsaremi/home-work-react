import { useState, useEffect } from "react";
import axios from "axios";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

export const WeatherApp = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!city) return;

      try {
        setLoading(true);

        const apiKey = "30db268679a4773d6bafdd8a2240e31a";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&exclude=hourly,daily&appid=${apiKey}`;
        // &units=metric
        const response = await axios.get(apiUrl);
        console.log("response", response);

        if (response.status === 200) {
          setWeatherData(response.data);
          setError(null);
        } else {
          setError(response.data.message);
          setWeatherData(null);
        }
      } catch (error) {
        setError("An error occurred.");
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city]);
  console.log("weatherData", weatherData);

  return (
    <div className="flex items-center justify-center">
      <LeftSide weatherData={weatherData} error={error} loading={loading} />
      <RightSide weatherData={weatherData} />
    </div>
  );
};
