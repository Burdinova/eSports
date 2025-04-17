import "./roundCard.scss";

export default function RoundCard({ avatar, name, isRequest }) {
  return (
    <div className="round-card">
      <img src={avatar} alt={`${name} avatar`} className="round-card__avatar" />
      <div className="round-card__name">{name}</div>

      {isRequest && (
        <div className="round-card__actions">
          <button className="round-card__button">Принять</button>
          <button className="round-card__button">Отклонить</button>
        </div>
      )}
    </div>
  );
}
