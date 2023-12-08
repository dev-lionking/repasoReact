import React from "react";
import ReactDOM from "react-dom/client";
import ListadoApp from "./components/ListadoApp";
// import ContadorApp from "./components/ContadorApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ContadorApp value={0} /> */}
    <ListadoApp />
  </React.StrictMode>
);
