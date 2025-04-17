import GamesMain from "../../components/Games/GamesMain.jsx";
import TitleH2 from "../../components/TitleH2/TitleH2.jsx";
import Search from "../../components/Search/Search.jsx";
export default function Games() {
  return (
    <div>
      <TitleH2 title="Игры" />
      <Search />
      <GamesMain />
    </div>
  );
}
