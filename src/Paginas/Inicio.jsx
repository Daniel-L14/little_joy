import Hero from "../Componentes/Hero";
import Banner from "../Componentes/Banner";
import Productos from "../Componentes/Productos";

export default function Inicio({ productos, searchQuery }) {
  const filtrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Hero />
      <Banner />
      <Productos productos={filtrados} />
    </>
  );
}