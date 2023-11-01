import search from "../../images/search .svg";
import about from "../../images/about.svg";

const HeaderMain = ({ onClickAbout, onClickSearch }) => {
  return (
    <div className="w-full flex items-center justify-between mb-8">
      <p className="text-white text-lg ">Notes</p>
      <div className="flex items-center ">
        <div
          onClick={onClickSearch}
          className="w-10 h-10 rounded-xl bg-[#3B3B3B] mr-2 cursor-pointer flex items-center justify-center"
        >
          <img src={search} alt="search icon" />
        </div>
        <div
          onClick={onClickAbout}
          className="w-10 h-10 rounded-xl bg-[#3B3B3B] cursor-pointer flex items-center justify-center"
        >
          <img src={about} alt="about icon" />
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
