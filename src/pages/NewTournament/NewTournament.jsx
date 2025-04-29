// import { useEffect, useState } from "react";

// export default function NevTournamentPage() {
//   const [tournamentData, setTournamentData] = useState(null);

//   useEffect(() => {
//     const data = localStorage.getItem("tournamentData");
//     if (data) {
//       setTournamentData(JSON.parse(data));
//     }
//   }, []);

//   if (!tournamentData) return <p>Загрузка...</p>;

//   return (
//     <div>
//       <h1>Создание турнира</h1>
//       <p>Игра: {tournamentData.game.title}</p>
//       <p>Название турнира: {tournamentData.tournamentName}</p>
//     </div>
//   );
// }


import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function NevTournamentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { game, tournamentName } = location.state || {};

  useEffect(() => {
    if (!game || !tournamentName) {
      // Если пришли напрямую или потеряли state — редирект обратно
      navigate("/", { replace: true });
    }
  }, [game, tournamentName, navigate]);

//   if (!game || !tournamentName) return null; 

  return (
    <div>
      <h1>Создание турнира</h1>
      <p>Игра: {game.title}</p>
      <p>Название турнира: {tournamentName}</p>
    </div>
  );
}

