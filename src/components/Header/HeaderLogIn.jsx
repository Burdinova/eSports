import "./header.scss";
import { useState } from "react";
import ModalButton from "../Button/ModalButton.jsx";
import Modal from "../Modal/Modal.jsx";

export default function HeaderLogIn() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="header">

            <div className="header__item" >
                <ModalButton
                    text="Вход"
                    onClick={() => setIsModalOpen(true)}
                />
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    варп
                </Modal>

            </div>
        </div>
    );
}