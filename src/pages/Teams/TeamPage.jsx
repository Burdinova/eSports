import { useParams } from "react-router-dom";

export default function TeamPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Страница команды</h1>
      <p>ID команды: {id}</p>
    </div>
  );
}
