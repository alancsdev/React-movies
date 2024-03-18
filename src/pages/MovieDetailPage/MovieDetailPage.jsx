/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';

export default function MovieDetailPage({ movies }) {
  const { movieName } = useParams();

  const selectedMovie = movies.find((movie) => {
    return movie.title === movieName;
  });

  return (
    <>
      <h1>MovieDetailPage</h1>
      {selectedMovie ? (
        <div>
          <h2>{selectedMovie.title}</h2>
          <h2>{selectedMovie.releaseDate}</h2>
          <img src={selectedMovie.posterPath} alt="moviePoster" />
          <p>{selectedMovie.cast.join(',')}</p>
        </div>
      ) : (
        <p> Movie not found</p>
      )}
    </>
  );
}
