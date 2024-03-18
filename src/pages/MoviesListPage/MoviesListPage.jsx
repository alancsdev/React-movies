import MovieCard from '../../components/MovieCard';
import './MoviesListPage.css';

export default function MoviesListPage({ movies }) {
  return (
    <>
      <h1>Movies List Page</h1>
      <div className="movies-list">
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </div>
    </>
  );
}
