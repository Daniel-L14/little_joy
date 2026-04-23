import { Link } from "react-router-dom";
import { Search } from "lucide-react";

export default function BarraNavegacion({ setSearchQuery }) {
  return (
    <div className="barra">
      <h2>Little Joy</h2>

      <div>
        <Link to="/">Inicio</Link>
        <Link to="/categorias">Categorías</Link>
        <Link to="/ofertas">Ofertas</Link>
      </div>

      <div className="buscador">
        <Search />
        <input
          type="text"
          placeholder="Buscar..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
}