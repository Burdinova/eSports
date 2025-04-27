import Game from "./Game";
import "./gamesMain.scss";
import { games } from "../../helpers/gamesList";

export default function GamesMain({style = "" , onSelectGame}) {
  return (
    <div>
      <ul className={`games ${style}`}>

      {games.map((game) => {
          // Если передан onSelectGame, то это значит, что мы в модальном окне,
          // и нужно отключить переход по ссылке
          const handleClick = (e) => {
            if (onSelectGame) {
              e.preventDefault();
           
              onSelectGame(game); // Вызываем onSelectGame для выбора игры
            }
          };

        // {games.map((game) => {
        //   return <Game key={game.id} id={game.id} title={game.title} img={game.img} />;
        // })}

        return (
          <Game
            key={game.id}
            id={game.id}
            title={game.title}
            img={game.img}
            onClick={handleClick} // Передаем обработчик клика
          />
        );
      })}


      </ul>
    </div>
  );
}
