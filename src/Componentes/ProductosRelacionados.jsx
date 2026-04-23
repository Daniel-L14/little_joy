import { useNavigate } from "react-router-dom";

export default function ProductosRelacionados({ productos, productoActual }) {
  const navigate = useNavigate();

  const relacionados = productos
    .filter(
      (p) =>
        p.categoria === productoActual.categoria &&
        p.id !== productoActual.id
    )
    .slice(0, 4);

  if (relacionados.length === 0) return null;

  return (
    <div style={{ marginTop: "60px" }}>
      <h2 style={{ marginBottom: "20px" }}>También te puede gustar</h2>

      <div className="grid grid-4">
        {relacionados.map((p) => (
          <div
            key={p.id}
            className="tarjeta"
            onClick={() => navigate(`/producto/${p.id}`)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={p.imagenes[0]}
              className="imagen"
            />

            <h3>{p.nombre}</h3>
            <p>${p.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}