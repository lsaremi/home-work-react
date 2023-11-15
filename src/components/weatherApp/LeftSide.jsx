import bgIage from "../../images/e06426df1254df03a60b913eaf1f97dd.png";
import location from "../../images/Location.svg";
import moment from "moment";

export const LeftSide = ({ weatherData, error, loading }) => {
  return (
    <div className="gradient rounded-2xl flex-1 relative text-white">
      <img
        src={bgIage}
        alt="background"
        className=" mix-blend-soft-light rounded-2xl w-full "
      />
      {loading && <div className="absolute top-8 left-8">Loading...</div>}
      {error && (
        <div className="absolute top-8 left-8 text-red-500">{error}</div>
      )}
      {weatherData && (
        <div className="absolute top-8 left-8 flex flex-col gap-4 items-start justify-between h-[80%]">
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="text-2xl font-bold">
              {/* {new Date().toLocaleDateString("en-US", { weekday: "long" })} */}
              {moment.unix(weatherData.dt).format("dddd")}
            </div>
            <div className="text-sm font-light flex items-center">
              {/* {new Date().toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })} */}
              {moment.unix(weatherData.dt).format("MMM DD, YYYY")}
            </div>
            <div className="text-sm font-light flex items-center justify-between">
              <img src={location} alt="icon" width={20} />
              {`${weatherData.name}, ${weatherData.sys.country}`}
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt="icon"
              width={70}
              className="flex"
            />
            <div className="text-3xl font-bold">
              {(weatherData.main.temp - 273.15).toFixed(2)} °C
            </div>
            <div className="text-xl">{weatherData.weather[0].main}</div>
          </div>
        </div>
      )}
    </div>
  );
};
