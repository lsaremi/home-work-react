import React from "react";
import { Search } from "./Search";
import { WeatherApp } from "./weatherApp";

export const Container = () => {
  return (
    <div className="container mx-auto px-8 pb-[27px] flex items-center justify-center flex-col max-w-[60%]">
      <Search></Search>
      <WeatherApp></WeatherApp>
    </div>
  );
};
