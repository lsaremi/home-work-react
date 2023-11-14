import { useEffect, useState } from "react";
import { Buttons } from "./Buttons";
import { ListOfTimes } from "./ListOfTimes";

export const StopwatchApp = () => {
  const [start, setStart] = useState(false);
  const [laps, setLaps] = useState([]);
  const [totalSeconds, setTotalSeconds] = useState(0);

  // const [seconds, setSeconds] = useState(0);
  // const [minutes, setMinutes] = useState(0);
  // const [hours, setHours] = useState(0);

  const formatNumbers = (number) => {
    if (number < 10) return "0" + number;
    else return number.toString();
  };

  // useEffect(() => {
  //   let interval;

  //   if (start) {
  //     interval = setInterval(() => {
  //       setSeconds((prevSeconds) => {
  //         if (prevSeconds >= 5) {
  //           setMinutes((prevMinutes) => {
  //             if (prevMinutes >= 5) {
  //               setHours((prevHours) => prevHours + 1);
  //               return 0;
  //             } else {
  //               console.log("prevMinutes", prevMinutes);
  //               return prevMinutes + 1;
  //             }
  //           });
  //           return 0;
  //         } else {
  //           return prevSeconds + 1;
  //         }
  //       });
  //     }, 1000);
  //   }
  //   return () => clearInterval(interval);
  // }, [start]);

  useEffect(() => {
    let interval;

    if (start) {
      interval = setInterval(() => {
        setTotalSeconds((prevTotalSeconds) => prevTotalSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [start]);

  const handleLap = () => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const newLap = `${formatNumbers(hours)}:${formatNumbers(
      minutes
    )}:${formatNumbers(seconds)}`;

    setLaps((prevLaps) => [...prevLaps, newLap]);
  };

  const handleStart = () => {
    setStart(true);
  };

  // const handleLap = () => {
  //   const newLap = `${formatNumbers(hours)}:${formatNumbers(
  //     minutes
  //   )}:${formatNumbers(seconds)}`;

  //   setLaps((prevLaps) => [...prevLaps, newLap]);
  // };

  const handleStop = () => {
    setStart(false);
  };

  return (
    <div className="flex flex-col items-center justify-between">
      <Buttons
        onStart={handleStart}
        hours={formatNumbers(Math.floor(totalSeconds / 3600))}
        minutes={formatNumbers(Math.floor((totalSeconds % 3600) / 60))}
        seconds={formatNumbers(totalSeconds % 60)}
        onLap={handleLap}
        onStop={handleStop}
        start={start}
      />
      <ListOfTimes laps={laps} />
    </div>
  );
};
