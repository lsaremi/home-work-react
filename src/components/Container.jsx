import { useState } from "react";
import { Search } from "./Search";
import { WeatherApp } from "./weatherApp";

export const Container = () => {
  const [selectedCity, setSelectedCity] = useState("tehran");

  const handleSearch = (searchCity) => {
    setSelectedCity(searchCity);
  };

  return (
    <div className="container mx-auto px-8 pb-[27px] flex items-center justify-center flex-col max-w-[60%]">
      <Search onSearch={handleSearch} />
      <WeatherApp city={selectedCity} />
    </div>
  );
};
