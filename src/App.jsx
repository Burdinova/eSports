// import "./global.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home";
import Games from "./pages/Games/Games";
import Friends from "./pages/Friends/Friends.jsx";
import Commands from "./pages/Teams/Teams.jsx";
import HeaderLogIn from "./components/Header/HeaderLogIn.jsx";
import AboutGame from "./pages/Games/AboutGame.jsx";
import Tournaments from "./pages/Tournaments/UserTournaments.jsx";
import NewTournament from "./pages/Tournaments/NewTournament.jsx";
import TeamPage from "./pages/Teams/TeamPage.jsx";
import TournamentPage from "./pages/Tournaments/TournamentPage.jsx";
// import Notifications from "./pages/Notifications/Notifications.jsx";

import Profile from "./pages/Profiles/Profile.jsx"
import MyProfile from "./pages/Profiles/MyProfile.jsx"; // Твой личный проф

function App() {
  return (
    <div className="App">
      <Sidebar />
      {/* <HeaderLogIn /> */}
      <Header />
      <div
        className="MainWrapper"
        style={{
          maxWidth: "1800px",
          marginLeft: "7%",
          width: "93%",
          // right: "0",
          // display: "flex",
          margin: "0 auto",

          //   backgroundColor: "#141414",
          padding: "0 3% 0 10%",
          paddingTop: Math.max(window.innerHeight * 0.04, 40),
          // paddingTop: "4%",
          // marginTop: "100px",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/teams" element={<Commands />} />
          <Route path="/games/:id" element={<AboutGame />} />{" "}
          {/* Теперь принимаем id игры */}
          <Route path="/tournaments" element={<Tournaments />} />


        {/* Личный профиль */}
        <Route path="/profile" element={<MyProfile />} />
        
        {/* Профиль другого пользователя по id */}
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/newtournament" element={<NewTournament />} />
        <Route path="/team/:id" element={<TeamPage />} />
        <Route path="/tournament/:id" element={<TournamentPage />} />
        {/* <Route path="/notifications" element={<Notifications />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
