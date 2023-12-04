import React from "react";
import ReactDOM from "react-dom/client";
import PrimerComponente from "./PrimerComponente";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimerComponente titulo="Este titulo es de props" />
  </React.StrictMode>
);
