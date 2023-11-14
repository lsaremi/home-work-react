import bgIage from "../../images/e06426df1254df03a60b913eaf1f97dd.png";
import location from "../../images/Location.svg";
import sunny from "../../images/Sun2.svg";

export const LeftSide = () => {
  return (
    <div className="gradient rounded-2xl flex-1 relative text-white">
      <img
        src={bgIage}
        alt="bg-image"
        className=" mix-blend-soft-light rounded-2xl w-full "
      />
      <div className="absolute top-8 left-8 flex flex-col gap-4 items-start justify-between h-[80%]">
        <div className="flex flex-col items-center justify-start gap-2">
          <div className="text-2xl font-bold">Tuesday</div>
          <div className="text-sm font-light flex items-center">
            20 Jun 2022
          </div>
          <div className="text-sm font-light flex items-center justify-between">
            <img src={location} alt="icon" width={20} />
            Biarritz, FR
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <img src={sunny} alt="icon" width={70} className="flex" />
          <div className="text-3xl font-bold">29 °C</div>
          <div className="text-xl font-bold">Sunny</div>
        </div>
      </div>
    </div>
  );
};
