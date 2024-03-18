import './ActorListPage.css';
import ActorCard from '../../components/ActorCard/ActorCard';

export default function ActorListPage({ movies }) {
  const actors = Array.from(new Set(movies.map((m) => m.cast).flat()));

  return (
    <div>
      <h1>Actors</h1>
      <div className="actors">
        {actors.map((a, index) => (
          <ActorCard actor={a} key={index} />
        ))}
      </div>
    </div>
  );
}
