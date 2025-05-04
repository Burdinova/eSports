import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import "./header.scss";
import NotificationsIcon from "../../icons/bell-ring.svg?react";
import ProfileIcon from "../../icons/profile.svg?react";
// import Game from "../../images/game1.jpg?react";

export default function Header() {
  const hasNotifications = true;
  const [isProfileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="header">
      {/* <div className="header__item" ref={profileRef}>
        <Link
          to="/notifications"
          className="header__button"
          aria-label="уведомления"
        >
          <NotificationsIcon className="header__icon" />
          {hasNotifications && <span className="header__indicator" />}
        </Link>
      </div> */}

      <div className="header__item" ref={profileRef}>
        <button
          className="header__button"
          aria-label="профиль"
          onClick={() => setProfileOpen((prev) => !prev)}
        >
          {/* <img src={Game} className="header__icon profile" alt="профиль" /> */}
          <ProfileIcon className="header__icon" />
        </button>
        {isProfileOpen && (
          <div className="dropdown dropdown__profile">
            <Link to="/profile" className="dropdown__item">
              Профиль
            </Link>
            <Link to="/friends" className="dropdown__item">
              Друзья
            </Link>
            <Link to="/commands" className="dropdown__item">
              Команды
            </Link>
            <div className="dropdown__divider" />
            <Link to="/games" className="dropdown__item">
              Игры
            </Link>
            <Link to="/tournaments" className="dropdown__item">
              Турниры
            </Link>
            <div className="dropdown__divider" />
            <Link to="/logout" className="dropdown__item">
              Выйти
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
