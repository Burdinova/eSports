import "./search.scss";

export default function Search({placeholder ="", value, onChange}) {
  return (
    <div className="search-wrapper">
      <form className="search" action="" onSubmit={(e) => e.preventDefault()}>
        <input
          className="search__input"
          type="search"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button className="search__button" type="button"></button>
      </form>
    </div>
  );
}
