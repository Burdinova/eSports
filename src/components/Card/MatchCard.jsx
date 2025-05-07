import "./matchCard.scss";

export default function MatchCard({ match, className }) {
  const getMatchStatus = (status) => {
    switch (status) {
      case "upcoming":
        return { text: "Предстоящий", class: "status--upcoming" };
      case "ongoing":
        return { text: "Текущий", class: "status--ongoing" };
      case "completed":
        return { text: "Завершён", class: "status--completed" };
      default:
        return { text: "Неизвестно", class: "status--unknown" };
    }
  };

  return (
    <div className={`match-card ${className || ""}`}>
      <div className="match-card__header">
        <div className="match-card__header-left">
          <span
            className={`match-card__status ${
              getMatchStatus(match.status).class
            }`}
          >
            {getMatchStatus(match.status).text}
          </span>
          <span className="match-card__number">Матч {match.number}</span>
        </div>
        <span className="match-card__format">{match.format.toUpperCase()}</span>
      </div>
      <div className="match-card__teams">
        <div className="match-card__team">
          <img
            src={match.participant1.avatar || "/src/images/default-avatar.png"}
            alt="avatar"
            className="match-card__avatar"
          />
          <span className="match-card__name">{match.participant1.name}</span>
          <span className="match-card__score">{match.score1}</span>
        </div>
        <div className="match-card__team">
          <img
            src={match.participant2.avatar || "/src/images/default-avatar.png"}
            alt="avatar"
            className="match-card__avatar"
          />
          <span className="match-card__name">{match.participant2.name}</span>
          <span className="match-card__score">{match.score2}</span>
        </div>
      </div>
    </div>
  );
}
