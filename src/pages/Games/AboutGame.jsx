import { useParams } from 'react-router-dom';
import { useState } from "react";

import Game from "../../components/Games/Game";
import { games } from "../../helpers/gamesList";
import TitleH2 from '../../components/TitleH2/TitleH2';
import "./aboutGame.scss";
import TabSwich from '../../components/TabSwitch/TabSwith';

export default function AboutGame() {

    const { id } = useParams(); // Получаем id игры из URL
    const gameInfo = games.find((game) => game.id.toString() === id); // Преобразование id в строку для сравнения
    const [activeTab, setActiveTab] = useState("review");
    const tabs = [
        { id: "review", label: "Обзор" },
        { id: "tournament", label: "Турнир" },
        { id: "rating", label: "Рейтинг" },
    ];

    if (!gameInfo) {
        return <p>Игра не найдена.</p>; // Сообщение об ошибке, если игра не найдена
    }

    // console.log(activeTab);

    return (
        <div>
            <div className="aboutgame__header">
                {/* <TitleH2 title={gameInfo.title} /> */}
                <img className="aboutgame__header-image" src={gameInfo?.img ?? ''} alt="" />
                <TitleH2 className="aboutgame__header-title" title={gameInfo?.title ?? 'Название неизвестно'} />
                {/* <Game title={gameInfo.title} img={gameInfo.img}/> */}
            </div>
            <div className='aboutgame__section'>
                <TabSwich tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />
            </div>
        </div>
    );
}