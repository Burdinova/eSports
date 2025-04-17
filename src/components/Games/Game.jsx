import "./gamesMain.scss";

export default function Game({ title, img }) {
  return (
    <li className="game">
      <a href="./project-page.html">
        <img src={img} alt={title} className="game__img" />
        <h3 className="game__title">{title}</h3>
      </a>
    </li>
  );
}
