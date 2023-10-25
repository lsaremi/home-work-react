import BtnDeleteSvg from "./utilities/BtnDeleteSvg";
import BtnEditSvg from "./utilities/BtnEditSvg";
import RateSvg from "./utilities/RateSvg";

const MovieCard = ({
  movie,
  onShowModalDeleteForThisMovie,
  onShowModalEditForThisMovie,
}) => {
  const { title, status, rate, pic } = movie;

  return (
    <div className="bg-green-100 w-full flex flex-col items-center justify-between gap-4 p-4 sm:p-6 rounded-md relative">
      <div className="w-full flex items-center justify-end">
        <BtnEditSvg onEdit={() => onShowModalEditForThisMovie(movie)} />
        <BtnDeleteSvg onDelete={() => onShowModalDeleteForThisMovie(movie)} />
      </div>
      <div className="flex w-full justify-around items-center">
        <div>
          <img className="rounded-md" width={100} src={pic} alt="movie-pic" />
        </div>
        <div className="h-full flex flex-col items-start justify-around">
          <div className="">{title}</div>
          <p>{rate}/10</p>
          <RateSvg rate={rate} />
          <button className="">{status}</button>
          <div
            className={`w-max p-2 rounded-md text-xs ${
              status ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {status ? "watched " : "unwatched"}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
