import moment from "moment";
import sunny from "../../images/Sun.svg";
import bi_cloud_rain from "../../images/bi_cloud-rain.svg";
import bi_cloud_sun from "../../images/bi_cloud-sun.svg";

export const RightSide = ({ weatherData }) => {
  return (
    <div className="bg-[#222831] flex flex-1 flex-col rounded-tr-2xl rounded-br-2xl">
      {weatherData && (
        <>
          <div className="flex items-center justify-between text-white px-8 pt-8">
            {/* <div>PRECIPITATION</div> */}
            <div>PRESSURE</div>
            <div>{weatherData.main.pressure}</div>
          </div>
          <div className="flex items-center justify-between text-white px-8">
            <div>HUMIDITY</div>
            <div>{weatherData.main.humidity} %</div>
          </div>
          <div className="flex items-center justify-between text-white px-8">
            <div>WIND</div>
            <div>{weatherData.wind.speed} km/h</div>
          </div>

          <div className="flex items-center justify-center gap-[1px] mt-16 mb-44">
            <div className="flex flex-col items-center justify-center gap-4 bg-white rounded-lg px-1 py-4">
              <img
                width={30}
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt="icon"
              />
              <div className="text-xs">
                {moment.unix(weatherData.dt).format("dddd")}
              </div>
              <div className="text-sm font-bold">
                {(weatherData.main.temp - 273.15).toFixed(2)} °C
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 bg-[#272E37] rounded-lg p-4">
              <img width={30} src={bi_cloud_rain} alt="icon" />
              <div className="text-xs">Thu</div>
              <div className="text-sm font-bold">30 °C</div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 bg-[#272E37] rounded-lg p-4">
              <img width={30} src={bi_cloud_sun} alt="icon" />
              <div className="text-xs">Fry</div>
              <div className="text-sm font-bold">30 °C</div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 bg-[#272E37] rounded-lg p-4">
              <img width={30} src={sunny} alt="icon" />
              <div className="text-xs">Sat</div>
              <div className="text-sm font-bold">30 °C</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
