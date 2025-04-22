import "./header.scss";
import { useState } from "react";
import ModalButton from "../Button/ModalButton.jsx";
import Modal from "../Modal/Modal.jsx";
import TabSwich from "../TabSwitch/TabSwith.jsx";
import TextInput from "../InputFields/TextInput.jsx";

export default function HeaderLogIn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [email, setTeamName] = useState("");
  const [password, setPassword] = useState("");

  const [activeTab, setActiveTab] = useState("login");
  const tabs = [
    { id: "login", label: "Вход" },
    { id: "register", label: "Зарегистрироваться" },
  ];

  return (
    <div className="header">
      <div className="header__item">
        <ModalButton text="Вход" onClick={() => setIsModalOpen(true)} />
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <TabSwich
            tabs={tabs}
            activeTab={activeTab}
            onTabClick={setActiveTab}
          />

          <TextInput
            id="email"
            label="Почта:"
            value={email}
            onChange={(e) => setTeamName(e.target.value)}
            placeholder="Введите почту"
          />
          <TextInput
            id="password"
            label="Пароль:"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
          />
        </Modal>
      </div>
    </div>
  );
}
