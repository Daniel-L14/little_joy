import { useState } from "react";
import Productos from "../Componentes/Productos";

export default function Categorias({ productos }) {
  const [categoria, setCategoria] = useState("todos");

  const filtrados =
    categoria === "todos"
      ? productos
      : productos.filter((p) => p.categoria === categoria);

  return (
    <div>
      <h2 style={{ padding: "20px" }}>Categorías</h2>

      <div style={{ padding: "20px" }}>
        <button onClick={() => setCategoria("todos")}>Todos</button>
        <button onClick={() => setCategoria("recien-nacidos")}>Recién nacidos</button>
        <button onClick={() => setCategoria("ninos")}>Niños</button>
        <button onClick={() => setCategoria("ninas")}>Niñas</button>
      </div>

      <Productos productos={filtrados} />
    </div>
  );
}