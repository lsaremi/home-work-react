import sunny from "../../images/Sun.svg";
export const RightSide = () => {
  return (
    <div className="bg-[#222831] flex flex-1 flex-col rounded-tr-2xl rounded-br-2xl">
      <div className="flex items-center justify-between text-white px-8 pt-8">
        <div>PRECIPITATION</div>
        <div>0%</div>
      </div>
      <div className="flex items-center justify-between text-white px-8">
        <div>HUMIDITY</div>
        <div>42%</div>
      </div>
      <div className="flex items-center justify-between text-white px-8">
        <div>WIND</div>
        <div>3 km/h</div>
      </div>
      <div className="flex items-center justify-center gap-[1px] mt-16 mb-44">
        <div className="flex flex-col items-center justify-center gap-4 bg-white rounded-lg p-4">
          <img width={30} src={sunny} alt="icon" />
          <div className="text-xs">Tue</div>
          <div className="text-sm font-bold">30 °C</div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 bg-[#272E37] rounded-lg p-4">
          <img width={30} src={sunny} alt="icon" />
          <div className="text-xs">Tue</div>
          <div className="text-sm font-bold">30 °C</div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 bg-[#272E37] rounded-lg p-4">
          <img width={30} src={sunny} alt="icon" />
          <div className="text-xs">Tue</div>
          <div className="text-sm font-bold">30 °C</div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 bg-[#272E37] rounded-lg p-4">
          <img width={30} src={sunny} alt="icon" />
          <div className="text-xs">Tue</div>
          <div className="text-sm font-bold">30 °C</div>
        </div>
      </div>
    </div>
  );
};
