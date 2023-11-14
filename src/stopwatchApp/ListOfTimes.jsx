import React from "react";

export const ListOfTimes = ({ laps }) => {
  return (
    <div className="grid grid-cols-2 auto-cols-max gap-4">
      <div className="w-20">Lap</div>
      <div className="w-20">Time</div>
      {laps.map((lap, index) => (
        <React.Fragment key={index}>
          <div>{index + 1}</div>
          <div>{lap}</div>
        </React.Fragment>
      ))}
    </div>
  );
};
