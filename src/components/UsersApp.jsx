import React, { useEffect, useState } from "react";

const UsersApp = () => {
  const [usuarios, setUsuarios] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = response.json();
      console.log(data);
      setUsuarios(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return () => {
      fetchUsers();
    };
  }, []);

  return (
    <>
      <h1>Listado de usuarios - Obtenido de jsonplaceholder</h1>
      <ul>
        {users.map(user => <li key={}></li>)}
      </ul>
    </>
  );
};

export default UsersApp;
