import "./inputFields.scss";

export default function TextInput({ id, label, value, onChange, placeholder, type = "text" }) {
  return (
    <div className="field-wrapper">
      <label className="field-label" htmlFor={id}>
        {label}
      </label>
      <input required 
        // type="text"
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="text-input"
      />
    </div>
  );
}
