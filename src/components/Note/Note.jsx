const Note = ({ title, desc, onClickNote }) => {
  function getRandomColor() {
    const red = Math.floor(Math.random() * 56) + 200;
    const green = Math.floor(Math.random() * 56) + 200;
    const blue = Math.floor(Math.random() * 56) + 200;

    const color = `rgb(${red}, ${green}, ${blue})`;

    return color;
  }

  const randomColor = getRandomColor();

  const noteStyle = {
    backgroundColor: randomColor,
  };

  const summeryDesc = desc ? desc.slice(0, 100) : "";

  return (
    <div
      className={`cursor-pointer w-full sm:w-3/4 md:w-2/4 rounded-md p-4 mb-4`}
      style={noteStyle}
      onClick={onClickNote}
    >
      <h3 className="font-semibold">{title} :</h3>
      <p>{summeryDesc}</p>
    </div>
  );
};

export default Note;
