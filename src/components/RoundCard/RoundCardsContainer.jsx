import RoundCard from "./RoundCard";
import "./roundCardContainer.scss";

export default function RoundCardsContainer({ users, isRequest }) {
  return (
    <div className="round-card-container">
      {users.map((f) => (
        <RoundCard
          key={f.id}
          id={f.id}
          avatar={f.avatar}
          name={f.name}
          isRequest={isRequest}
        />
      ))}
    </div>
  );
}
