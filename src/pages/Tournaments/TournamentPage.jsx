import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import "./tournamentPage.scss";

import TabSwich from "../../components/TabSwitch/TabSwith.jsx";
import TitleH2 from "../../components/TitleH2/TitleH2.jsx";
import RoundCards from "../../components/RoundCard/RoundCardsContainer.jsx";
import MatchCard from "../../components/Card/MatchCard.jsx";
import SubmitButton from "../../components/Button/SubmitButton.jsx";
import Modal from "../../components/Modal/Modal.jsx";

import game1 from "../../images/game2.jpg";
import { commands } from "../../helpers/commands.js";

const tournament = {
  id: 1,
  img: game1,
  title: "Dota 2 tournament",
  date: "12.12.2003 | 17:00",
  inf: "5v5 | 32 места | 1.000.000₽ ",
  prize_fund: 100000,
  team: true,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, odit.",
  manager: { id: 0, avatar: "/src/images/game1.jpg", name: "gg" },
  contact: "@iburdik",
  status: "completed",
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
            status: "upcoming",
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
        group_rows: [
          {
            id: 333,
            place: 1,
            wins: 2,
            draws: 1,
            loses: 0,
            team: { id: 0, avatar: "/src/images/game1.jpg", name: "kom1" },
            user: null,
          },
          {
            id: 334,
            place: 1,
            wins: 2,
            draws: 1,
            loses: 0,
            team: { id: 0, avatar: "/src/images/game1.jpg", name: "kom2" },
            user: null,
          },
          {
            id: 334,
            place: 1,
            wins: 2,
            draws: 1,
            loses: 0,
            team: { id: 0, avatar: "/src/images/game1.jpg", name: "kom2" },
            user: null,
          },
          {
            id: 334,
            place: 1,
            wins: 2,
            draws: 1,
            loses: 0,
            team: { id: 0, avatar: "/src/images/game1.jpg", name: "kom2" },
            user: null,
          },
          {
            id: 334,
            place: 1,
            wins: 2,
            draws: 1,
            loses: 0,
            team: { id: 0, avatar: "/src/images/game1.jpg", name: "kom2" },
            user: null,
          },
          {
            id: 335,
            place: 1,
            wins: 2,
            draws: 1,
            loses: 0,
            team: { id: 0, avatar: "/src/images/game1.jpg", name: "kom3" },
            user: null,
          },
        ],
      },
      {
        id: 124,
        letter: "A",
        matches: [
          {
            id: 1,
            number: 1,
            format: "bo1",
            status: "upcoming",
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
        group_rows: [
          {
            id: 333,
            place: 1,
            wins: 2,
            draws: 1,
            loses: 0,
            team: { id: 0, avatar: "/src/images/game1.jpg", name: "kom1" },
            user: null,
          },
          {
            id: 334,
            place: 1,
            wins: 2,
            draws: 1,
            loses: 0,
            team: { id: 0, avatar: "/src/images/game1.jpg", name: "kom2" },
            user: null,
          },
          {
            id: 334,
            place: 1,
            wins: 2,
            draws: 1,
            loses: 0,
            team: { id: 0, avatar: "/src/images/game1.jpg", name: "kom2" },
            user: null,
          },
          {
            id: 334,
            place: 1,
            wins: 2,
            draws: 1,
            loses: 0,
            team: { id: 0, avatar: "/src/images/game1.jpg", name: "kom2" },
            user: null,
          },
          {
            id: 334,
            place: 1,
            wins: 2,
            draws: 1,
            loses: 0,
            team: { id: 0, avatar: "/src/images/game1.jpg", name: "kom2" },
            user: null,
          },
          {
            id: 335,
            place: 1,
            wins: 2,
            draws: 1,
            loses: 0,
            team: { id: 0, avatar: "/src/images/game1.jpg", name: "kom3" },
            user: null,
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
        group_rows: [
          {
            id: 333,
            place: 1,
            wins: 2,
            draws: 1,
            loses: 0,
            user: { id: 0, avatar: "/src/images/game1.jpg", name: "inna" },
            team: null,
          },
          {
            id: 333,
            place: 1,
            wins: 2,
            draws: 1,
            loses: 0,
            user: { id: 0, avatar: "/src/images/game1.jpg", name: "inna" },
            team: null,
          },
          {
            id: 333,
            place: 1,
            wins: 2,
            draws: 1,
            loses: 0,
            user: { id: 0, avatar: "/src/images/game1.jpg", name: "inna" },
            team: null,
          },
          {
            id: 334,
            place: 1,
            wins: 2,
            draws: 1,
            loses: 0,
            user: { id: 0, avatar: "/src/images/game1.jpg", name: "kira" },
            team: null,
          },
          {
            id: 335,
            place: 1,
            wins: 2,
            draws: 1,
            loses: 0,
            user: { id: 0, avatar: "/src/images/game1.jpg", name: "nika" },
            team: null,
          },
        ],
      },
    ],
  },

  playoff_stage: {
    id: 123,

    rounds: [
      {
        letter: "1",
        matches: [
          {
            id: "uuid-1-1",
            number: 1,
            bracket: "W",
            format: "bo1",
            status: "upcoming",
            participant1: {
              id: 120,
              name: "Igor",
              avatar: "/src/images/game1.jpg",
            },
            participant2: {
              id: 121,
              name: "Petya",
              avatar: "/src/images/game1.jpg",
            },
            score1: 0,
            score2: 1,
            depends_on_match_1_id: null,
            depends_on_match_2_id: null,
            winner_to_match_id: "uuid-2-1",
          },
          {
            id: "uuid-1-2",
            number: 2,
            bracket: "W",
            format: "bo1",
            status: "ongoing",
            participant1: {
              id: 120,
              name: "Jeka",
              avatar: "/src/images/game1.jpg",
            },
            participant2: {
              id: 121,
              name: "Arseny",
              avatar: "/src/images/game1.jpg",
            },
            score1: 1,
            score2: 0,
            depends_on_match_1_id: null,
            depends_on_match_2_id: null,
            winner_to_match_id: "uuid-2-1",
          },
          {
            id: "uuid-1-3",
            number: 3,
            bracket: "W",
            format: "bo1",
            status: "completed",
            participant1: {
              id: 120,
              name: "Inna",
              avatar: "/src/images/game1.jpg",
            },
            participant2: {
              id: 121,
              name: "Igor",
              avatar: "/src/images/game1.jpg",
            },
            score1: 0,
            score2: 1,
            depends_on_match_1_id: null,
            depends_on_match_2_id: null,
            winner_to_match_id: "uuid-2-2",
          },
          {
            id: "uuid-1-4",
            number: 4,
            bracket: "W",
            format: "bo1",
            status: "completed",
            participant1: {
              id: 120,
              name: "Jopich",
              avatar: "/src/images/game1.jpg",
            },
            participant2: {
              id: 121,
              name: "Popich",
              avatar: "/src/images/game1.jpg",
            },
            score1: 0,
            score2: 1,
            depends_on_match_1_id: null,
            depends_on_match_2_id: null,
            winner_to_match_id: "uuid-2-2",
          },
        ],
      },
      {
        id: 125,
        letter: "2",
        matches: [
          {
            id: "uuid-2-1",
            number: 5,
            bracket: "W",
            format: "bo1",
            status: "upcoming",
            participant1: {
              id: 120,
              name: "Petya",
              avatar: "/src/images/game1.jpg",
            },
            participant2: {
              id: 121,
              name: "Jeka",
              avatar: "/src/images/game1.jpg",
            },
            score1: 0,
            score2: 1,
            depends_on_match_1_id: "uuid-1-1",
            depends_on_match_2_id: "uuid-1-2",
            winner_to_match_id: "uuid-final-1",
          },
          {
            id: "uuid-2-2",
            number: 6,
            bracket: "W",
            format: "bo1",
            status: "upcoming",
            participant1: {
              id: 120,
              name: "Igor",
              avatar: "/src/images/game1.jpg",
            },
            participant2: {
              id: 121,
              name: "Popich",
              avatar: "/src/images/game1.jpg",
            },
            score1: 0,
            score2: 1,
            depends_on_match_1_id: "uuid-1-3",
            depends_on_match_2_id: "uuid-1-4",
            winner_to_match_id: "uuid-final-1",
          },
        ],
      },
    ],
  },

  final: {
    id: "uuid-final-1",
    number: 7,
    bracket: "W",
    format: "bo3",
    status: "upcoming",
    participant1: {
      id: 120,
      name: "Jeka",
      avatar: "/src/images/game1.jpg",
    },
    participant2: {
      id: 121,
      name: "Popich",
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


const getMaxGroupRows = () => {
  return Math.max(
    ...tournament.group_stage.groups.map((group) => group.group_rows.length),
    1
  );
};

const greenRows = (() => {
  const maxRows = getMaxGroupRows();
  if (maxRows <= 4) return Math.ceil(maxRows / 2);
  if (maxRows === 5) return 2;
  if (maxRows >= 6 && maxRows <= 8) return 4;
  return maxRows - 2; // For safety, though max is 8 here
})();

const getRowClass = (index) => {
  if (index < greenRows) return "row--green";
  return "row--red";
};


// const getRowClass = (index, totalRows) => {
//   if (totalRows === 0) return "row--red";

//   let greenRows;
//   if (totalRows <= 4) {
//     greenRows = Math.ceil(totalRows / 2); // For 1-4 rows: half (rounded up) are green
//   } else {
//     greenRows = 4; // For 5+ rows: 4 rows are green
//   }

//   // Determine color based on index
//   if (index < greenRows) return "row--green";
//   return "row--red";
// };

export default function TournamentPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const [activeStage, setActiveStage] = useState("playoff");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);

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

  const handleApplyClick = () => {
    if (tournament.status !== "open" || isApplied) return;
    if (tournament.team) {
      setIsModalOpen(true);
    } else {
      setIsApplied(true);
      console.log("Отправка заявки на сервер для индивидуального участия");
    }
  };

  const handleTeamSelect = (team) => {
    setSelectedTeam(team);
  };

  const handleTeamApply = () => {
    if (!selectedTeam) {
      console.log("Ошибка: команда не выбрана");
      return;
    }

    console.log("Отправка заявки на сервер для командного участия", {
      tournamentId: id,
      teamId: selectedTeam.id,
      teamName: selectedTeam.name,
      userId: "currentUserId",
    });

    setIsApplied(true);
    setIsModalOpen(false);
    setSelectedTeam(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTeam(null);
  };

  // Calculate the maximum number of matches in any round to determine the height of the bracket
  const maxMatchesInRound = Math.max(
    ...tournament.playoff_stage.rounds.map((round) => round.matches.length),
    1 // For the final
  );

  // Function to render a single round with proper spacing
  const renderRound = (round) => {
    const matches = round.matches;
    return (
      <div key={round.id} className="bracket-column">
        <h3 className="bracket-column__title">Раунд {round.letter}</h3>
        <div className="bracket-column__matches">
          {matches.map((match) => (
            <div key={match.id} className="bracket-match-wrapper">
              <MatchCard match={match} className="match-card--bracket" />
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render the final match
  const renderFinal = () => {
    return (
      <div className="bracket-column">
        <h3 className="bracket-column__title">Финал</h3>
        <div className="bracket-column__matches">
          <div className="bracket-match-wrapper">
            <MatchCard
              match={tournament.final}
              className="match-card--bracket"
            />
          </div>
        </div>
      </div>
    );
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

        <div className="tournament-page__header-right">
          <SubmitButton
            text={isApplied ? "Заявка отправлена" : "Подать заявку"}
            onClick={handleApplyClick}
            disabled={tournament.status !== "open" || isApplied}
            isSent={isApplied}
          />
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

        {activeTab === "bracket" && (
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
                <div className="tournament-stage__groups-container">
                  {tournament.group_stage.groups.map((group) => (
                    <div key={group.id} className="tournament-stage__group">
                      <h3 className="tournament-stage__title">
                        Группа {group.letter}
                      </h3>
                      <div className="tournament-stage__standings">
                        <div className="standings-header">
                          <span>Место</span>
                          <span>Участник</span>
                          <span>В</span>
                          <span>Н</span>
                          <span>П</span>
                          <span>Очки</span>
                        </div>
                        {group.group_rows.map((row, index) => {
                          const entity = row.team || row.user;
                          const linkTo = row.team
                            ? `/team/${entity.id}`
                            : `/profile/${entity.id}`;
                            const points = row.wins * 2 + row.draws;
                          return (
                            <div
                              key={row.id}
                              className={`standings-row ${getRowClass(
                                index,
                                group.group_rows.length
                              )}`}
                            >
                              <span>{row.place}</span>
                              <Link to={linkTo} className="standings-entity">
                                <img
                                  src={entity.avatar}
                                  alt="avatar"
                                  className="entity-avatar"
                                />
                                <span>{entity.name}</span>
                              </Link>
                              <span>{row.wins}</span>
                              <span>{row.draws}</span>
                              <span>{row.loses}</span>
                              <span>{points}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeStage === "playoff" && (
              <div className="tournament-bracket">
                {tournament.playoff_stage.rounds.map((round) =>
                  renderRound(round)
                )}
                {renderFinal()}
              </div>
            )}
          </>
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
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <TitleH2 title="Выберите команду" />
        <div className="modal-content__teams">
          <RoundCards
            style="modal"
            users={commands}
            isRequest={false}
            isTeam={true}
            onSelect={handleTeamSelect}
            selectedTeamId={selectedTeam?.id}
          />
        </div>

        <div className="modal-content__actions">
          <SubmitButton
            text="Подать заявку"
            onClick={handleTeamApply}
            disabled={!selectedTeam}
          />
        </div>
      </Modal>
    </div>
  );
}
