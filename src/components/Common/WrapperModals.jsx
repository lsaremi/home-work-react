const WrapperModals = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-[#C4C4C4] opacity-20" />
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        {children}
      </div>
    </div>
  );
};

export default WrapperModals;
