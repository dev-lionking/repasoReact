import { useState } from "react";
import UsersList from "./UsersList";

const UsersApp = () => {
  const [endPoint, setEndPoint] = useState("users");

  const handleFetch = () => {
    setEndPoint("comments");
  };

  return (
    <>
      <h1>Listado de usuarios - Obtenido de jsonplaceholder</h1>
      <UsersList endPoint={endPoint} />
      <button onClick={handleFetch}>Comentarios</button>
    </>
  );
};

export default UsersApp;
