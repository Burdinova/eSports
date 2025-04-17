import "./titleh2.scss";
// import ModalButton from "../Button/ModalButton";

export default function TitleButton({ title, text, onClick }) {
  return (
    <div className="titleButton">
      <h2 className="titleButton__h2">{title}</h2>
      <button onClick={onClick} className="titleButton__button">{text}</button>
      {/* <ModalButton /> */}
    </div>
  );
}
