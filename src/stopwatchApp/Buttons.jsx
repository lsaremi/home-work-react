export const Buttons = ({
  onStart,
  hours,
  minutes,
  seconds,
  onLap,
  onStop,
  start,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 mx-auto py-14">
      <div className="text-3xl text-white flex items-center justify-center text-center">
        <p className="pr-1 w-[70px]">{hours} : </p>
        <p className="pr-1 w-[70px]">{minutes} :</p>
        <p className="pr-1 w-[70px]">{seconds}</p>
      </div>
      <div className="flex items-center justify-center gap-8">
        <div
          disabled={start}
          className={`${
            !start ? "cursor-pointer" : "cursor-not-allowed"
          }  w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-white`}
          onClick={onStart}
        >
          START
        </div>

        <div
          onClick={onLap}
          className="cursor-pointer w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white"
        >
          LAP
        </div>

        <div
          onClick={onStop}
          className="cursor-pointer w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white"
        >
          STOP
        </div>
      </div>
    </div>
  );
};
