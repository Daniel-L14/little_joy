export default function Productos() {
  return (
    <div className="grid grid-4" style={{ padding: "20px" }}>
      {[1,2,3,4].map((p) => (
        <div className="tarjeta" key={p}>
          <div style={{ height: "150px", background: "#FFF8F0", borderRadius: "12px" }} />

          <span style={{
            background: "#C7D9A3",
            padding: "5px 10px",
            borderRadius: "10px",
            fontSize: "12px"
          }}>
            Nuevo
          </span>

          <h3>Body Bebé</h3>
          <p>$49.900</p>

          <button className="boton">Añadir al carrito</button>
        </div>
      ))}
    </div>
  );
}