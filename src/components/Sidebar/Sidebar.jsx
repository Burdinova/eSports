import { Link } from "react-router-dom";
import "./sidebar.scss";

import logo from "../../images/logo.png";
import FriendsIcon from "../../icons/friends1.svg?react";
import GamesIcon from "../../icons/games1.svg?react";
import TeamsIcon from "../../icons/teams1.svg?react";
import TournamentIcon from "../../icons/tournament1.svg?react";
import HeadsetIcon from "../../icons/headset1.svg?react";

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar__logo">
        <Link to="/" className="sidebar__link">
          <img src={logo} alt="Главная" />
        </Link>
      </div>

      <div>
        <ul>
          <li>
            <Link to="/games" className="sidebar__link">
              <GamesIcon className="sidebar__icon" aria-label="Найти турнир" />
            </Link>
          </li>
          <li>
            <Link to="/friends" className="sidebar__link">
              <FriendsIcon className="sidebar__icon" aria-label="Друзья" />
            </Link>
          </li>
          <li>
            <Link to="/commands" className="sidebar__link">
              <TeamsIcon className="sidebar__icon" aria-label="Команды" />
            </Link>
          </li>
          <li>
            <Link to="/" className="sidebar__link">
              <TournamentIcon className="sidebar__icon" aria-label="Создать турнир" />
            </Link>
          </li>
        </ul>
      </div>

      <div className="sidebar__bottom">
        <Link to="/" className="sidebar__link">
          <HeadsetIcon className="sidebar__icon" aria-label="Поддержка" />
        </Link>
      </div>
    </nav>
  );
}
