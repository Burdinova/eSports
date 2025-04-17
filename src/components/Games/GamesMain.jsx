import Game from "./Game";
import "./gamesMain.scss";
import { games } from "../../helpers/gamesList";

export default function GamesMain() {
  return (
    <div>
      <ul className="games">
        {games.map((game) => {
          return <Game key={game.id} title={game.title} img={game.img} />;
        })}
      </ul>
    </div>
  );
}
