import "./gamesMain.scss";
import { Link } from 'react-router-dom';

export default function Game({ id, title, img }) {
  return (
    <li className="game">
       <Link to={`/about-game/${id}`}> {/* Передаём id игры в ссылку */}
        <img src={img} alt={title} className="game__img" />
        <h3 className="game__title">{title}</h3>
      </Link>
    </li>
  );
}
