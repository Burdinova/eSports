import "./tournaments.scss";

export default function Game({ title, img, date, inf }) {
  return (
    <li className="tournament">
      <a href="./project-page.html">
        <img src={img} alt={title} className="tournament__img" />
        <p className="tournament__date">{date}</p>
        <h3 className="tournament__title">{title}</h3>
        <p className="tournament__inf">{inf}</p>
      </a>
    </li>
  );
}
