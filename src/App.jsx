import { useState } from "react";
import MovieCard from "./components/MovieCard";
import DeleteModal from "./components/common/DeleteModal";
import data from "./data.json";
import NewMovie from "./components/NewMovie";
import EditModal from "./components/common/EditModal";

const { movies: moviesArr } = data;

function App() {
  const [movies, setMovies] = useState(moviesArr);
  const [searchMovieName, setSearchMovieName] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedMovieForDelete, setSelectedMovieForDelete] = useState(null);
  const [selectedMovieForEdit, setSelectedMovieForEdit] = useState(null);

  //delete
  const handleShowModalDelete = (movie) => {
    setShowDeleteModal(true);
    setSelectedMovieForDelete(movie);
  };

  const handleDelete = () => {
    setMovies((prevMovie) =>
      prevMovie.filter((m) => m !== selectedMovieForDelete)
    );
    setSelectedMovieForDelete(null);
  };

  //edit
  const handleShowModalEdit = (movie) => {
    setShowEditModal(true);
    setSelectedMovieForEdit(movie);
  };

  const handleEdit = (editedMovie) => {
    const updatedMovie = movies.map((movie) =>
      movie.id === editedMovie.id ? editedMovie : movie
    );
    setMovies(updatedMovie);
    setSelectedMovieForEdit(null);
  };

  //add
  const handleAddMovie = (newMovie) => {
    setMovies((prevMovies) => {
      return [...prevMovies, newMovie];
    });

    setShowAddModal(false);
  };

  return (
    <div className="container mx-auto my-8 p-4 flex flex-col items-center gap-4 flex-grow relative">
      <h1 className="text-lg text-center font-bold">
        {movies.length > 0 ? "Movie List" : "ADD A MOVIE"}
      </h1>
      <input
        placeholder="Search here..."
        value={searchMovieName}
        onChange={(e) => setSearchMovieName(e.target.value)}
        className="py-2 px-10 w-full sm:w-3/4 md:w-2/4 rounded-md bg-green-100 outline-black"
      />
      <div className="grid grid-cols-1 gap-4 my-8 w-full sm:w-3/4 md:w-2/4">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onShowModalDeleteForThisMovie={handleShowModalDelete}
              onShowModalEditForThisMovie={handleShowModalEdit}
            />
          ))
        ) : (
          <div className="text-center font-bold mt-10">
            <p className="mb-6">
              Your movie list is empty lets try to fill it up...
            </p>
            <p>
              Write your favorite movie name then click the add button and magic
              will happen...😉
            </p>
          </div>
        )}
      </div>
      <button
        onClick={() => setShowAddModal(true)}
        className="fixed bottom-4 right-4 w-10 h-10 rounded-full bg-red-500 shadow-add-btn"
      >
        <span className="flex items-center justify-center text-white text-2xl">
          +
        </span>
      </button>
      {showDeleteModal && (
        <DeleteModal
          movieName={selectedMovieForDelete?.title} // '?.' is not necessery and selectedMovieForDelete.title is true too
          onDelete={handleDelete}
          onClose={() => setShowDeleteModal(false)}
        />
      )}
      {showAddModal && (
        <NewMovie
          showModal={showAddModal}
          onAddMovie={handleAddMovie}
          onCancel={() => setShowAddModal(false)}
        />
      )}
      {showEditModal && (
        <EditModal
          movie={selectedMovieForEdit}
          onEdit={handleEdit}
          onCancel={() => setShowEditModal(false)}
        />
      )}
    </div>
  );
}

export default App;
