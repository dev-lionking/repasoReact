import React from "react";
import ReactDOM from "react-dom/client";
import UsersApp from "./components/UsersApp";
// import ListadoApp from "./components/ListadoApp";
// import ContadorApp from "./components/ContadorApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ContadorApp value={0} /> */}
    {/* <ListadoApp /> */}
    <UsersApp />
  </React.StrictMode>
);
