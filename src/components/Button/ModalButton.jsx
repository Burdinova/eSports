import "./button.scss";

export default function ModalButton({ text, onClick }) {
	return (
		<button onClick={onClick} className="button button__modal">{text}</button>
	);
}