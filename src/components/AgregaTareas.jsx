import { useState } from "react";

const AgregaTareas = () => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
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
