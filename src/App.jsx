// import "./global.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home";
import Games from "./pages/Games/Games";
import Friends from "./pages/Friends/Friends.jsx";
import Commands from "./pages/Commands/Commands.jsx";
// import HeaderLogIn from "./components/Header/HeaderLogIn.jsx";

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
          <Route path="/commands" element={<Commands />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
