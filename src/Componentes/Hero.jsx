import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero fade-in">
      <h1>Pequeños momentos, grandes alegrías</h1>

      <p>
        Descubre ropa suave, cómoda y diseñada con amor para tu bebé.
      </p>

      <button
        className="boton"
        onClick={() => navigate("/categorias")}
        style={{ marginTop: "20px", maxWidth: "200px" }}
      >
        Ver colección
      </button>
    </div>
  );
}