import WrapperModals from "./WrapperModals";

const AboutModal = ({ onClose }) => {
  return (
    <WrapperModals onClick={onClose}>
      <div className="bg-[#252525] w-3/4 z-50 px-7 py-12 rounded-2xl flex flex-col text-[#CFCFCF]  justify-between">
        <div className="flex flex-col items-start mb-10">
          <p>Designed by - pourya</p>
          <p>app version - 1.0.0</p>
        </div>
        <p>Made by elham saremi</p>
      </div>
    </WrapperModals>
  );
};

export default AboutModal;
