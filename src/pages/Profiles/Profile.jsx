import { useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Профиль пользователя</h1>
      <p>ID пользователя: {id}</p>
      {/* Здесь можно будет по id получать данные пользователя с сервера */}
    </div>
  );
}