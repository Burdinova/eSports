// import "./global.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home";
import Games from "./pages/Games/Games";
import Friends from "./pages/Friends/Friends.jsx";
import Commands from "./pages/Commands/Commands.jsx";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <div
        className="MainWrapper"
        style={{
          marginLeft: "7%",
          width: "93%",
// right: "0",
          // display: "flex",
          // marginTop: "4%",
          
          //   backgroundColor: "#141414",
          padding: "0 3% ",
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
