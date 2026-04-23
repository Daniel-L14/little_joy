export default function Categorias() {
  const categorias = ["Recién Nacidos", "Niños", "Niñas", "Accesorios"];

  return (
    <div className="grid grid-4" style={{ padding: "20px" }}>
      {categorias.map((cat) => (
        <div className="tarjeta" key={cat}>
          <div style={{ height: "100px", background: "#FFF8F0", borderRadius: "12px" }} />
          <p style={{ textAlign: "center" }}>{cat}</p>
        </div>
      ))}
    </div>
  );
}