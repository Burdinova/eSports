import "./friends.scss";

import { useState } from "react";

import { friends, requests, allusers } from "../../helpers/friend.js";

import TitleH2 from "../../components/TitleH2/TitleH2.jsx";
import TabSwich from "../../components/TabSwitch/TabSwith.jsx";
import RoundCards from "../../components/RoundCard/RoundCardsContainer.jsx";
import ModalButton from "../../components/Button/ModalButton.jsx";
import Modal from "../../components/Modal/Modal.jsx";
import Search from "../../components/Search/Search.jsx";

export default function Friends() {
  const [activeTab, setActiveTab] = useState("friends");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [query, setQuery] = useState("");
  // const [sentRequests, setSentRequests] = useState([]);
  const [disabledUsers, setDisabledUsers] = useState(new Set()); // Состояние для тех, кому уже отправили запрос

  const filteredFriends = allusers.filter((user) =>
    user.name?.toLowerCase().includes(query.toLowerCase())
  );

  // const handleSendRequest = (userId) => {
  //   setSentRequests((prev) => [...prev, userId]);
  //   // Тут можно добавить реальный запрос к серверу, если нужно
  // };

  // Функция для отправки запроса на сервер
  const handleSendRequest = (userId) => {
    // Сделать кнопку неактивной сразу после нажатия
    setDisabledUsers((prev) => new Set(prev).add(userId));

    // Тут мы отправляем запрос на сервер с ID пользователя (можно заменить на реальный запрос)
    console.log("Запрос на сервер отправлен для пользователя с ID:", userId);

    // Если нужно, отправь запрос на сервер здесь.
    // Например: axios.post("/send-request", { userId })
  };

  const tabs = [
    { id: "friends", label: "Ваши друзья" },
    { id: "requests", label: "Заявки в друзья" },
  ];

  console.log(disabledUsers);

  return (
    <div>
      <div className="title-with-button">
        <TitleH2 title="Друзья" />
        <ModalButton
          text="Добавить друга"
          onClick={() => {
            setIsModalOpen(true);
            setQuery(""); // очистить ввод при открытии
          }}
        />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Search placeholder="Введите ник" value={query} onChange={setQuery} />

        {query && (
          <div className="friend-results">
            {/* {filteredFriends.length > 0 ? (
              filteredFriends.map((user) => (
                <div key={user.id} className="friend-user">
                  {user.name}
                </div>
              ))
            ) : (
              <div className="friend-user empty">Никого не найдено</div>
            )} */}

            {filteredFriends.length > 0 ? (
              filteredFriends.map((user) => (
                <div key={user.id} className="friend-user">
                  {/* Отображение аватара, ника и кнопки */}
                  <div className="friend-user-row">
                    <img src={user.avatar} alt="avatar" className="avatar" />
                    <span className="nickname" title={user.name}>
                      {user.name}
                    </span>
                    <button
                      className={`friend-button add ${disabledUsers.has(user.id) ? "sent" : ""}`}
                      onClick={() => !disabledUsers.has(user.id) && handleSendRequest(user.id)}
                      disabled={disabledUsers.has(user.id)}
                    >+</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="friend-user empty">Никого не найдено</div>
            )}

            {/* {filteredFriends.length > 0 ? (
              filteredFriends.map((user) => {
                const isSent = sentRequests.includes(user.id);

                return (
                  <div key={user.id} className="friend-user-row">
                    <img src={user.avatar} alt="avatar" className="avatar" />
                    <span className="nickname" title={user.name}>
                      {user.name}
                    </span>
                    <button
                      className={`friend-button ${isSent ? "sent" : "add"}`}
                      onClick={() => !isSent && handleSendRequest(user.id)}
                      disabled={isSent}
                    >
                      +
                    </button>
                  </div>
                );
              })
            ) : (
              <div className="friend-user empty">Никого не найдено</div>
            )} */}
          </div>
        )}
      </Modal>

      <TabSwich tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />

      <div className="tab-content">
        {activeTab === "friends" ? (
          <RoundCards users={friends} isRequest={false} />
        ) : (
          <RoundCards users={requests} isRequest={true} />
        )}
      </div>
    </div>
  );
}
