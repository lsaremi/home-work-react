import { useEffect, useState } from "react";
import Main from "./components/Main";
import AddPage from "./components/AddPage";
import AboutModal from "./components/Common/AboutModal";
import Spinner from "./components/Common/Spinner";
import NoteComponent from "./components/Note/NoteComponent";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [showModal, setShowModal] = useState({
    about: false,
    add: false,
    search: false,
    loading: true,
    noteToggle: false,
    main: true,
  });

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setShowModal((prevShowModal) => ({ ...prevShowModal, loading: false }));
    }, 500);

    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  const addNote = (note) => {
    setNotes([...notes, note]);
    localStorage.setItem("notes", JSON.stringify([...notes, note]));
  };

  const deleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setSelectedNote(null);
  };

  const handleBackPage = () => {
    setShowModal((prevShowModal) => ({
      ...prevShowModal,
      add: false,
      main: true,
    }));
  };

  const handleBackPageToMain = () => {
    setSelectedNote(null);
    setShowModal((prevShowModal) => ({
      ...prevShowModal,
      noteToggle: false,
      main: true,
    }));
  };

  const handleShowNoteComponent = (note) => {
    setSelectedNote(note);
    setShowModal((prevShowModal) => ({
      ...prevShowModal,
      noteToggle: true,
      main: false,
    }));
  };

  const handleShowAddPage = () =>
    setShowModal((prevShowModal) => ({
      ...prevShowModal,
      add: true,
      main: false,
    }));

  const handleAbout = () => {
    setShowModal((prevShowModal) => ({ ...prevShowModal, about: true }));
  };

  const handleCloseAbotModal = () =>
    setShowModal((prevShowModal) => ({
      ...prevShowModal,
      about: false,
    }));

  const handleSearch = () => {
    setShowModal((prevShowModal) => ({
      ...prevShowModal,
      search: true,
      main: false,
    }));
  };

  return (
    <div
      className={`flex flex-col relative p-4 ${
        !showModal.add ? "items-center justify-between" : ""
      }`}
    >
      {showModal.loading && <Spinner />}
      {showModal.main && (
        <Main
          notes={notes}
          onAbout={handleAbout}
          onSearch={handleSearch}
          onClose={handleShowAddPage}
          onShowNoteComponent={handleShowNoteComponent}
        />
      )}
      {showModal.add && <AddPage onBack={handleBackPage} onAddNote={addNote} />}
      {showModal.about && <AboutModal onClose={handleCloseAbotModal} />}
      {showModal.noteToggle && (
        <NoteComponent
          note={selectedNote}
          onBackToMain={handleBackPageToMain}
          onDeleteNote={deleteNote}
        />
      )}
    </div>
  );
}

export default App;
