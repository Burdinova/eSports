import { useParams, Link } from "react-router-dom";
import { useState } from "react";
// import "/src/pages/Tournaments/tournamentPage.scss";
import "./tournamentPage.scss";

import TabSwich from "../../components/TabSwitch/TabSwith.jsx";
import TitleH2 from "../../components/TitleH2/TitleH2.jsx";
import RoundCards from "../../components/RoundCard/RoundCardsContainer.jsx";

import game1 from "../../images/game2.jpg";

const tournament = {
  id: 1,
  img: game1,
  title: "Dota 2 tournament",
  date: "12.12.2003 | 17:00",
  inf: "5v5 | 32 места | 1.000.000₽ ",
  status: "completed", //open, ongoing, completed, cancelled

  participants: [
    { id: 0, avatar: "/src/images/game1.jpg", name: "gg" },
    { id: 1, avatar: "/src/images/game1.jpg", name: "Оля" },
    { id: 1, avatar: "/src/images/game1.jpg", name: "Оля" },
    { id: 1, avatar: "/src/images/game1.jpg", name: "Оля" },
  ],
};

const resultPlaces = [
  { place: 1, id: 0, avatar: "/src/images/game1.jpg", name: "da", prize: 50 },
  { place: 2, id: 1, avatar: "/src/images/game1.jpg", name: "gg", prize: 40 },
  { place: 3, id: 2, avatar: "/src/images/game1.jpg", name: "scc", prize: 20 },
  { place: 4, id: 3, avatar: "/src/images/game1.jpg", name: "gg", prize: 0 },
  { place: 5, id: 4, avatar: "/src/images/game1.jpg", name: "ww", prize: 0 },
  // { place: 6, id: 5, avatar: "/src/images/game1.jpg", name: "gg", prize: 0 },
];

export default function TournamentPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Обзор" },
    { id: "bracket", label: "Сетка" },
    { id: "matches", label: "Матчи" },
    { id: "participants", label: "Участники" },
    { id: "prizes", label: "Призы" },
  ];

  const getTournamentStatus = (status) => {
    switch (status) {
      case "open":
        return "Открыт";
      case "ongoing":
        return "Идет";
      case "completed":
        return "Завершён";
      case "cancelled":
        return "Отменён";
      default:
        return "Статус неизвестен";
    }
  };

  return (
    <div className="tournament-page">
      {/* <h2>{tournament.title}</h2> */}
      {/* <p>ID турнира: {id}</p> */}
      <div className="tournament-page__header">
        <img className="avatar-uploader" src={tournament?.img ?? ""} alt="" />
        <div className="tournament-page__header-left">
          <p>{tournament.date}</p>
          <TitleH2
            style="aboutgame__header-title"
            title={tournament?.title ?? "Название неизвестно"}
          />
          <p className={`tournament-page__status status--${tournament.status}`}>
            {getTournamentStatus(tournament.status)}
          </p>
        </div>
      </div>
      <TabSwich tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />
      <div className="tab-content">
        {activeTab === "participants" && (
          <RoundCards
            users={tournament.participants}
            isRequest={false}
            isTeam={false}
          />
        )}

        {activeTab === "prizes" &&
          (tournament.status === "completed" ? (
            <div className="tournament-page__prizes">
              <div className="tournament-page__prizes-header">
                <span>№</span>
                <span>Ник</span>
                <span>Приз</span>
              </div>
              {resultPlaces.map((team) => (
                <div className="tournament-page__prizes-row" key={team.id}>
                  <span>{team.place}</span>
                  <Link
                    to={`/profile/${team.id}`}
                    className="tournament-page__team-link"
                  >
                    <img
                      src={team.avatar}
                      alt="avatar"
                      className="team-avatar"
                    />
                    {team.name}
                  </Link>
                  <span>{team.prize > 0 ? `${team.prize}₽` : "-"}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="tournament-page__not-completed">
              Турнир ещё не завершён. Таблица призов появится после окончания.
            </p>
          ))}
      </div>
    </div>
  );
}
