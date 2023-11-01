import chevron_left from "../../images/chevron_left.svg";
import save from "../../images/save.svg";
import trash from "../../images/🦆 icon _trash_.svg";

const HeaderAddPage = ({
  onClickBack,
  onClickSave,
  onClickDelete,
  headerMode,
}) => {
  return (
    <div className="w-full flex items-center justify-between mb-8">
      <div
        onClick={onClickBack}
        className="w-10 h-10 rounded-xl bg-[#3B3B3B] mr-2 cursor-pointer flex items-center justify-center"
      >
        <img src={chevron_left} alt="chevron_left icon" />
      </div>
      <div
        onClick={headerMode === "ADD" ? onClickSave : onClickDelete}
        className="w-10 h-10 rounded-xl bg-[#3B3B3B] cursor-pointer flex items-center justify-center"
      >
        <img src={headerMode === "ADD" ? save : trash} alt="about icon" />
      </div>
    </div>
  );
};

export default HeaderAddPage;
