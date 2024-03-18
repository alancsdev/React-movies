import { useParams } from 'react-router-dom';
import MovieCard from '../../components/MovieCard';

export default function ActorDetailPage({ movies }) {
  const { actorName } = useParams();
  const filteredMovies = movies.filter((m) => m.cast.includes(actorName));
  return (
    <div>
      <h1>{actorName}</h1>
      <div className="movies-list">
        {filteredMovies.map((m, index) => (
          <MovieCard movie={m} key={index} />
        ))}
      </div>
    </div>
  );
}
