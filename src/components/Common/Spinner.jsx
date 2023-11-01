import WrapperModals from "./WrapperModals";

const Spinner = () => {
  const onClose = () => {};
  return (
    <WrapperModals onClick={onClose}>
      <div className="w-12 h-12 border border-t-4 border-t-black border-l-4 border-l-black border-b-4 border-b-black rounded-full animate-spin mb-28"></div>
    </WrapperModals>
  );
};

export default Spinner;
