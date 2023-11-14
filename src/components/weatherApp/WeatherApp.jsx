import React from "react";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

export const WeatherApp = () => {
  return (
    <div className="flex items-center justify-center">
      <LeftSide />
      <RightSide />
    </div>
  );
};
