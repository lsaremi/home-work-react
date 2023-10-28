import AddModal from "./common/AddModal";
import pic from "../image/newMoviePic.jpg";

const NewMovie = ({ onAddMovie, onCancel }) => {
  const handleSaveDataMovie = (enteredMovieData) => {
    const movieData = {
      ...enteredMovieData,
      id: Date.now(),
      pic: pic,
    };
    onAddMovie(movieData);
  };

  return <AddModal onSaveMovieData={handleSaveDataMovie} onCancel={onCancel} />;
};

export default NewMovie;
