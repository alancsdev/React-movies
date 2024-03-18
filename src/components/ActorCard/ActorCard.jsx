import { Link } from 'react-router-dom';

export default function ActorCard({ actor }) {
  return (
    <div
      className="actor-card"
      style={{ backgroundImage: 'url(https://picsum.photos/200)' }}
    >
      <h2>
        <Link to={`/actors/${actor}`}>{actor}</Link>
      </h2>
    </div>
  );
}
