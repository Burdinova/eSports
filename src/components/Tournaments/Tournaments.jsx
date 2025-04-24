import Tournament from "./Tournament";
import "./tournaments.scss";
// import { tournaments } from "../../helpers/tournamentsList";

export default function Tournaments({array}) {
  return (
    <div>
      <ul className="tournaments">
        {array.map((game) => {
          return <Tournament key={game.id} img={game.img} title={game.title} date={game.date} inf={game.inf}/>;
        })}
      </ul>
    </div>
  );
}
