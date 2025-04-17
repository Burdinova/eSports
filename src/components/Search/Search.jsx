import "./search.scss";

export default function Search() {
  return (
    <div>
      <form className="search" action="">
        <input
          className="search__input"
          type="search"
          placeholder="Введите название игры"
        />
        <button className="search__button" type="button"></button>
      </form>
    </div>
  );
}
