import AddModal from "./utilities/AddModal";
import pic from "../image/newMoviePic.jpg";

const NewMovie = ({ showModal, onAddMovie, onCancel }) => {
  const handleSaveDataMovie = (enteredMovieData) => {
    const movieData = {
      ...enteredMovieData,
      id: Date.now(),
      pic: pic,
    };
    onAddMovie(movieData);
  };

  return (
    <AddModal
      showModal={showModal}
      onSaveMovieData={handleSaveDataMovie}
      onCancel={onCancel}
    />
  );
};

export default NewMovie;
