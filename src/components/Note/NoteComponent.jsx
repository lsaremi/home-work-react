import { useState } from "react";
import HeaderAddPage from "../Header/HeaderAddPage";
import WrapperModals from "../Common/WrapperModals";
import info from "../../images/info.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NoteComponent = ({ onBackToMain, onDeleteNote, note }) => {
  const [headerMode] = useState("TRASH"); //use ref later...
  const [deleteModal, setDeleteModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleDelete = () => {
    onDeleteNote(note.id);
    setDeleteModal(false);
    setShowToast(true);
    toast.success("delete note successfully", {
      autoClose: 2000,
      theme: "dark",
    });
    setTimeout(() => {
      onBackToMain();
    }, 2000);
  };

  const handleHideDeleteModal = () => {
    setDeleteModal(false);
  };
  const handleShowDeleteModal = () => {
    setDeleteModal(true);
  };

  return (
    <>
      <HeaderAddPage
        onClickDelete={handleShowDeleteModal}
        onClickBack={onBackToMain}
        headerMode={headerMode}
      />
      {showToast && <ToastContainer />}

      <div className="flex flex-col items-start w-full">
        <h4 className="text-3xl mb-6 text-[#C4C4C4]">{note?.title}</h4>
        <p className="text-lg text-[#C4C4C4] text-justify">{note?.desc}</p>
      </div>
      {deleteModal && (
        <WrapperModals>
          <div className="bg-[#252525] w-3/4 z-50 px-7 py-12 rounded-2xl flex flex-col items-center text-[#CFCFCF]  justify-between">
            <div className="mb-4">
              <img src={info} alt="info pic in modal delet" />
            </div>
            <p className="mb-4">Are your sure you want delete?</p>
            <div className="flex items-center mt-4">
              <button
                onClick={handleDelete}
                className="rounded-md px-5 py-2 bg-[#F00] mr-6 cursor-pointer"
              >
                Delete
              </button>
              <button
                onClick={handleHideDeleteModal}
                className="rounded-md px-6 py-2 bg-[#30BE71] cursor-pointer"
              >
                Keep
              </button>
            </div>
          </div>
        </WrapperModals>
      )}
    </>
  );
};

export default NoteComponent;
