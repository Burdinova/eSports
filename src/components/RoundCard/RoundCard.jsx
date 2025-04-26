import { useNavigate } from "react-router-dom";
import "./roundCard.scss";

export default function RoundCard({ id, avatar, name, isRequest }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profile/${id}`);
  };

  return (
    <div className="round-card" onClick={handleClick}>
      <img src={avatar} alt={`${name} avatar`} className="round-card__avatar" />
      <div className="round-card__name">{name}</div>

      {isRequest && (
        <div className="round-card__actions" onClick={(e) => e.stopPropagation()}>
          <button className="round-card__button">Принять</button>
          <button className="round-card__button">Отклонить</button>
        </div>
      )}
    </div>
  );
}
