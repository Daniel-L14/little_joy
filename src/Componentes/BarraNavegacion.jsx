import { ShoppingCart, Search } from "lucide-react";

export default function BarraNavegacion() {
  return (
    <div className="barra">
      <h2>Little Joy</h2>

      <div>
        <a href="#">Inicio</a> | 
        <a href="#"> Categorías</a> | 
        <a href="#"> Ofertas</a>
      </div>

      <div>
        <Search />
        <ShoppingCart />
      </div>
    </div>
  );
}