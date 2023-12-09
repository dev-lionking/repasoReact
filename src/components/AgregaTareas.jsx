import { useState } from "react";

const AgregaTareas = ({ agregarTarea }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    // const addtarea = {
    //   nombre: inputValue,
    //   visto: false,
    // };
    event.preventDefault();
    // agregarTarea((tareas) => [...tareas, addtarea]);
    agregarTarea(inputValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Ingrese texto"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

export default AgregaTareas;
