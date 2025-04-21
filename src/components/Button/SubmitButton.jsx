import "./button.scss";

export default function SubmitButton({ text }) {
  return (
    <button type="submit" className="button button__submit">
      {text}
    </button>
  );
}
