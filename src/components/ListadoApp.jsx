import { useState } from "react";
import AgregaTareas from "./AgregaTareas";

const Item = ({ nombre, visto }) => {
  return (
    <li>
      {nombre} {visto ? " - Visto" : " - No visto"}
    </li>
  );
};

const ListadoApp = () => {
  const addTask = () => {
    setArreglo([...arreglo, { nombre: "nuevo", visto: false }]);
  };

  let listadoSecciones = [
    {
      nombre: "Instalaciones necesarias",
      visto: true,
    },
    { nombre: "Uso de Vite", visto: true },
    { nombre: "Componentes", visto: true },
    { nombre: "Variables en JSX", visto: true },
    { nombre: "Props", visto: true },
    { nombre: "Eventos", visto: true },
    { nombre: "Redux", visto: false },
    { nombre: "customHooks", visto: false },
  ];
  const [arreglo, setArreglo] = useState(listadoSecciones);

  return (
    <>
      <h1>Listado de temas del curso</h1>

      <AgregaTareas />

      <ol>
        {arreglo.map((item) => (
          <Item
            key={item.nombre}
            nombre={item.nombre}
            visto={item.visto}
          ></Item>
        ))}
      </ol>
    </>
  );
};

export default ListadoApp;
