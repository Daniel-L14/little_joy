import { useNavigate } from "react-router-dom";
import useScrollAnimacion from "../hooks/useScrollAnimacion";

export default function Productos({ productos }) {
  const navigate = useNavigate();
  const [ref, visible] = useScrollAnimacion();

  return (
    <div
      ref={ref}
      className={`grid grid-4 scroll ${visible ? "visible" : ""}`}
    >
      {productos.map((p) => (
        <div
          className="tarjeta"
          key={p.id}
          onClick={() => navigate(`/producto/${p.id}`)}
        >
          <img src={p.imagenes[0]} className="imagen" />

          <h3>{p.nombre}</h3>
          <p>${p.precio}</p>

          <button
            className="boton"
            onClick={(e) => {
              e.stopPropagation();
              window.open(
                `https://wa.me/57314235?text=Hola, quiero comprar: ${p.nombre}`
              );
            }}
          >
            Comprar ahora
          </button>
        </div>
      ))}
    </div>
  );
}