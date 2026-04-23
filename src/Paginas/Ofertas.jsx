import Productos from "../Componentes/Productos";

export default function Ofertas({ productos }) {
  const ofertas = productos.filter((p) => p.oferta);

  return (
    <div>
      <h2 style={{ padding: "20px" }}>Ofertas</h2>
      <Productos productos={ofertas} />
    </div>
  );
}