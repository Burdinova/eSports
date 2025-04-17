import { useState } from "react";
import "./CreateTeamForm.scss";
import AvatarUploader from "./AvatarUploader";

export default function CreateTeamForm({ onSubmit }) {
  const [teamName, setTeamName] = useState("");
  const [description, setDescription] = useState("");
  const [logoFile, setLogoFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ teamName, description, logoFile });
  };

  const handleFileChange = (e) => {
    setLogoFile(e.target.files[0]);
  };

  return (
    <form className="create-team-form" onSubmit={handleSubmit}>
      <h2>Создание команды</h2>

      {/* <label className="field-label">
      Логотип команды:
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </label> */}

      <AvatarUploader onChange={(file) => setLogoFile(file)} />

      {/* <label className="field-label">
      Название команды:
      <input
        type="text"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        placeholder="Введите название"
        className="text-input"
      />
    </label> */}
      <div className="field-wrapper">
        <label className="field-label" htmlFor="teamName">
          Название команды:
        </label>
        <input
          type="text"
          id="teamName"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          placeholder="Введите название"
          className="text-input"
        />
      </div>
      <div className="field-wrapper">
        <label className="field-label" htmlFor="description">
          Описание команды:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Введите описание"
          className="textarea-input"
        />
      </div>
      {/* <label className="field-label">
        Описание команды:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Введите описание"
          className="textarea-input"
        />
      </label> */}

      <button type="submit" className="modal-button">
        Создать
      </button>
    </form>
  );
}
