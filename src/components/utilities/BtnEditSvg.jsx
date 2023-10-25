const BtnEditSvg = ({ onEdit }) => {
  return (
    <svg
      onClick={onEdit}
      className="cursor-pointer mr-3"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
    >
      <path
        fill="green"
        d="M28.564 3.434a4.889 4.889 0 0 0-6.914 0L4.357 20.73a3.7 3.7 0 0 0-1.002 1.84l-1.333 6.22a1 1 0 0 0 1.188 1.188l6.22-1.333a3.7 3.7 0 0 0 1.84-1.002l14.98-14.98l.275.276a1.5 1.5 0 0 1 0 2.121l-2.232 2.233a1 1 0 0 0 1.414 1.414l2.232-2.232a3.5 3.5 0 0 0 0-4.95l-.275-.276l.9-.901a4.89 4.89 0 0 0 0-6.914Zm-5.5 1.414a2.89 2.89 0 0 1 4.086 4.086L9.857 26.229a1.7 1.7 0 0 1-.846.46L4.3 27.7l1.01-4.71a1.7 1.7 0 0 1 .46-.846L23.064 4.848Z"
      />
    </svg>
  );
};

export default BtnEditSvg;
