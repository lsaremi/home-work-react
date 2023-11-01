import { useState } from "react";
import HeaderAddPage from "./Header/HeaderAddPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPage = ({ onBack, onAddNote }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [headerMode] = useState("ADD"); //use ref later...
  const [isTitleValid, setIsTitleValid] = useState(true);

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
    setIsTitleValid(!!newTitle);
  };

  const handleSave = () => {
    if (title.length > 0) {
      const newNote = {
        id: Date.now(),
        title: title,
        desc: desc,
      };

      onAddNote(newNote);
      onBack();
    } else {
      toast.error("please enter the title , it is required", {
        autoClose: 2000,
        theme: "dark",
      });
      setIsTitleValid(false);
    }
  };

  return (
    <>
      <HeaderAddPage
        onClickSave={handleSave}
        onClickBack={onBack}
        headerMode={headerMode}
      />
      {!isTitleValid && <ToastContainer />}
      <div className="relative mt-10 mb-8 mx-2">
        <input
          className="w-full text-3xl text-[#9A9A9A] border-none outline-none bg-transparent "
          placeholder="Title"
          onChange={handleTitleChange}
          value={title}
        />
        {!isTitleValid && (
          <span className="text-red-500 absolute text-sm -bottom-6 left-0">
            please enter the title , it is required
          </span>
        )}
      </div>

      <textarea
        className="text-[#9A9A9A] border-none outline-none bg-transparent mx-2"
        placeholder="Type something..."
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
        rows="10"
      />
    </>
  );
};

export default AddPage;
