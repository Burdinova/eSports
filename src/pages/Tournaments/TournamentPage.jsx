import { useParams, Link } from "react-router-dom";
import { useState } from "react";
// import "/src/pages/Tournaments/tournamentPage.scss";
import "./tournamentPage.scss";

import TabSwich from "../../components/TabSwitch/TabSwith.jsx";
import TitleH2 from "../../components/TitleH2/TitleH2.jsx";
import RoundCards from "../../components/RoundCard/RoundCardsContainer.jsx";
import MatchCard from "../../components/Card/MatchCard.jsx";

import game1 from "../../images/game2.jpg";
import { tournaments } from "../../helpers/tournamentsList.js";

const tournament = {
  id: 1,
  img: game1,
  title: "Dota 2 tournament",
  date: "12.12.2003 | 17:00",
  inf: "5v5 | 32 места | 1.000.000₽ ",
  prize_fund: 100000,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, odit.",
  manager: { id: 0, avatar: "/src/images/game1.jpg", name: "gg" },
  contact: "@iburdik",
  status: "completed", //open, ongoing, completed, cancelled,
  has_groupstage: true,
  group_stage: {
    id: 123,
    groups: [
      {
        id: 124,
        letter: "A",
        matches: [
          {
            id: 1,
            number: 1,
            format: "bo1",
            status: "upcoming", //upcoming, ongoing, completed - предстоящий, текущий, завершенный
            participant1: {
              id: 120,
              name: "Vasya",
              avatar: "/src/images/game1.jpg",
            },
            participant2: {
              id: 121,
              name: "Petya",
              avatar: "/src/images/game1.jpg",
            },
            score1: 2,
            score2: 3,
          },
          {
            id: 2,
            number: 1,
            format: "bo1",
            status: "ongoing",
            participant1: {
              id: 120,
              name: "Vasya",
              avatar: "/src/images/game1.jpg",
            },
            participant2: {
              id: 121,
              name: "Arseny",
              avatar: "/src/images/game1.jpg",
            },
            score1: 2,
            score2: 1,
          },
          {
            id: 3,
            number: 3,
            format: "bo1",
            status: "completed",
            participant1: {
              id: 120,
              name: "Vasya",
              avatar: "/src/images/game1.jpg",
            },
            participant2: {
              id: 121,
              name: "Arseny",
              avatar: "/src/images/game1.jpg",
            },
            score1: 2,
            score2: 1,
          },
        ],
      },
      {
        id: 125,
        letter: "B",
        matches: [
          {
            id: 1,
            number: 5,
            format: "bo1",
            status: "upcoming",
            participant1: {
              id: 120,
              name: "Inna",
              avatar: "/src/images/game1.jpg",
            },
            participant2: {
              id: 121,
              name: "Arseny",
              avatar: "/src/images/game1.jpg",
            },
            score1: 2,
            score2: 1,
          },
          {
            id: 1,
            number: 5,
            format: "bo1",
            status: "upcoming",
            participant1: {
              id: 120,
              name: "Inna",
              avatar: "/src/images/game1.jpg",
            },
            participant2: {
              id: 121,
              name: "Arseny",
              avatar: "/src/images/game1.jpg",
            },
            score1: 2,
            score2: 1,
          },
          {
            id: 1,
            number: 5,
            format: "bo1",
            status: "upcoming",
            participant1: {
              id: 120,
              name: "Inna",
              avatar: "/src/images/game1.jpg",
            },
            participant2: {
              id: 121,
              name: "Arseny",
              avatar: "/src/images/game1.jpg",
            },
            score1: 2,
            score2: 1,
          },
          {
            id: 1,
            number: 5,
            format: "bo1",
            status: "upcoming",
            participant1: {
              id: 120,
              name: "Inna",
              avatar: "/src/images/game1.jpg",
            },
            participant2: {
              id: 121,
              name: "Arseny",
              avatar: "/src/images/game1.jpg",
            },
            score1: 2,
            score2: 1,
          },
          {
            id: 2,
            number: 6,
            format: "bo1",
            status: "upcoming",
            participant1: {
              id: 120,
              name: "Inna",
              avatar: "/src/images/game1.jpg",
            },
            participant2: {
              id: 121,
              name: "Petya",
              avatar: "/src/images/game1.jpg",
            },
            score1: 2,
            score2: 1,
          },
        ],
      },
    ],
    // winner_qual: 2,
    // loser_qual: 2,
  },

  playoff_stage: {
    id: 123,
    rounds: [
      {
        letter: "1",
        matches: [
          {
            id: 1,
            number: 1,
            format: "bo1",
            status: "upcoming", //upcoming, ongoing, completed - предстоящий, текущий, завершенный
            participant1: {
              id: 120,
              name: "Vasya",
              avatar: "/src/images/game1.jpg",
            },
            participant2: {
              id: 121,
              name: "Petya",
              avatar: "/src/images/game1.jpg",
            },
            score1: 2,
            score2: 3,
          },
          {
            id: 2,
            number: 1,
            format: "bo1",
            status: "ongoing",
            participant1: {
              id: 120,
              name: "Vasya",
              avatar: "/src/images/game1.jpg",
            },
            participant2: {
              id: 121,
              name: "Arseny",
              avatar: "/src/images/game1.jpg",
            },
            score1: 2,
            score2: 1,
          },
          {
            id: 3,
            number: 3,
            format: "bo1",
            status: "completed",
            participant1: {
              id: 120,
              name: "Vasya",
              avatar: "/src/images/game1.jpg",
            },
            participant2: {
              id: 121,
              name: "Arseny",
              avatar: "/src/images/game1.jpg",
            },
            score1: 2,
            score2: 1,
          },
        ],
      },
      {
        id: 125,
        letter: "B",
        matches: [
          {
            id: 1,
            number: 5,
            format: "bo1",
            status: "upcoming",
            participant1: {
              id: 120,
              name: "Inna",
              avatar: "/src/images/game1.jpg",
            },
            participant2: {
              id: 121,
              name: "Arseny",
              avatar: "/src/images/game1.jpg",
            },
            score1: 2,
            score2: 1,
          },
          {
            id: 2,
            number: 6,
            format: "bo1",
            status: "upcoming",
            participant1: {
              id: 120,
              name: "Inna",
              avatar: "/src/images/game1.jpg",
            },
            participant2: {
              id: 121,
              name: "Petya",
              avatar: "/src/images/game1.jpg",
            },
            score1: 2,
            score2: 1,
          },
        ],
      },
    ],
  },

  final: {
    id: 2,
    number: 6,
    format: "bo1",
    status: "upcoming",
    participant1: {
      id: 120,
      name: "Inna",
      avatar: "/src/images/game1.jpg",
    },
    participant2: {
      id: 121,
      name: "Petya",
      avatar: "/src/images/game1.jpg",
    },
    score1: 2,
    score2: 1,
  },

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
];

export default function TournamentPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const [activeStage, setActiveStage] = useState("playoff"); // Default to "Плей-офф"

  const tabs = [
    { id: "overview", label: "Обзор" },
    { id: "bracket", label: "Сетка" },
    { id: "matches", label: "Матчи" },
    { id: "participants", label: "Участники" },
    { id: "prizes", label: "Призы" },
  ];

  const stageFilters = [
    ...(tournament.has_groupstage ? [{ id: "group", label: "Групповой" }] : []),
    { id: "playoff", label: "Плей-офф" },
    { id: "final", label: "Финал" },
  ];

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
        return "Неизвестно";
    }
  };

  return (
    <div className="tournament-page">
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
        {activeTab === "overview" && (
          <div className="tournament-page__overview">
            <div className="tournament-page__overview-section">
              <h3 className="tournament-page__overview-title">Описание</h3>
              <p className="tournament-page__overview-description">
                {tournament.description || "Описание отсутствует"}
              </p>
            </div>
            <div className="tournament-page__overview-highlights">
              <div className="tournament-page__overview-card">
                <h4 className="tournament-page__overview-card-title">
                  Призовой фонд
                </h4>
                <p className="tournament-page__overview-card-content tournament-page__overview-prize">
                  {tournament.prize_fund
                    ? `${tournament.prize_fund.toLocaleString()} ₽`
                    : "Не указан"}
                </p>
              </div>
              <div className="tournament-page__overview-card">
                <h4 className="tournament-page__overview-card-title">
                  Организатор
                </h4>
                <Link
                  to={`/profile/${tournament.manager?.id || 0}`}
                  className="tournament-page__overview-organizer"
                >
                  <img
                    src={
                      tournament.manager?.avatar ||
                      "/src/images/default-avatar.png"
                    }
                    alt="Organizer avatar"
                    className="tournament-page__overview-organizer-avatar"
                  />
                  <span className="tournament-page__overview-organizer-name">
                    {tournament.manager?.name || "Неизвестно"}
                  </span>
                </Link>
              </div>
              <div className="tournament-page__overview-card">
                <h4 className="tournament-page__overview-card-title">
                  Контакты
                </h4>
                <p className="tournament-page__overview-card-content">
                  {tournament.contact ? (
                    <a
                      href={`https://t.me/${tournament.contact.replace(
                        "@",
                        ""
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tournament-page__overview-contact-link"
                    >
                      {tournament.contact}
                    </a>
                  ) : (
                    "Контакты отсутствуют"
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "matches" && (
          <>
            <div className="stage-filter">
              {stageFilters.map((stage) => (
                <button
                  key={stage.id}
                  className={`stage-filter__button ${
                    activeStage === stage.id
                      ? "stage-filter__button--active"
                      : ""
                  }`}
                  onClick={() => setActiveStage(stage.id)}
                >
                  {stage.label}
                </button>
              ))}
            </div>

            {activeStage === "group" && tournament.has_groupstage && (
              <div className="tournament-stage">
                {tournament.group_stage.groups.map((group) => (
                  <div key={group.id} className="tournament-stage__group">
                    <h3 className="tournament-stage__title">
                      Группа {group.letter}
                    </h3>
                    <div className="tournament-stage__matches">
                      {group.matches.map((match) => (
                        <MatchCard key={match.id} match={match} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeStage === "playoff" && (
              <div className="tournament-stage">
                {tournament.playoff_stage.rounds.map((round) => (
                  <div key={round.id} className="tournament-stage__group">
                    <h3 className="tournament-stage__title">
                      Раунд {round.letter}
                    </h3>
                    <div className="tournament-stage__matches">
                      {round.matches.map((match) => (
                        <MatchCard key={match.id} match={match} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeStage === "final" && (
              <MatchCard key={tournament.final.id} match={tournament.final} />
            )}
          </>
        )}

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
