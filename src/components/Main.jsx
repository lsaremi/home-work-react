import { useState } from "react";
import close from "../images/close.svg";
import Note from "./Note/Note";
import HeaderMain from "./Header/HeaderMain";
import addBtn from "../images/add.svg";
import notePic from "../images/rafiki.png";
import searchPic from "../images/cuate.png";

const Main = ({ onAbout, onClose, notes, onShowNoteComponent }) => {
  const [inputSearch, setInputSearch] = useState("");
  const [searchBox, setSearchBox] = useState(false);

  const handleNoteClick = (note) => {
    onShowNoteComponent(note);
  };

  const handleShowSearchBox = () => {
    setSearchBox(true);
  };

  const handleHideSearchBox = () => {
    setInputSearch("");
    setSearchBox(false);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(inputSearch.toLowerCase())
  );

  return (
    <>
      {!searchBox && (
        <HeaderMain
          onClickAbout={onAbout}
          onClickSearch={handleShowSearchBox}
        />
      )}

      {searchBox && (
        <div className="relative w-full">
          <input
            placeholder="search something here..."
            className="bg-[#3B3B3B] rounded-full w-full px-4 py-2 outline-none border-none my-12 text-[#CCC]"
            onChange={(e) => setInputSearch(e.target.value)}
            value={inputSearch}
          />
          <img
            src={close}
            onClick={handleHideSearchBox}
            className="absolute top-[56px] right-[16px] cursor-pointer"
            alt="clos icon"
          />
        </div>
      )}

      {filteredNotes.length === 0 && inputSearch !== "" ? (
        <div>
          <img src={searchPic} alt="search pic" />
          <p className="text-white text-center">No results found.</p>
        </div>
      ) : (
        filteredNotes.map((note) => (
          <Note
            key={note.id}
            title={note.title}
            desc={note.desc}
            onClickNote={() => handleNoteClick(note)}
          />
        ))
      )}

      {inputSearch === "" && filteredNotes.length === 0 && (
        <div>
          <img src={notePic} alt="note pic" />
          <p className="text-white text-center">Create your first note!</p>
        </div>
      )}

      <div>
        <div
          onClick={onClose}
          className="w-14 h-14 fixed bottom-3 right-3 flex items-center justify-center rounded-full bg-[#252525]  shaddow-add-btn"
        >
          <img className="cursor-pointer" src={addBtn} alt="add button" />
        </div>
      </div>
    </>
  );
};

export default Main;
