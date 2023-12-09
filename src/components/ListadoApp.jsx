import { useState } from "react";
import AgregaTareas from "./AgregaTareas";

const Item = ({ nombre, visto }) => {
  return (
    <li>
      {nombre} {visto ? "✔" : "❌"}
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
    { id: 1, nombre: "Uso de Vite", visto: true },
    { id: 2, nombre: "Componentes", visto: true },
    { id: 3, nombre: "Variables en JSX", visto: true },
    { id: 4, nombre: "Props", visto: true },
    { id: 5, nombre: "Eventos", visto: true },
    { id: 6, nombre: "Redux", visto: false },
    { id: 7, nombre: "customHooks", visto: false },
  ];
  const [arreglo, setArreglo] = useState(listadoSecciones);

  const onAgregarTarea = (val) => {
    let valor = val.trim();
    if (valor < 1) return;
    const envio = {
      id: arreglo.length + 1,
      nombre: val,
      visto: false,
    };

    setArreglo([...arreglo, envio]);
  };

  return (
    <>
      <h1>Listado de temas del curso</h1>

      <AgregaTareas agregarTarea={onAgregarTarea} />

      <ol>
        {arreglo.map((item) => (
          <Item key={item.id} nombre={item.nombre} visto={item.visto}></Item>
        ))}
      </ol>
    </>
  );
};

export default ListadoApp;
